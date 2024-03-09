import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();
  if (session?.user?.role === "DOCTOR") {
    redirect("/doctor");
  }
  return <div>User Area</div>;
}
