"use client";

import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { useForm } from "react-hook-form";

export default function Page() {
  const form = useForm({
    defaultValues: {
      image: "",
    },
  });
  return (
    <div className="h-full space-y-4">
      <h1 className="text-gray-dark-2 text-2xl font-bold">Edit Profile</h1>
      <Separator />
      <Form {...form}>
        <form className="space-y-4">
          <div className="grid grid-cols-2">
            <div>
              <p className="text-gray-dark-2 font-semibold">Profile Picture</p>
            </div>
            <FormField
              name="image"
              control={form.control}
              render={() => (
                <div className="flex items-center space-x-2">
                  <div className="border rounded-full w-24 h-24"></div>
                  <Button size="sm" variant="outline" className="rounded-md">
                    Change Picture
                  </Button>
                </div>
              )}
            />
          </div>
          <Separator />
        </form>
      </Form>
    </div>
  );
}
