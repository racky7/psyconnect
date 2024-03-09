import { auth } from "@/auth";
import { redirect } from "next/navigation";
import SessionCard from "../_components/session-card";

export default async function Page() {
  const session = await auth();
  if (session?.user?.role === "DOCTOR") {
    redirect("/doctor");
  }
  return (
    <div className="w-full px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <SessionCard
          upcoming={true}
          title="How to manage your thought?"
          attendee="Dr. Azona"
          datetime={new Date()}
          meetlink=""
        />
      </div>
    </div>
  );
}
