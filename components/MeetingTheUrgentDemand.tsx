"use client";

import { FadeRise } from "./FadeRise";
import Image from "next/image";

export const MeetingTheUrgentDemand = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 max-md:px-4 py-16 max-md:py-12 space-y-16 max-md:space-y-12">
      {/* Title */}
      <FadeRise>
        <h2 className="text-5xl max-md:text-3xl font-semibold text-center leading-tight">
          Meeting the Urgent Demand for Mental Well-being
        </h2>
      </FadeRise>

      {/* Top section - Two images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-md:gap-6">
        <FadeRise delay={0.1}>
          <div className="flex justify-center">
            <Image
              src="/85.png"
              alt="85% increased demand for mental well-being support"
              width={500}
              height={300}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </FadeRise>

        <FadeRise delay={0.2}>
          <div className="flex justify-center">
            <Image
              src="/80.png"
              alt="80% professionals at risk of burnout"
              width={500}
              height={300}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </FadeRise>
      </div>

      {/* Middle text */}
      <FadeRise delay={0.3}>
        <p className="text-2xl max-md:text-lg text-center text-theme  inter">
          PrescribeLife.AI was built to help coaches meet this urgent need head
          on.
        </p>
      </FadeRise>

      {/* Bottom section - 3-column grid with 1:2 ratio */}
      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8 max-md:gap-6 items-center">
        {/* Text content - spans 1 column */}
        <FadeRise delay={0.4} className="col-span-1 max-md:col-span-1">
          <div className="space-y-6 max-md:space-y-4">
            <h3 className="text-3xl max-md:text-2xl font-bold leading-tight">
              Built For World's Most
              <br />
              Influential Coaches ...
            </h3>

            <div className="space-y-4 max-md:space-y-3 text-base max-md:text-sm leading-relaxed inter">
              <p>
                who coach executives, leaders, founders or already focus on
                resilience, mental fitness and burnout
              </p>

              <p className="font-semibold">
                — PrescribeLife.AI is designed for you.
              </p>
            </div>
          </div>
        </FadeRise>

        {/* Image - spans 2 columns */}
        <FadeRise delay={0.5} className="col-span-2 max-md:col-span-1">
          <div className="flex justify-center">
            <Image
              src="/support-system.png"
              alt="Support system for coaches - connecting executives, leaders, founders, resilience and mental fitness coaches"
              width={800}
              height={500}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </FadeRise>
      </div>
    </section>
  );
};
