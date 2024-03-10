import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CLOUDINARY_BASE_URL } from "@/lib/home";

type ExpertCardProps = {
  name: string;
  degree: string;
  specialization: string[];
  image?: string;
};

export default function ExpertCard({
  name,
  degree,
  specialization,
  image,
}: ExpertCardProps) {
  return (
    <Card>
      <CardContent className="flex flex-col space-y-5 aspect-square items-center justify-center p-2">
        <div className="flex space-x-3 items-center">
          <div>
            <Avatar className="h-24 w-24">
              <AvatarImage src={`${CLOUDINARY_BASE_URL}/${image}`} />
              <AvatarFallback>{name[0]}</AvatarFallback>
            </Avatar>
          </div>
          <div className="space-y-2">
            <div className="font-semibold">{name}</div>
            <div>{degree}</div>
          </div>
        </div>
        <div className="space-y-1 w-full">
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
