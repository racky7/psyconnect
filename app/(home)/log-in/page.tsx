"use client";

import { useTransition } from "react";
import { z } from "zod";
import AuthCard from "../_components/auth-card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const loginConfig = z.object({
  email: z.string().email(),
  password: z.string().min(4, { message: "Password is required" }),
});

export default function Page() {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof loginConfig>>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginConfig),
  });

  const onSubmit = (values: z.infer<typeof loginConfig>) => {
    startTransition(() => {
      //   register(values).then((data) => {
      //     console.log(data);
      //   });
    });
  };

  return (
    <div className="w-full flex flex-col items-center p-8">
      <AuthCard isSignup={false}>
        <Form {...form}>
          <form
            className="w-[95%] px-2 space-y-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Email *"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Password *"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button size="lg" type="submit">
              Log In
            </Button>
          </form>
        </Form>
        <div className="text-sm">
          Test Credentials - <button className="underline">User </button> /{" "}
          <button className="underline">Doctor</button>
        </div>
      </AuthCard>
    </div>
  );
}
