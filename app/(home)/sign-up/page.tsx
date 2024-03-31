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
import { trpc } from "@/lib/trpc/client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const signupConfig = z.object({
  name: z.string().trim().min(1, { message: "Fullname is required" }),
  email: z.string().email(),
  password: z.string().min(4, { message: "Password is required" }),
  role: z.enum(["USER", "DOCTOR"]),
});

export default function Page() {
  const router = useRouter();
  const signUpUserMutation = trpc.user.signUpUser.useMutation({
    onSuccess: () => {
      toast.success("Sign Up Sucessfully");
      router.push("/log-in");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const signUpDoctorMutation = trpc.doctor.signUpDoctor.useMutation({
    onSuccess: () => {
      toast.success("Sign Up Sucessfully");
      router.push("/log-in");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const form = useForm<z.infer<typeof signupConfig>>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(signupConfig),
  });

  const onSubmit = (values: z.infer<typeof signupConfig>) => {
    if (values.role === "USER") {
      signUpUserMutation.mutate(values);
    } else {
      signUpDoctorMutation.mutate(values);
    }
  };

  return (
    <div className="w-full flex flex-col items-center p-8">
      <AuthCard isSignup={true}>
        <Form {...form}>
          <form
            className="w-[95%] px-2 space-y-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={signUpUserMutation.isLoading}
                      placeholder="Fullname *"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={signUpUserMutation.isLoading}
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
                      disabled={signUpUserMutation.isLoading}
                      placeholder="Password *"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger className="rounded-full h-10 bg-secondary/40">
                        <SelectValue placeholder="Select Role *" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="USER">User</SelectItem>
                      <SelectItem value="DOCTOR">Doctor</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              size="lg"
              type="submit"
              disabled={
                signUpUserMutation.isLoading || signUpDoctorMutation.isLoading
              }
            >
              Sign Up
            </Button>
          </form>
        </Form>
      </AuthCard>
    </div>
  );
}
