"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { MagicCard } from "@/components/MagicCard";

import Image from "next/image";
const testimonials = [
  {
    highlight: "truly bespoke and personalized",
    text: `“PrescribeLife.AI is truly bespoke and personalized — something brand new for my clients, which I love. I can’t wait to see where it goes next.”`,
    name: "Belinda Murray",
    title: "Inside Out Transformation Coach",
    src: "/belinda-murray.jpg",
  },
  {
    highlight: "Quantify results and transformations.",
    text: `“The data and tracking side of it is so valuable for our Founder clients — it helps quantify results and transformations.”`,
    name: "Bella Heggarty",
    title: "Client Experience Director, Reconnect Weekends",
    src: "/bella-hegarty.jpg",
  },
  {
    highlight: "being so data-driven myself",
    text: `“I’m fully bought into what you’re doing at PrescribeLife.AI — especially being so data-driven myself.”`,
    name: "Chet Hirani",
    title: "Executive Leadership Performance Expert",
    src: "/chet.png",
  },
  {
    highlight: "This is the most exciting thing",
    text: `“This is the most exciting thing I’ve seen on my horizon for a long time.”`,
    name: "Dex Randall",
    title: "Burnout Coach",
    src: "/Dex.png",
  },
  {
    highlight: "It’s the missing link",
    text: `“This is a beautiful product that I’m so excited to use with our clients – and myself! It’s the missing link. Data will be a coach's greatest asset.”`,
    name: "Zoran Todorovic",
    title: "TNM Coaching",
    src: "/zoran-todorovic.jpg",
  },
];

export function TestimonialsCarousel() {
  return (
    <div className="w-full rounded-2xl">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <MagicCard className="h-full">
                <div className="p-10 flex flex-col items-start text-left h-full max-md:p-4 mt-  max-md:space-y-5">
                  <div className="flex justify-start items-center  max-md:gap-3">
                    {/* Profile Image */}
                    <div className="w-26 h-full md:w-26 md:h-26 rounded-full overflow-hidden border-4 border-white shadow-md max-md:w-20 mb-6 max-md:mb-2">
                      <Image
                        src={testimonial.src || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover aspect-square"
                      />
                    </div>
                    <div className="hidden max-md:flex items-start justify-start flex-col max-md:full ">
                      <p className="font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-muted-foreground text-sm mt-1">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>

                  {/* Highlighted Text */}
                  <h3 className="text-[20px] capitalize font-bold text-foreground mb-6 leading-tight">
                    {testimonial.highlight}
                  </h3>

                  {/* Quote */}
                  <blockquote className="text-muted-foreground italic text-base leading-relaxed mb-8 flex-grow">
                    {testimonial.text}
                  </blockquote>

                  {/* Author Info */}
                  <div className="mt-auto max-md:hidden">
                    <p className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </MagicCard>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
}
