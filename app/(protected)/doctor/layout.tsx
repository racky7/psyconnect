import { DOCTOR_SIDEBAR_ITEMS } from "@/lib/doctor";
import Navbar from "../_components/navbar";
import Sidebar from "../_components/sidebar";

export default function DoctorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full w-full flex">
      <Sidebar basepath="/doctor" sidebarItems={DOCTOR_SIDEBAR_ITEMS} />
      <div className="h-full flex flex-col overflow-auto flex-1">
        <Navbar />
        <div className="h-full sm:p-8">{children}</div>
      </div>
    </div>
  );
}
