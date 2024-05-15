import { columns, Session } from "./columns";
import { DataTable } from "@/components/ui/data-table";

async function getData(): Promise<Session[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52l",
      amount: 1200,
      status: "upcoming",
      date: new Date("2015-03-25T12:00:00Z").toLocaleString(),
      bookingWith: "Arav Patel",
      title: "How to manage your thoughts?",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "completed",
      date: new Date().toLocaleString(),
      bookingWith: "Arav Patel",
      title: "May Therapy Session - 2",
    },
    {
      id: "728ed52g",
      amount: 800,
      status: "upcoming",
      date: new Date("2024-06-10T15:30:00Z").toLocaleString(),
      bookingWith: "Jennifer Smith",
      title: "Stress Management Workshop",
    },
    {
      id: "728ed52h",
      amount: 250,
      status: "canceled",
      date: new Date("2024-07-05T09:00:00Z").toLocaleString(),
      bookingWith: "John Doe",
      title: "Morning Meditation Class",
    },
    {
      id: "728ed52i",
      amount: 500,
      status: "upcoming",
      date: new Date("2024-07-15T18:00:00Z").toLocaleString(),
      bookingWith: "Emma Johnson",
      title: "Emotional Intelligence Seminar",
    },
    {
      id: "728ed52j",
      amount: 300,
      status: "completed",
      date: new Date("2024-04-20T14:00:00Z").toLocaleString(),
      bookingWith: "Chris Wilson",
      title: "Mindfulness Session",
    },
  ];
}

export default async function Page() {
  const data = await getData();
  return (
    <div className="w-full px-8 space-y-10">
      <h2 className="text-3xl font-medium">My Sessions</h2>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
