"use client";

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
import { CLOUDINARY_BASE_URL, DOCTOR_DATA } from "@/lib/home";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center space-y-10 p-8">
      <div className="text-3xl">Our key offerings</div>
      <div className="grid grid-cols-2 gap-24">
        <div className="space-y-4">
          <Image
            src={`${CLOUDINARY_BASE_URL}/psyconnect/psyconnect/e7ikmkti7nhu3lybpsgo`}
            alt=""
            width={400}
            height={400}
          />
          <div className="text-4xl font-medium">
            Connect 1-on-1 with <br /> our Counselors
          </div>
          <button
            className="flex items-center border-2 border-teal-900 p-2 w-auto rounded-3xl text-lg px-4"
            onClick={() => {
              router.push("/counselors");
            }}
          >
            Explore Counselors
            <span>
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </span>
          </button>
        </div>
        <div className="space-y-4">
          <Image
            src={`${CLOUDINARY_BASE_URL}/psyconnect/psyconnect/uxr7lr6bw1750qjz9vzg`}
            alt=""
            width={400}
            height={400}
          />
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

      <div className="text-3xl">Connect with our Top Counselors</div>
      <Carousel className="w-[90%]">
        <CarouselContent className="-ml-1">
          {DOCTOR_DATA.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/4"
            >
              <div className="p-1">
                <ExpertCard
                  name={item.name}
                  degree={item.degree}
                  specialization={item.specialization}
                  image={item.image}
                />
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
