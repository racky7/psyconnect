"use client";

import { useState } from "react";
import { P, match } from "ts-pattern";
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
import {
  CalendarIcon,
  CheckCircleIcon,
  CheckIcon,
  ClockIcon,
} from "lucide-react";
import {
  TimeString,
  getTimeOptions,
  minToDate,
  timeStringToMin,
} from "@/lib/availability";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { trpc } from "@/lib/trpc/client";
import { toast } from "sonner";

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
  const [status, setStatus] = useState<"booked" | "unbooked">("unbooked");
  const [date, setDate] = useState<Date | undefined>();
  const [selectedTime, setTime] = useState<TimeString | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  const bookSlotMutation = trpc.user.bookSlot.useMutation({
    onSuccess: () => {
      setStatus("booked");
      toast("Slot has been booked successfully");
    },
    onError: () => {
      toast("Error while booking slot.");
    },
  });
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="min-w-[630px] min-h-[400px]">
        {match(status)
          .returnType<React.ReactNode>()
          .with("booked", () => (
            <div className="w-full h-full flex flex-col space-y-2 items-center justify-center">
              <div className="flex space-x-2">
                <CheckCircleIcon className="text-teal-600" />
                <p>
                  Sesison Booked with{" "}
                  <span className="font-semibold">{name}</span>
                </p>
              </div>
              <p className="text-sm">
                {date?.toDateString()} at {selectedTime}
              </p>
              <Link href="/user">
                <Button variant="link">View Details</Button>
              </Link>
            </div>
          ))
          .with("unbooked", () => (
            <>
              <DialogHeader>
                <DialogTitle>Book session with {name}</DialogTitle>
              </DialogHeader>
              <div className="flex gap-4">
                <div className="space-y-4">
                  <div className="text-sm flex justify-center items-center space-x-2">
                    <CalendarIcon className="h-4 w-4" />{" "}
                    <span>Select Date</span>
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
                    <ClockIcon className="h-4 w-4" />{" "}
                    <span>Select Time Slot</span>
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
                <Button
                  variant="default"
                  size="sm"
                  disabled={bookSlotMutation.isLoading}
                  loading={bookSlotMutation.isLoading}
                  onClick={() => {
                    // setLoading(true);
                    // setTimeout(() => {
                    //   setStatus("booked");
                    //   setLoading(false);
                    // }, 2000);
                    bookSlotMutation.mutate({
                      doctorUserId: "clufdvy6l000i141peyacdyrp",
                      startTime: minToDate(
                        timeStringToMin(selectedTime!),
                        date
                      ),
                      endTime: minToDate(
                        timeStringToMin(selectedTime!) + 30,
                        date
                      ),
                    });
                  }}
                >
                  Submit
                </Button>
              </DialogFooter>
            </>
          ))
          .with(P._, () => null)
          .exhaustive()}
      </DialogContent>
    </Dialog>
  );
}
