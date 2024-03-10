import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type ExpertCardProps = {
  name: string;
  degree: string;
  specialization: string[];
};

export default function ExpertCard({
  name,
  degree,
  specialization,
}: ExpertCardProps) {
  return (
    <Card>
      <CardContent className="flex flex-col space-y-5 aspect-square items-center justify-center p-2">
        <div className="flex space-x-3 items-center">
          <Avatar className="h-20 w-20">
            <AvatarImage src="https://github.com/racky7.png" />
            <AvatarFallback>R</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <div className="font-semibold">{name}</div>
            <div>{degree}</div>
          </div>
        </div>
        <div className="space-y-1">
          <div className="font-medium">Specialization</div>
          <div className="">{specialization.join(" ")}</div>
        </div>
        <div className="flex justify-end w-full space-x-2">
          <Button size="sm" variant="outline">
            View Profile
          </Button>
          <Button
            size="sm"
            className="bg-teal-600 text-primary-foreground hover:bg-teal-600/95"
          >
            Book Session
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
