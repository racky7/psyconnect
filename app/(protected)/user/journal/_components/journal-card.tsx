import { Delete, Edit, Share, Trash } from "lucide-react";

type JournalCardProp = {
  content: string;
  date: string;
};

export default function JournalCard({ content, date }: JournalCardProp) {
  return (
    <div className="w-[240px] space-y-2">
      <div className="shadow-md w-full rounded-lg h-[200px] p-3 overflow-auto">
        {content}
      </div>
      <div className="flex justify-between">
        <span>{date}</span>
        <div className="flex space-x-2">
          <Edit className="w-4 h-4" />
          <Trash className="w-4 h-4" />
          <Share className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
