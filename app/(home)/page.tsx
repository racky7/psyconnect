import { Button } from "@/components/ui/button";
import ExpertCard from "./_components/expert-card";
import Navbar from "./_components/navbar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function Page() {
  return (
    <div className="flex flex-col items-center space-y-6 p-8">
      <div className="text-3xl">Our key offerings</div>
      <div className="grid grid-cols-2 gap-24">
        <div className="space-y-4">
          <div className="text-4xl font-medium flex flex-col">
            Connect 1-on-1 with <br /> our Counselors
          </div>
          <button className="flex items-center border-2 border-teal-900 p-2 w-auto rounded-3xl text-lg px-4">
            Explore Counselors
            <span>
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </span>
          </button>
        </div>
        <div className="space-y-4">
          <div className="text-4xl font-medium">
            Connect 1-on-1 with <br /> a Peer
          </div>
          <button className="flex items-center border-2 border-teal-900 p-2 w-auto rounded-3xl text-lg px-4">
            Explore Peers
            <span>
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </span>
          </button>
        </div>
      </div>

      <div className="text-3xl">Connect with our Counselors</div>
      <Carousel className="w-[90%]">
        <CarouselContent className="-ml-1">
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/4"
            >
              <div className="p-1">
                <ExpertCard />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
