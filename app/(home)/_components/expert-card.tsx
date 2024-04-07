"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CLOUDINARY_BASE_URL } from "@/lib/home";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import BookingModal from "./booking-modal";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type ExpertCardProps = {
  name: string;
  degree: string;
  specialization: string[];
  image?: string;
  className?: string;
};

export default function ExpertCard({
  name,
  degree,
  specialization,
  image,
  className,
}: ExpertCardProps) {
  const [bookingModal, setBookingModal] = useState(false);

  const session = useSession();
  const router = useRouter();

  return (
    <Card className={cn(className)}>
      <CardContent className="flex flex-col space-y-5 aspect-square items-center justify-between px-2 py-4">
        <div className="flex space-x-3 items-center">
          <div>
            <Avatar className="h-24 w-24">
              <AvatarImage src={`${CLOUDINARY_BASE_URL}/${image}`} />
              <AvatarFallback>{name[0]}</AvatarFallback>
            </Avatar>
          </div>
          <div className="space-y-2">
            <div className="font-semibold">{name}</div>
            <div>{degree}</div>
          </div>
        </div>
        <div className="space-y-1 w-full">
          <div className="font-medium">Specialization</div>
          <div className="">{specialization.join(" ")}</div>
        </div>
        <div className="flex justify-end w-full space-x-2">
          <Button size="sm" variant="outline">
            View Profile
          </Button>
          <Button
            size="sm"
            className="bg-teal-600 text-primary-foreground hover:bg-teal-600/95"
            onClick={() => {
              if (session.data) {
                if (session.data.user.role === "USER") {
                  setBookingModal(true);
                } else {
                  toast("Only user can book session.");
                }
              } else {
                router.replace("/log-in?redirect=counselors");
              }
            }}
          >
            Book Session
          </Button>
        </div>
        <BookingModal
          open={bookingModal}
          setOpen={setBookingModal}
          name={name}
        />
      </CardContent>
    </Card>
  );
}
