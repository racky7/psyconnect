"use client";

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
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc/client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const loginConfig = z.object({
  email: z.string().email(),
  password: z.string().min(4, { message: "Password is required" }),
});

export default function Page() {
  const router = useRouter();
  const loginMutation = trpc.user.logInUser.useMutation({
    onSuccess: (user) => {
      toast.success("Login successful");
      router.push(user?.role === "DOCTOR" ? "/doctor" : "/user");
    },
    onError: (error) => {
      toast.error("Login failed");
    },
  });
  const form = useForm<z.infer<typeof loginConfig>>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginConfig),
  });

  const onSubmit = (values: z.infer<typeof loginConfig>) => {
    loginMutation.mutate(values);
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
                      disabled={loginMutation.isLoading}
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
                      type="password"
                      disabled={loginMutation.isLoading}
                      placeholder="Password *"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button size="lg" type="submit" loading={loginMutation.isLoading}>
              Log In
            </Button>
          </form>
        </Form>
        <div className="text-sm">
          Test Credentials -{" "}
          <button
            onClick={() => {
              form.setValue("email", "testuser@gmail.com");
              form.setValue("password", "1234");
            }}
            className="underline"
          >
            User{" "}
          </button>{" "}
          /{" "}
          <button
            className="underline"
            onClick={() => {
              form.setValue("email", "testdoctor@gmail.com");
              form.setValue("password", "1234");
            }}
          >
            Doctor
          </button>
        </div>
      </AuthCard>
    </div>
  );
}
