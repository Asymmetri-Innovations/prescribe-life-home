import React from "react";
import { TrendingUp, Eye, Edit3, Clock } from "lucide-react";

export default function HolisticGrid() {
  return (
    <div className=" bg-black flex items-center justify-center p-6">
      <div className="grid grid-cols-6 grid-rows-8 gap-3 w-full max-w-6xl">
        {/* Extend impact */}
        <div className="border border-white rounded-2xl p-6 col-span-2 row-span-5 flex flex-col justify-between">
          <TrendingUp className="w-8 h-8 text-theme" />
          <div>
            <h2 className="text-theme text-xl font-semibold leading-tight">
              Extend impact
              <br />
              beyond sessions
            </h2>
            <p className="text-white text-sm mt-2">with always-on support.</p>
          </div>
        </div>

        {/* Adopt a holistic lens */}
        <div className="border border-white rounded-2xl p-6 col-span-4 row-span-3 flex flex-col justify-between">
          <Eye className="w-8 h-8 text-theme" />
          <div>
            <h2 className="text-theme text-xl font-semibold">
              Adopt a holistic lens
            </h2>
            <p className="text-white text-sm mt-2">
              integrating cognitive, emotional, behavioral, and physiological
              factors to unlock sustained performance.
            </p>
          </div>
        </div>

        {/* Personalize every strategy (glow card) */}
        <div className="border border-white rounded-2xl p-6 col-span-2 row-span-5 flex flex-col justify-between relative">
          <Clock className="w-8 h-8 text-theme" />
          <div>
            <h2 className="text-theme text-xl font-semibold">
              Adapt in real time
            </h2>
            <p className="text-white text-sm mt-2">
              each client’s evolving needs and resilience stage.
            </p>
          </div>
        </div>

        {/* Adapt in real time */}
        <div className="border border-white rounded-2xl p-6 col-span-2 row-span-5 flex flex-col justify-between"></div>

        {/* 3D shape / image placeholder */}
        <div className="border border-white rounded-2xl col-span-2 row-span-3 flex items-center justify-center p-4">
          <div className="relative z-10">
            <Edit3 className="w-8 h-8 text-theme" />
            <div className="mt-4">
              <h2 className="text-theme text-xl font-semibold">
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
