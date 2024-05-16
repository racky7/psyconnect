"use client";

import { Button } from "@/components/ui/button";
import { CLOUDINARY_BASE_URL, QNA_DATA } from "@/lib/home";
import Image from "next/image";
import QuestionCard from "./_components/question-card";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="w-full p-8 space-y-10">
      <div className="w-[750px] shadow-lg rounded-2xl p-7 ring-2 ring-gray-200 mx-auto">
        <div className="grid grid-cols-8 justify-between px-8">
          <div className="col-span-6 flex flex-col w-full items-center justify-center space-y-4">
            <div className="text-3xl font-medium">Something On Your Mind?</div>
            <p className="text-sm font-semibold">
              Ask and discuss with the community <br /> of users from all across
              the globe
            </p>
            <Button
              className="rounded-full"
              size="lg"
              onClick={() => {
                router.push(`${pathname}/ask-question`);
              }}
            >
              Ask Anonymously
            </Button>
          </div>
          <div className="col-span-2">
            <Image
              src={`${CLOUDINARY_BASE_URL}/psyconnect/psyconnect/undraw_online_discussion_re_nn7e_iipn9t.svg`}
              alt=""
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
      {QNA_DATA.map((item, index) => (
        <QuestionCard key={index} {...item} />
      ))}
    </div>
  );
}
