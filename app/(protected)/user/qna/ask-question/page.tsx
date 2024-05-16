"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import Editor from "react-simple-wysiwyg";

const questionConfig = z.object({
  topic: z.string().min(1),
  category: z.string().min(1),
  description: z.string().min(1),
});

export default function Page() {
  const router = useRouter();
  const form = useForm<z.infer<typeof questionConfig>>({
    defaultValues: {},
    resolver: zodResolver(questionConfig),
  });

  return (
    <div className="w-[750px] mx-auto px-8 space-y-8">
      <div className="flex items-center space-x-2">
        <Button
          variant="link"
          className="p-0 m-0"
          onClick={() => {
            router.back();
          }}
        >
          Discussion
        </Button>
        <span>{">"}</span>
        <Button
          variant="link"
          disabled={true}
          className="text-gray-500 p-0 m-0"
        >
          Ask Anonymously
        </Button>
      </div>
      <Form {...form}>
        <form
          className="space-y-8"
          onSubmit={form.handleSubmit(
            (values: z.infer<typeof questionConfig>) => {
              console.log(values);
            }
          )}
        >
          <FormField
            control={form.control}
            name="topic"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">
                  What is Your Discussion About?
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter topic of your choice" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="rounded-full h-10 bg-slate-50/50">
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {topics.map((topic, idx) => (
                      <SelectItem key={idx} value={topic}>
                        {topic}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Describe Your Topic</FormLabel>
                <FormControl>
                  <Editor
                    {...field}
                    containerProps={{ style: { height: 150 } }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex w-full justify-center">
            <Button type="submit" size="lg">
              Start Discussion
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

const topics = [
  "Relationships",
  "Self-Care",
  "Anxiety",
  "Depression",
  "Mindfulness",
  "Mental Wellness",
  "Guilt",
  "Anger",
  "Therapy",
  "Psychology",
  "Exercises",
  "OCD",
];
