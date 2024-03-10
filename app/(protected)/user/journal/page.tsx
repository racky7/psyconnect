"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import JournalCard from "./_components/journal-card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { connect } from "http2";

export default function Page() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [journals, setJournals] = useState([
    { content: "I am feeling happy today.", date: "10 March 2024" },
    { content: "It was not a good day.", date: "8 March 2024" },
  ]);
  const [content, setContent] = useState("");

  return (
    <div className="w-full p-8 space-y-10">
      <div className="w-[700px] shadow-lg rounded-2xl p-7 ring-2 ring-gray-200 mx-auto">
        <div className="grid grid-cols-8 justify-between px-8">
          <div className="col-span-6 flex flex-col w-full items-center justify-center space-y-4">
            <div className="text-3xl font-medium">Write your thoughts</div>
            <p className="text-sm">
              {`"I can shake off everything as I write, my sorrows disappear, my
              courage is reborn." - Anne Frank`}
            </p>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <div>
                  <Button className="rounded-full" size="lg">
                    Create New Journal
                  </Button>
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>How are you feeling today?</DialogTitle>
                </DialogHeader>
                <Textarea
                  rows={5}
                  placeholder="Start writing..."
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                ></Textarea>
                <div className="space-x-2 flex justify-end">
                  <Button
                    variant="outline"
                    className="h-9"
                    onClick={() => {
                      setDialogOpen(false);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => {
                      setJournals((prev) => [
                        { content: content, date: "11 March 2024" },
                        ...prev,
                      ]);
                      setDialogOpen(false);
                    }}
                  >
                    Save
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="col-span-2"></div>
        </div>
      </div>
      <div className="flex space-x-8">
        {journals.map((journal, idx) => (
          <JournalCard
            key={idx}
            content={journal.content}
            date={journal.date}
          />
        ))}
      </div>
    </div>
  );
}
