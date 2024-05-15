import { columns, Session } from "./columns";
import { DataTable } from "@/components/ui/data-table";

async function getData(): Promise<Session[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52l",
      amount: 1200,
      status: "upcoming",
      date: new Date().toLocaleString(),
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
