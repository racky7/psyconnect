"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const session = useSession();
  return (
    <nav className="border-gray-light-1 flex w-full items-center justify-between border-b sticky bg-teal-950 p-4 text-sm sm:mb-0 top-0 z-10">
      <div className="flex-1">
        <Link href="/" className="text-primary-foreground text-3xl">
          PsyConnect
        </Link>
      </div>
      <div className="space-x-4">
        {session.status === "authenticated" ? (
          <Link
            href={
              session.data.user.role === "USER"
                ? "/user/dashboard"
                : "/doctor/dashboard"
            }
          >
            <Button size="lg">My Dashboard</Button>
          </Link>
        ) : (
          <>
            <Link href="/sign-up">
              <Button size="lg" variant="outline">
                Register
              </Button>
            </Link>
            <Link href="/log-in">
              <Button size="lg">Log in</Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
