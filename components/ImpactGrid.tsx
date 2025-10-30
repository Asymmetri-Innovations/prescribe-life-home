import React from "react";
import { TrendingUp, Eye, Edit3, Clock } from "lucide-react";
import HoverGlowContainer from "./HoverGlowContainer";

export default function HolisticGrid() {
  return (
    <div className=" flex items-center justify-center px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 md:gap-3 w-full">
        {/* Extend impact */}
        <HoverGlowContainer className="min-h-[240px] flex flex-col justify-between">
          <TrendingUp className="w-8 h-8 md:w-16 md:h-16 text-theme" />
          <div>
            <h2 className="text-theme text-lg tracking-wide md:text-2xl font-semibold leading-tight">
              Extend impact beyond sessions
            </h2>
            <p className="text-white text-base md:text-lg tracking-wide mt-2">
              with always-on support.
            </p>
          </div>
        </HoverGlowContainer>

        {/* Adopt a holistic lens */}
        <HoverGlowContainer className="min-h-[240px] flex flex-col justify-between">
          <Eye className="w-8 h-8 md:w-16 md:h-16 text-theme" />
          <div>
            <h2 className="text-theme text-lg md:text-2xl tracking-wide font-semibold leading-tight">
              Adopt a holistic lens
            </h2>
            <p className="text-white text-base md:text-lg tracking-wide leading-relaxed mt-2">
              integrating cognitive, emotional, behavioral, and physiological
              factors to unlock sustained performance.
            </p>
          </div>
        </HoverGlowContainer>

        {/* Personalize every strategy (glow card) */}
        <HoverGlowContainer className="min-h-[240px] flex flex-col justify-between">
          <img
            src="/time.png"
            alt="Personalize"
            className="w-10 h-10 md:w-16 md:h-16 object-cover"
          />
          <div>
            <h2 className="mt-10 text-theme text-lg tracking-wide md:text-2xl font-semibold leading-tight">
              Adapt in real time
            </h2>
            <p className="text-white text-base md:text-lg tracking-wide leading-relaxed mt-4">
              each client’s evolving needs and resilience stage.
            </p>
          </div>
        </HoverGlowContainer>

        {/* 3D shape / image placeholder */}
        <HoverGlowContainer className="min-h-[240px] flex flex-col justify-between">
          <div className="relative z-10">
            <img
              src="/text.svg"
              alt="Personalize"
              className="w-10 h-10 md:w-16 md:h-16 object-cover"
            />
            <div className="mt-10">
              <h2 className="text-theme text-lg tracking-wide md:text-2xl font-semibold">
                Personalize every strategy
              </h2>
              <p className="text-white text-base md:text-lg tracking-wide mt-2">
                because no two people thrive the same way.
              </p>
            </div>
          </div>
        </HoverGlowContainer>
      </div>
    </div>
  );
}
