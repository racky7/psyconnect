import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-gray-light-1 flex w-full items-center justify-between border-b sticky bg-teal-950 p-4 text-sm sm:mb-0 top-0 z-10">
      <div className="flex-1">
        <Link href="/" className="text-primary-foreground text-3xl">
          PsyConnect
        </Link>
      </div>
      <div className="space-x-4">
        <Link href="/sign-up">
          <Button size="lg" variant="outline">
            Register
          </Button>
        </Link>
        <Link href="/log-in">
          <Button size="lg">Log in</Button>
        </Link>
      </div>
    </nav>
  );
}
