"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BellIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { signOut } from "next-auth/react";

export default function Navbar() {
  return (
    <nav className="border-gray-light-1 flex w-full items-center justify-between border-b sticky bg-white p-4 text-sm sm:mb-0 top-0 z-10">
      <div className="flex-1"></div>
      <div>
        <Popover>
          <PopoverTrigger className="flex items-center space-x-1">
            <Avatar className="h-7 w-7">
              <AvatarImage src="https://github.com/racky7.png" />
              <AvatarFallback>R</AvatarFallback>
            </Avatar>
            <ChevronDownIcon className="h-4w-4" />
          </PopoverTrigger>
          <PopoverContent align="end" className="w-auto p-0">
            <Button variant="ghost" onClick={() => signOut()}>
              Log out
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
}
