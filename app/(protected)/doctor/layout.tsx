import Navbar from "../_components/navbar";
import Sidebar from "../_components/sidebar";

const DOCTOR_SIDEBAR_ITEMS = [
  {
    label: "Home",
    value: "home",
    href: "/",
  },
  {
    label: "My Sessions",
    value: "sessions",
    href: "/sessions",
  },
  {
    label: "Payments",
    value: "payments",
    href: "/payments",
  },
  {
    label: "Clients",
    value: "clients",
    href: "/clients",
  },
  {
    label: "Manage Sessions",
    value: "manageSessions",
    href: "/settings/sessions",
  },
  {
    label: "Availability",
    value: "availability",
    href: "/settings/availability",
  },
  {
    label: "Profile",
    value: "profile",
    href: "/settings/profile",
  },
];

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
