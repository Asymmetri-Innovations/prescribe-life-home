"use client";

import { FadeRise } from "./FadeRise";
import Image from "next/image";

export const MakeYouHuman = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 max-md:px-4 py-16 max-md:py-12">
      {/* Title */}
      <FadeRise>
        <h2 className="text-5xl max-md:text-3xl font-semibold text-center leading-tight mb-16 max-md:mb-12">
          They're Building AI to Replace Coaches.
          <br />
          We're Building It to Make You More Human.
        </h2>
      </FadeRise>

      {/* 3-column grid with 1:2 ratio */}
      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8 max-md:gap-6 items-center">
        {/* Text content - spans 1 column */}
        <FadeRise delay={0.1} className="col-span-1 max-md:col-span-1">
          <div className="space-y-6 max-md:space-y-4 text-base max-md:text-sm leading-relaxed inter">
            <p className="font-medium">Let's be honest.</p>

            <p className="font-bold">
              The rise of AI has many coaches wondering about their future.
            </p>

            <p>
              But most tech solutions are designed to remove the human element,
              not enhance it.
            </p>

            <p className="font-bold">We believe that's a flawed approach.</p>

            <p>
              Your intuition, empathy, and connection are the most powerful
              assets in coaching and technology should serve them, not sideline
              them.
            </p>

            <p>
              PrescribeLife.AI is the{" "}
              <div className="font-bold">
                first platform designed not as a replacement,
              </div>
              but as an amplifier for your humanity.
            </p>

            <p>
              It gives you the insights to make your connections deeper and your
              impact undeniable.
            </p>
          </div>
        </FadeRise>

        {/* Image - spans 2 columns */}
        <FadeRise delay={0.2} className="col-span-2 max-md:col-span-1">
          <div className="flex justify-center">
            <Image
              src="/make-you-human.png"
              alt="Making coaches more human with AI technology"
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
