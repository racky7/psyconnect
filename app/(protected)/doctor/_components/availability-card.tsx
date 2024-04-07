"use client";

import { useForm, useWatch } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { TimeString, getTimeOptions } from "@/lib/availability";
import { Calendar } from "lucide-react";
import { trpc } from "@/lib/trpc/client";

export default function AvailabilityCard() {
  const getAvailabilityQuery = trpc.doctor.getAvailability.useQuery();
  const form = useForm<{
    weekdays: { disabled: boolean; startTime: TimeString; endTime: TimeString };
    weekends: { disabled: boolean; startTime: TimeString; endTime: TimeString };
  }>({
    defaultValues: {
      weekdays: {
        disabled: true,
        startTime: "9:00",
        endTime: "17:00",
      },
      weekends: {
        disabled: false,
        startTime: "10:00",
        endTime: "12:00",
      },
    },
  });

  const weekdays = useWatch({ control: form.control, name: "weekdays" });
  const weekends = useWatch({ control: form.control, name: "weekdays" });

  return (
    <div className="w-full border bg-gray-50 border-gray-200 p-4 md:rounded-2xl md:p-5 space-y-4">
      <div className="flex justify-between">
        <h1 className="flex items-center">
          <span className="bg-teal-300/10 p-2 mr-2 rounded-lg border">
            <Calendar className="h-4 w-4 text-teal-950" />
          </span>
          <span className="font-semibold text-gray-600">Availability</span>
        </h1>
      </div>
      <Form {...form}>
        <form className="space-y-3">
          <div className="flex items-center space-x-4 overflow-x-auto">
            <div className="flex space-x-2 items-center">
              <FormField
                control={form.control}
                name="weekdays.disabled"
                render={({ field }) => {
                  return (
                    <FormItem className="flex items-center">
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  );
                }}
              />
              <p className="text-textColor-skin-primary text-left font-medium">
                Weekdays
              </p>
            </div>
            <FormField
              control={form.control}
              name="weekdays.startTime"
              render={({ field }) => {
                return (
                  <FormItem className="flex-1">
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="00:00">0:00</SelectItem>
                        {getTimeOptions().map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                );
              }}
            />
            <span>-</span>
            <FormField
              control={form.control}
              name="weekdays.endTime"
              render={({ field }) => {
                return (
                  <FormItem className="flex-1">
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {getTimeOptions(weekdays.startTime).map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                );
              }}
            />
          </div>
          <div className="flex items-center space-x-4 overflow-x-auto">
            <div className="flex space-x-2 items-center">
              <FormField
                control={form.control}
                name="weekends.disabled"
                render={({ field }) => {
                  return (
                    <FormItem className="flex items-center">
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  );
                }}
              />
              <p className="text-textColor-skin-primary text-left font-medium">
                Weekends
              </p>
            </div>
            <FormField
              control={form.control}
              name="weekends.startTime"
              render={({ field }) => {
                return (
                  <FormItem className="flex-1">
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="00:00">0:00</SelectItem>
                        {getTimeOptions().map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                );
              }}
            />
            <span>-</span>
            <FormField
              control={form.control}
              name="weekends.endTime"
              render={({ field }) => {
                return (
                  <FormItem className="flex-1">
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {getTimeOptions(weekends.startTime).map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                );
              }}
            />
          </div>
        </form>
      </Form>
      <div className="flex justify-end space-x-2">
        <Button className="rounded-md">Save</Button>
      </div>
    </div>
  );
}
