"use client";

import { FadeRise } from "./FadeRise";
import Image from "next/image";
import CTA from "./CTA";

export const AmplifyHumanTouch = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 max-md:px-4 py-16 max-md:py-12 space-y-8 max-md:space-y-6 text-center -mt-12 max-md:-mt-8">
      {/* Title */}
      <FadeRise>
        <h2 className="text-5xl max-md:text-3xl font-semibold leading-tight">
          Amplify Your Human Touch with Evidence based
          <br />
          AI Insights and Signals
        </h2>
      </FadeRise>

      {/* Description */}
      <FadeRise delay={0.1}>
        <p className="text-lg max-md:text-base text-white/80 max-w-4xl mx-auto leading-relaxed inter">
          The platform provides a window into your client's world, revealing the
          invisible patterns of stress, recovery and behavioural change.
        </p>
      </FadeRise>

      {/* Bold statement */}
      <FadeRise delay={0.2}>
        <p className="text-xl max-md:text-lg font-bold text-theme inter">
          This isn't about replacing you; it's about informing you.
        </p>
      </FadeRise>

      {/* Two images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-md:gap-2 max-w-5xl mx-auto">
        <FadeRise delay={0.3}>
          <div className="flex justify-center">
            <Image
              src="/without.png"
              alt="Coaching without PrescribeLife.AI"
              width={400}
              height={300}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </FadeRise>

        <FadeRise delay={0.4}>
          <div className="flex justify-center">
            <Image
              src="/with-prescribe.png"
              alt="Coaching with PrescribeLife.AI"
              width={400}
              height={300}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </FadeRise>
      </div>

      {/* CTA Button */}
      <FadeRise delay={0.5}>
        <div className="flex justify-center">
          <CTA />
        </div>
      </FadeRise>
    </section>
  );
};
