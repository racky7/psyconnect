"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarItem = {
  label: string;
  value: string;
  href: string;
};

export default function Sidebar({
  basepath,
  sidebarItems,
}: {
  basepath: string;
  sidebarItems: SidebarItem[];
}) {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState(sidebarItems[0].value);
  return (
    <div className="w-[248px] h-full flex flex-col p-4 space-y-6 bg-teal-950">
      <Link href="/">
        <button className="text-4xl text-primary-foreground">PsyConnect</button>
      </Link>
      <div className="space-y-4 flex flex-col">
        {sidebarItems.map((item) => (
          <Link key={item.value} href={`${basepath}${item.href}`}>
            <Button
              className={cn(
                "justify-start w-full rounded-md focus:bg-teal-600 shadow-none",
                pathname.includes(item.value) ? "bg-teal-600" : "bg-transparent"
              )}
              onClick={() => {
                setActiveItem(item.value);
              }}
              size="lg"
            >
              {item.label}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
