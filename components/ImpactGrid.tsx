import React from "react";
import { TrendingUp, Eye, Edit3, Clock } from "lucide-react";
import HoverGlowContainer from "./HoverGlowContainer";

export default function HolisticGrid() {
  return (
    <div className=" flex items-center justify-center gap-6 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 justify-center gap-6 items-stretch gap-4 md:gap-3 w-full">
        {/* Extend impact */}
        <HoverGlowContainer className=" flex flex-col justify-center gap-6 p-6 md:p-8 bg-gradient-to-b from-zinc-900 to-black">
          <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-theme flex-shrink-0" />
          <div className="mt-x">
            <h2 className="text-theme text-lg tracking-wide md:text-2xl font-semibold leading-tight font-card-title">
              Extend impact beyond sessions
            </h2>
            <p className="text-white text-base md:text-lg tracking-wide mt-2 font-section-desc">
              with always-on support.
            </p>
          </div>
        </HoverGlowContainer>

        {/* Adopt a holistic lens */}
        <HoverGlowContainer className=" flex flex-col justify-center gap-6 p-6 md:p-8 bg-gradient-to-b from-zinc-900 to-black">
          <Eye className="w-8 h-8 md:w-10 md:h-10 text-theme flex-shrink-0" />
          <div className="mt-x">
            <h2 className="text-theme text-lg md:text-2xl tracking-wide font-semibold leading-tight font-card-title">
              Adopt a holistic lens
            </h2>
            <p className="text-white text-base md:text-lg tracking-wide leading-relaxed mt-2 font-section-desc">
              integrating cognitive, emotional, behavioral, and physiological
              factors to unlock sustained performance.
            </p>
          </div>
        </HoverGlowContainer>

        {/* Personalize every strategy (glow card) */}
        <HoverGlowContainer className=" flex flex-col justify-center gap-6 p-6 md:p-8 bg-gradient-to-b from-zinc-900 to-black">
          <img
            src="/time.png"
            alt="Personalize"
            className="w-8 h-8 md:w-10 md:h-10 object-cover flex-shrink-0"
          />
          <div className="mt-x">
            <h2 className="text-theme text-lg tracking-wide md:text-2xl font-semibold leading-tight font-card-title">
              Adapt in real time
            </h2>
            <p className="text-white text-base md:text-lg tracking-wide leading-relaxed mt-2 font-section-desc">
              each client's evolving needs and resilience stage.
            </p>
          </div>
        </HoverGlowContainer>

        {/* 3D shape / image placeholder */}
        <HoverGlowContainer className=" flex flex-col justify-center gap-6 p-6 md:p-8 bg-gradient-to-b from-zinc-900 to-black">
          <img
            src="/text.svg"
            alt="Personalize"
            className="w-8 h-8 md:w-10 md:h-10 object-cover flex-shrink-0"
          />
          <div className="mt-x">
            <h2 className="text-theme text-lg tracking-wide md:text-2xl font-semibold font-card-title">
              Personalize every strategy
            </h2>
            <p className="text-white text-base md:text-lg tracking-wide mt-2 font-section-desc">
              because no two people thrive the same way.
            </p>
          </div>
        </HoverGlowContainer>
      </div>
    </div>
  );
}
