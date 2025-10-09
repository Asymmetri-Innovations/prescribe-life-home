"use client";

import { FadeRise } from "./FadeRise";
import { Title } from "./Title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import Image from "next/image";

export const PhoneDashboard = () => {
  return (
    <FadeRise>
      <section className="space-y-6 max-md:space-y-4 flex flex-col items-center relative md:text-center w-full">
        <FadeRise>
          <Title
            text="Your Impact is Capped by Your Calendar. Until Now."
            className="text-5xl max-md:text-3xl px-4"
          />
        </FadeRise>

        <FadeRise delay={0.1}>
          <div className="text-lg max-md:text-sm inter px-4">
            Next Generation Performance Coaching Dashboard
          </div>
        </FadeRise>

        {/* Carousel 1 */}
        <FadeRise delay={0.2}>
          <div className="w-full max-w-[1400px] mx-auto mt-6 relative">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-2 md:-ml-4 flex gap-6">
                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="w-full h-[280px] max-md:h-[200px] flex items-center justify-center overflow-hidden rounded-xl">
                    <Image
                      src="/DG9.png"
                      alt="Dashboard 1"
                      width={800}
                      height={600}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </CarouselItem>

                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="w-full h-[280px] max-md:h-[200px] flex items-center justify-center overflow-hidden rounded-xl">
                    <Image
                      src="/DG10.png"
                      alt="Dashboard 2"
                      width={800}
                      height={600}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </CarouselItem>

                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="w-full h-[280px] max-md:h-[200px] flex items-center justify-center overflow-hidden rounded-xl">
                    <Image
                      src="/DG11.png"
                      alt="Dashboard 3"
                      width={800}
                      height={600}
                      className="w-full h-full object-contain scale-[1.4]"
                    />
                  </div>
                </CarouselItem>

                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="w-full h-[280px] max-md:h-[200px] flex items-center justify-center overflow-hidden rounded-xl">
                    <Image
                      src="/DG8.png"
                      alt="Dashboard 4"
                      width={800}
                      height={600}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>

              <CarouselPrevious className="absolute -left-8 top-1/2 -translate-y-1/2 md:flex hidden" />
              <CarouselNext className="absolute -right-8 top-1/2 -translate-y-1/2 md:flex hidden" />
            </Carousel>
          </div>
        </FadeRise>

        <FadeRise delay={0.3}>
          <div className="text-lg max-md:text-sm inter px-4 mt-8">
            This is how your clients build resilience, <br />
            one small action at a time.
          </div>
        </FadeRise>

        {/* Carousel 2 */}
        <FadeRise delay={0.4}>
          <div className="w-full max-w-[1400px] mx-auto mt-6 relative">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-2 md:-ml-4 flex gap-6">
                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="w-full h-[280px] max-md:h-[200px] flex items-center justify-center overflow-hidden rounded-xl">
                    <Image
                      src="/DG12.png"
                      alt="Dashboard 5"
                      width={800}
                      height={600}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </CarouselItem>

                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="w-full h-[280px] max-md:h-[200px] flex items-center justify-center overflow-hidden rounded-xl">
                    <Image
                      src="/DG13.png"
                      alt="Dashboard 6"
                      width={800}
                      height={600}
                      className="w-full h-full object-contain scale-[1.3]"
                    />
                  </div>
                </CarouselItem>

                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="w-full h-[280px] max-md:h-[200px] flex items-center justify-center overflow-hidden rounded-xl">
                    <Image
                      src="/DG14.png"
                      alt="Dashboard 7"
                      width={800}
                      height={600}
                      className="w-full h-full object-contain scale-[1.3]"
                    />
                  </div>
                </CarouselItem>

                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="w-full h-[280px] max-md:h-[200px] flex items-center justify-center overflow-hidden rounded-xl">
                    <Image
                      src="/DG15.png"
                      alt="Dashboard 8"
                      width={800}
                      height={600}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>

              <CarouselPrevious className="absolute -left-8 top-1/2 -translate-y-1/2 md:flex hidden" />
              <CarouselNext className="absolute -right-8 top-1/2 -translate-y-1/2 md:flex hidden" />
            </Carousel>
          </div>
        </FadeRise>
      </section>
    </FadeRise>
  );
};
