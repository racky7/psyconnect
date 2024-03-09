import { auth } from "@/auth";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronUpIcon,
  ThickArrowUpIcon,
} from "@radix-ui/react-icons";
import { notFound, redirect } from "next/navigation";
import SessionCard from "../_components/session-card";

export default async function DoctorDashboard() {
  const session = await auth();
  if (session?.user?.role === "USER") {
    return notFound();
  }
  return (
    <div className="h-full px-8 space-y-8">
      <div className="border bg-gray-50 border-gray-200  p-4 md:rounded-2xl md:p-5 space-y-4">
        <h1 className="font-semibold text-gray-700">Overview</h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border-gray-300 rounded-xl border bg-white p-4 space-y-2">
            <h3 className="text-sm">Sessions Booked</h3>
            <h3 className="text-2xl flex items-center">
              5 <ArrowUpIcon className="text-teal-600 h-6 w-6" />
            </h3>
          </div>
          <div className="border-gray-300  rounded-xl border bg-white p-4 space-y-2">
            <h3 className="text-sm">Today{`'`}s Earning</h3>
            <h3 className="text-2xl flex items-center">
              ₹ 2300.36 <ArrowUpIcon className="text-teal-600 h-6 w-6" />
            </h3>
          </div>
          <div className="border-gray-300  rounded-xl border bg-white p-4 space-y-2">
            <h3 className="text-sm">Monthly{`'`}s Earning</h3>
            <h3 className="text-2xl flex items-center">
              ₹ 73000.99 <ArrowDownIcon className="text-red-500 h-6 w-6" />
            </h3>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 space-x-4">
        <SessionCard
          upcoming={true}
          title="How to manage your thoughts?"
          attendee="Ahana"
          datetime={new Date()}
          meetlink=""
        />
      </div>
    </div>
  );
}
