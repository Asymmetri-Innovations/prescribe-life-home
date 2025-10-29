import React from "react";
import { TrendingUp, Eye, Edit3, Clock } from "lucide-react";

export default function HolisticGrid() {
  return (
    <div className="bg-black flex items-center justify-center px-4 md:px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 md:grid-rows-8 gap-4 md:gap-3 w-full">
        {/* Extend impact */}
        <div className="border border-white rounded-2xl p-6 md:p-8 col-span-1 sm:col-span-2 md:col-span-2 md:row-span-5 flex flex-col justify-between">
          <TrendingUp className="w-8 h-8 md:w-16 md:h-16 text-theme" />
          <div>
            <h2 className="text-theme text-lg tracking-wide md:text-2xl font-semibold leading-tight">
              Extend impact
              <br />
              beyond sessions
            </h2>
            <p className="text-white text-base md:text-lg tracking-wide mt-2">with always-on support.</p>
          </div>
        </div>

        {/* Adopt a holistic lens */}
        <div className="border border-white rounded-2xl p-6 md:p-8 col-span-1 sm:col-span-2 md:col-span-4 md:row-span-3 flex flex-col justify-between">
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
        </div>

        {/* Personalize every strategy (glow card) */}
        <div className="border border-white rounded-2xl p-6 md:p-8 col-span-1 sm:col-span-2 md:col-span-2 md:row-span-5 flex flex-col justify-between relative">
          <img src="/time.png" alt="Personalize" className="w-10 h-10 md:w-16 md:h-16 object-cover" />
          <div>
            <h2 className="mt-10 text-theme text-lg tracking-wide md:text-2xl font-semibold leading-tight">
              Adapt in real time <br />
            </h2>
            <p className="text-white text-base md:text-lg tracking-wide leading-relaxed mt-4">
              each client’s evolving needs and resilience stage.
            </p>
          </div>
        </div>

        {/* Adapt in real time */}
        <div className="hidden md:block border border-white rounded-2xl p-6 md:col-span-2 md:row-span-5"></div>

        {/* 3D shape / image placeholder */}
        <div className="border border-white rounded-2xl col-span-1 sm:col-span-2 md:col-span-2 md:row-span-3 flex flex-col justify-between p-6 md:p-8">
          <div className="relative z-10">
            <img src="/text.svg" alt="Personalize" className="w-10 h-10 md:w-16 md:h-16 object-cover" />
            <div className="mt-10">
              <h2 className="text-theme text-lg tracking-wide md:text-2xl font-semibold">
                Personalize every 
                <br />
                strategy
              </h2>
              <p className="text-white text-base md:text-lg tracking-wide mt-2">
                because no two people thrive the same way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
