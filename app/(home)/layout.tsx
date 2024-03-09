import Navbar from "./_components/navbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full">
      <Navbar />
      {children}
    </div>
  );
}
