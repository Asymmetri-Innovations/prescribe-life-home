"use client";

import { FadeRise } from "./FadeRise";
import { Timer, Lightbulb, Target } from "lucide-react";

export const StaircaseCards = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Desktop Staircase Layout using CSS Grid */}
      <div className="hidden md:grid grid-cols-6 grid-rows-4 gap-4 h-96">
        {/* Card 1 - Bottom Left (spans 2 cols, 2 rows) */}
        <FadeRise
          delay={0}
          className="col-span-2 row-span-2 col-start-1 row-start-3"
        >
          <div className="w-full aspect-square rounded-2xl border border-white/30 bg-gradient-to-b from-white/10 to-black/80 p-6 flex flex-col items-center justify-center text-center">
            <Timer className="w-10 h-10 text-theme mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Eliminate Wasted Time
            </h3>
            <p className="text-sm text-white/80 inter leading-tight">
              Go from 'What's on your mind?' to data-informed clarity.
            </p>
          </div>
        </FadeRise>

        {/* Card 2 - Middle Center (spans 2 cols, 2 rows) */}
        <FadeRise
          delay={0.12}
          className="col-span-2 row-span-2 col-start-3 row-start-2"
        >
          <div className="w-full aspect-square rounded-2xl border border-white/30 bg-gradient-to-b from-white/10 to-black/80 p-6 flex flex-col items-center justify-center text-center shadow-lg">
            <Lightbulb className="w-10 h-10 text-theme mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Unlock Deeper Insights
            </h3>
            <p className="text-sm text-white/80 inter leading-tight">
              Surface challenges happening between sessions, bringing every
              personal breakthrough opportunity.
            </p>
          </div>
        </FadeRise>

        {/* Card 3 - Top Right (spans 2 cols, 2 rows) */}
        <FadeRise
          delay={0.24}
          className="col-span-2 row-span-2 col-start-5 row-start-1"
        >
          <div className="w-full aspect-square rounded-2xl border border-white/30 bg-gradient-to-b from-white/10 to-black/80 p-6 flex flex-col items-center justify-center text-center">
            <Target className="w-10 h-10 text-theme mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Lead with Precision
            </h3>
            <p className="text-sm text-white/80 inter leading-tight">
              Use objective insights to guide the conversation when clients
              can't articulate needs.
            </p>
          </div>
        </FadeRise>
      </div>

      {/* Mobile Single Column */}
      <div className="md:hidden space-y-6">
        <FadeRise delay={0}>
          <div className="w-full rounded-2xl border border-white/30 bg-gradient-to-b from-white/10 to-black/80 p-6 flex flex-col items-center justify-center text-center">
            <Timer className="w-10 h-10 text-theme mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Eliminate Wasted Time
            </h3>
            <p className="text-sm text-white/80 inter leading-tight">
              Go from 'What's on your mind?' to data-informed clarity.
            </p>
          </div>
        </FadeRise>

        <FadeRise delay={0.12}>
          <div className="w-full rounded-2xl border border-white/30 bg-gradient-to-b from-white/10 to-black/80 p-6 flex flex-col items-center justify-center text-center">
            <Lightbulb className="w-10 h-10 text-theme mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Unlock Deeper Insights
            </h3>
            <p className="text-sm text-white/80 inter leading-tight">
              Surface challenges happening between sessions.
            </p>
          </div>
        </FadeRise>

        <FadeRise delay={0.24}>
          <div className="w-full rounded-2xl border border-white/30 bg-gradient-to-b from-white/10 to-black/80 p-6 flex flex-col items-center justify-center text-center">
            <Target className="w-10 h-10 text-theme mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Lead with Precision
            </h3>
            <p className="text-sm text-white/80 inter leading-tight">
              Guide the conversation when clients can't articulate needs.
            </p>
          </div>
        </FadeRise>
      </div>
    </div>
  );
};
