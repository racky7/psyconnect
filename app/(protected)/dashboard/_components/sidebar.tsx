"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

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
  const [activeItem, setActiveItem] = useState(sidebarItems[0].value);
  return (
    <div className="w-[248px] h-full flex flex-col p-4 space-y-6 bg-teal-950">
      <div className="text-4xl text-primary-foreground">PsyConnect</div>
      <div className="space-y-4 flex flex-col">
        {sidebarItems.map((item) => (
          <Link key={item.value} href={`${basepath}${item.href}`}>
            <Button
              variant="ghost"
              className={cn(
                "justify-start w-full text-primary-foreground hover:text-primary-foreground focus:bg-teal-600 hover:bg-teal-300/20",
                activeItem === item.value ? "bg-teal-600" : null
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
