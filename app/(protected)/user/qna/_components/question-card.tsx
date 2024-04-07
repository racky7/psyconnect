"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { CLOUDINARY_BASE_URL, Question } from "@/lib/home";

type QuestionCardProps = Question;

export default function QuestionCard({
  question,
  description,
  image,
  postedBy,
  date,
  replies,
}: QuestionCardProps) {
  return (
    <div className="w-[750px] shadow-lg rounded-2xl p-7 ring-1 ring-teal-600 mx-auto flex items-center justify-between gap-4">
      <Avatar className="h-24 w-24">
        <AvatarImage
          src={`${CLOUDINARY_BASE_URL}/psyconnect/psyconnect/${image}`}
        />
      </Avatar>
      <div className="flex-1 text-clip overflow-hidden space-y-2">
        <h2 className="font-medium">{question}</h2>
        <p>{description}</p>
        <div className="flex justify-between font-medium text-xs">
          <p>
            <span>Posted by</span>{" "}
            <span className="text-blue-800">{postedBy}</span>
          </p>
          <p>{replies.length} replies</p>
          <p>{date}</p>
        </div>
      </div>
      <Button className="rounded-full" size="lg">
        View
      </Button>
    </div>
  );
}
