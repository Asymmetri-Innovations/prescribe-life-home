"use client";

import { FadeRise } from "./FadeRise";
import { Title } from "./Title";
import Image from "next/image";

// Splide imports
//@ts-expect-error: JS CONFIG
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export const PhoneDashboardSplide = () => {
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

        {/* Splide Carousel 1 - Left to Right */}
        <FadeRise delay={0.2}>
          <div className="w-full max-w-[1400px] mx-auto mt-6 relative px-16 max-md:px-4">
            <Splide
              options={{
                type: "loop",
                perPage: 3,
                perMove: 1,
                gap: "1rem",
                autoplay: true,
                interval: 2000, // auto scroll every 3s
                pauseOnHover: false,
                pagination: false,
                breakpoints: {
                  1024: { perPage: 2 },
                  640: { perPage: 1 },
                },
              }}
              aria-label="Dashboard Carousel 1"
            >
              {["/DG9.png", "/DG10.png", "/DG11.png", "/DG8.png"].map(
                (src, index) => (
                  <SplideSlide key={index}>
                    <div className="w-full h-[280px] max-md:h-[200px] flex items-center justify-center overflow-hidden rounded-xl">
                      <Image
                        src={src}
                        alt={`Dashboard ${index + 1}`}
                        width={800}
                        height={600}
                        className={`w-full h-full object-contain ${
                          index === 2 ? "scale-[1.4]" : ""
                        }`}
                      />
                    </div>
                  </SplideSlide>
                )
              )}
            </Splide>
          </div>
        </FadeRise>

        <FadeRise delay={0.3}>
          <div className="text-lg max-md:text-sm inter px-4 mt-8">
            This is how your clients build resilience, <br />
            one small action at a time.
          </div>
        </FadeRise>

        {/* Splide Carousel 2 - Right to Left */}
        <FadeRise delay={0.4}>
          <div className="w-full max-w-[1400px] mx-auto mt-6 relative px-16 max-md:px-4">
            <Splide
              options={{
                type: "loop",
                perPage: 3,
                perMove: 1,
                gap: "1rem",
                autoplay: true,
                interval: 2000, // auto scroll every 3s
                pauseOnHover: false,

                direction: "rtl", // reverse direction
                pagination: false,
                breakpoints: {
                  1024: { perPage: 2 },
                  640: { perPage: 1 },
                },
              }}
              aria-label="Dashboard Carousel 2"
            >
              {["/DG12.png", "/DG13.png", "/DG14.png", "/DG15.png"].map(
                (src, index) => (
                  <SplideSlide key={index}>
                    <div className="w-full h-[280px] max-md:h-[200px] flex items-center justify-center overflow-hidden rounded-xl">
                      <Image
                        src={src}
                        alt={`Dashboard ${index + 5}`}
                        width={800}
                        height={600}
                        className={`w-full h-full object-contain ${
                          index === 1 || index === 2 ? "scale-[1.3]" : ""
                        }`}
                      />
                    </div>
                  </SplideSlide>
                )
              )}
            </Splide>
          </div>
        </FadeRise>
      </section>
    </FadeRise>
  );
};
