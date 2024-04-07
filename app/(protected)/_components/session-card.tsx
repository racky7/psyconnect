import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { ArrowRight, Calendar, Clock, Phone } from "lucide-react";
import Link from "next/link";

type SessionCardProps = {
  upcoming: true;
  title: string;
  attendee: string;
  datetime: Date;
  meetlink: string;
};

export default function SessionCard({
  upcoming,
  title,
  attendee,
  datetime,
  meetlink,
}: SessionCardProps) {
  return (
    <div className="w-full border bg-gray-50 border-gray-200 p-4 md:rounded-2xl md:p-5 space-y-4">
      {upcoming ? (
        <div className="flex justify-between">
          <h1 className="flex items-center">
            <span className="bg-teal-300/10 p-2 mr-2 rounded-lg border">
              <Phone className="h-4 w-4 text-teal-950" />
            </span>
            <span className="font-semibold text-gray-600">
              Upcoming Session
            </span>
          </h1>
          <Button
            variant="ghost"
            className="text-teal-950 rounded-md"
            icon={<ArrowRight className="h-4 w-4 ml-1" />}
            iconPosition="right"
          >
            View all
          </Button>
        </div>
      ) : null}
      <div className="mt-4 space-y-2">
        <div>
          <div className="flex justify-between">
            <h2 className="font-semibold text-gray-700 text-lg">{title}</h2>
            <Popover>
              <PopoverTrigger>
                <DotsVerticalIcon className="h-5 w-5" />
              </PopoverTrigger>
              <PopoverContent className="rounded-lg shadow p-1 w-auto flex flex-col">
                <Button variant="ghost" className="text-sm">
                  Cancel Session
                </Button>
                <Button variant="ghost" className="text-sm">
                  Reschedule Session
                </Button>
              </PopoverContent>
            </Popover>
          </div>
          <p className="text-sm">
            with <span className="font-semibold">{attendee}</span>
          </p>
        </div>
        <div className="flex space-x-2 text-sm items-center">
          <Calendar className="h-4 w-4" />
          <span>Mar 12, 2024</span>
          <Clock className="h-4 w-4" />
          <span>5:30 PM - 6:00 PM</span>
        </div>
        <div className="flex justify-end space-x-2">
          <Button variant="ghost">View Detail</Button>
          <Link href={meetlink ?? ""}>
            <Button
              className="space-x-2"
              icon={<ArrowRight className="h-4 w-4" />}
              iconPosition="right"
            >
              Join Meet
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
