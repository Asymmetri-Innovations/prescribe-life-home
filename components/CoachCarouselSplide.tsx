"use client";

import { MagicCard } from "@/components/MagicCard";
import Image from "next/image";

// Splide imports
//@ts-expect-error: JS CONFIG
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import HoverGlowContainer from "@/components/HoverGlowContainer";

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

export function TestimonialsCarouselSplide() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 rounded-2xl relative">
      <Splide
        options={{
          type: "loop",
          perPage: 3,
          perMove: 1,
          gap: "1rem",
          autoplay: true,
          interval: 2000, // scroll every 2 seconds
          pauseOnHover: false,
          arrows: true,
          pagination: false,
          breakpoints: {
            1024: { perPage: 2 },
            640: { perPage: 1 },
          },
        }}
        aria-label="Testimonials Carousel"
      >
        {testimonials.map((testimonial, index) => (
          <SplideSlide key={index}>
            <HoverGlowContainer className="h-full">
              <div className="p-10 flex flex-col items-start text-left h-full">
                {/* Profile Image */}
                <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md">
                  <Image
                    src={testimonial.src || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
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
                <div className="mt-auto">
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </HoverGlowContainer>
          </SplideSlide>
        ))}

        {/* Custom Tailwind-styled arrows */}
        <div className="splide__arrow splide__arrow--prev absolute -left-8 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center cursor-pointer z-10"></div>
        <div className="splide__arrow splide__arrow--next absolute -right-8 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center cursor-pointer z-10"></div>
      </Splide>
    </div>
  );
}
