import React from "react";
import { TrendingUp, Eye, Edit3, Clock } from "lucide-react";

export default function HolisticGrid() {
  return (
    <div className="bg-black flex items-center justify-center px-4 md:px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 md:grid-rows-8 gap-4 md:gap-3 w-full">
        {/* Extend impact */}
        <div className="border border-white rounded-2xl p-6 col-span-1 sm:col-span-2 md:col-span-2 md:row-span-5 flex flex-col justify-between">
          <TrendingUp className="w-8 h-8 text-theme" />
          <div>
            <h2 className="text-theme text-lg md:text-xl font-semibold leading-tight">
              Extend impact
              <br />
              beyond sessions
            </h2>
            <p className="text-white text-sm mt-2">with always-on support.</p>
          </div>
        </div>

        {/* Adopt a holistic lens */}
        <div className="border border-white rounded-2xl p-6 col-span-1 sm:col-span-2 md:col-span-4 md:row-span-3 flex flex-col justify-between">
          <Eye className="w-8 h-8 text-theme" />
          <div>
            <h2 className="text-theme text-lg md:text-xl font-semibold">
              Adopt a holistic lens
            </h2>
            <p className="text-white text-sm mt-2">
              integrating cognitive, emotional, behavioral, and physiological
              factors to unlock sustained performance.
            </p>
          </div>
        </div>

        {/* Personalize every strategy (glow card) */}
        <div className="border border-white rounded-2xl p-6 col-span-1 sm:col-span-2 md:col-span-2 md:row-span-5 flex flex-col justify-between relative">
          <Clock className="w-8 h-8 text-theme" />
          <div>
            <h2 className="text-theme text-lg md:text-xl font-semibold">
              Adapt in real time
            </h2>
            <p className="text-white text-sm mt-2">
              each client’s evolving needs and resilience stage.
            </p>
          </div>
        </div>

        {/* Adapt in real time */}
        <div className="hidden md:block border border-white rounded-2xl p-6 md:col-span-2 md:row-span-5"></div>

        {/* 3D shape / image placeholder */}
        <div className="border border-white rounded-2xl col-span-1 sm:col-span-2 md:col-span-2 md:row-span-3 flex items-center justify-center p-4">
          <div className="relative z-10">
            <Edit3 className="w-8 h-8 text-theme" />
            <div className="mt-4">
              <h2 className="text-theme text-lg md:text-xl font-semibold">
                Personalize every
                <br />
                strategy
              </h2>
              <p className="text-white text-sm mt-2">
                because no two people thrive the same way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
