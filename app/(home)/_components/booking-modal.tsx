"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, ClockIcon } from "lucide-react";
import { TimeString, getTimeOptions } from "@/lib/availability";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type BookingModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  name: string;
};

export default function BookingModal({
  open,
  setOpen,
  name,
}: BookingModalProps) {
  const [date, setDate] = useState<Date | undefined>();
  const [selectedTime, setTime] = useState<TimeString | undefined>();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="min-w-[630px]">
        <DialogHeader>
          <DialogTitle>Book session with {name}</DialogTitle>
        </DialogHeader>
        <div className="flex gap-4">
          <div className="space-y-4">
            <div className="text-sm flex justify-center items-center space-x-2">
              <CalendarIcon className="h-4 w-4" /> <span>Select Date</span>
            </div>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              fromDate={new Date()}
            />
          </div>
          <div className="space-y-4 flex-1 h-full w-full">
            <div className="text-sm flex justify-center items-center space-x-2">
              <ClockIcon className="h-4 w-4" /> <span>Select Time Slot</span>
            </div>
            <div className="border p-4 rounded-md w-full h-72 overflow-y-auto grid grid-cols-3 gap-4">
              {getTimeOptions("11:00").map((time, idx) => (
                <button
                  key={`${time}-${idx}`}
                  onClick={() => {
                    setTime(time);
                  }}
                  className={cn(
                    "text-sm border rounded-full w-20 p-1 flex justify-center hover:bg-teal-600 hover:text-primary-foreground cursor-pointer col-span-1",
                    selectedTime === time
                      ? "bg-teal-600 text-primary-foreground"
                      : undefined
                  )}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button variant="default" size="sm">
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
