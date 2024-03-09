import { auth } from "@/auth";
import { notFound, redirect } from "next/navigation";

export default async function DoctorDashboard() {
  const session = await auth();
  if (session?.user?.role === "USER") {
    return notFound();
  }
  return <div className="h-full">Doctor Dashboard</div>;
}
