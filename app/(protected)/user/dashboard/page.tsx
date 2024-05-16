import { auth } from "@/auth";
import { redirect } from "next/navigation";
import SessionCard from "../../_components/session-card";
import Image from "next/image";
import { CLOUDINARY_BASE_URL } from "@/lib/home";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Page() {
  const session = await auth();
  if (session?.user?.role === "DOCTOR") {
    redirect("/doctor");
  }
  return (
    <div className="w-full px-8 space-y-6">
      <h2 className="text-3xl font-medium">
        Welcome to PsyConnect, {session?.user?.name}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <SessionCard
          upcoming={true}
          title="How to manage your thought?"
          attendee="Aarav Patel          "
          datetime={new Date()}
          meetlink="https://meet.google.com/hye-sjdk-scp"
        />
      </div>
      <h3 className="text-xl">EXPLORE</h3>
      <div className="grid grid-cols-2 gap-5">
        <div className="p-4 ring-2 ring-gray-200 shadow-md col-span-1 flex items-center rounded-md">
          <div className="flex-1">
            Feeling Overwhelmed? Talk to our Therapists. they are here to help
            you.
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Image
              src={`${CLOUDINARY_BASE_URL}/psyconnect/psyconnect/undraw_group_video_re_btu7_1_sfubzt.svg`}
              alt=""
              width={100}
              height={100}
            />
            <Link href="counselors">
              <Button size="sm">Schedule a Session</Button>
            </Link>
          </div>
        </div>
        <div className="p-4 ring-2 ring-gray-200 shadow-md col-span-1 flex items-center rounded-md">
          <div className="flex-1">
            Your Creative Release-Capture Your thoughts, & let your emotions go
            free.
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Image
              src={`${CLOUDINARY_BASE_URL}/psyconnect/psyconnect/yssby3hz5lbmhbfizt47`}
              alt=""
              width={100}
              height={100}
            />
            <Link href="user/journal">
              <Button size="sm">Visit Mood Journal</Button>
            </Link>
          </div>
        </div>
        <div className="p-4 ring-2 ring-gray-200 shadow-md col-span-1 flex items-center rounded-md">
          <div className="flex-1">
            Something on your mind. ask questions, comment or share anonymously.
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Image
              src={`${CLOUDINARY_BASE_URL}/psyconnect/psyconnect/undraw_online_discussion_re_nn7e_iipn9t.svg`}
              alt=""
              width={100}
              height={100}
            />
            <Link href="user/qna">
              <Button size="sm">Start a discussion</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
