"use client";

import { FadeRise } from "./FadeRise";
import { Title } from "./Title";
import { Timer, Lightbulb, Target } from "lucide-react";

export const StaircaseCards = () => {
  const cards = [
    {
      icon: Timer,
      title: "Eliminate Wasted Time",
      text: "Go from 'What's on your mind?' to data-informed clarity.",
    },
    {
      icon: Lightbulb,
      title: "Unlock Deeper Insights",
      text: "Surface challenges happening between sessions.",
    },
    {
      icon: Target,
      title: "Lead With Precision",
      text: "Guide the conversation when clients can't articulate needs.",
    },
  ];

  return (
    <section className="flex flex-col items-center mx-32 max-md:mx-0 px-6 max-md:px-5 -mt-20 max-md:-mt-8">
      <div className="w-full px-8 max-md:px-5 mt-8 max-md:mt-4">
        {/* Desktop Staircase Layout (1024px and above) */}
        <div className="hidden lg:block relative w-full max-w-5xl mx-auto h-[450px]">
          {/* Card 1 - Bottom Left */}
          <FadeRise
            delay={0}
            className="absolute bottom-0 left-0 rounded-2xl border border-white/30 bg-gradient-to-b from-white/10 to-black/80 p-6 flex flex-col justify-center items-center text-center w-60 h-60"
          >
            <Timer className="w-10 h-10 text-theme mb-3" />
            <h3 className="text-2xl font-semibold text-white mb-2">
              {cards[0].title}
            </h3>
            <p className="text-sm leading-tight inter text-white/80">
              {cards[0].text}
            </p>
          </FadeRise>

          {/* Card 2 - Middle Center */}
          <FadeRise
            delay={0.12}
            className="absolute top-20 left-1/2 transform -translate-x-1/2 rounded-2xl border border-white/30 bg-gradient-to-b from-white/10 to-black/80 p-6 flex flex-col justify-center items-center text-center w-60 h-60 shadow-lg"
          >
            <Lightbulb className="w-10 h-10 text-theme mb-3" />
            <h3 className="text-2xl font-semibold text-white mb-2">
              {cards[1].title}
            </h3>
            <p className="text-sm leading-tight inter text-white/80">
              {cards[1].text}
            </p>
          </FadeRise>

          {/* Card 3 - Top Right */}
          <FadeRise
            delay={0.24}
            className="absolute top-0 right-0 rounded-2xl border border-white/30 bg-gradient-to-b from-white/10 to-black/80 p-6 flex flex-col justify-center items-center text-center w-60 h-60"
          >
            <Target className="w-10 h-10 text-theme mb-3" />
            <h3 className="text-2xl font-semibold text-white mb-2">
              {cards[2].title}
            </h3>
            <p className="text-sm leading-tight inter text-white/80">
              {cards[2].text}
            </p>
          </FadeRise>
        </div>

        {/* Tablet Staircase Layout (768px to 1023px) - Smaller cards with gaps */}
        <div className="hidden md:block lg:hidden relative w-full max-w-4xl mx-auto h-[380px]">
          {/* Card 1 - Bottom Left */}
          <FadeRise
            delay={0}
            className="absolute bottom-0 left-4 rounded-2xl border border-white/30 bg-gradient-to-b from-white/10 to-black/80 p-4 flex flex-col justify-center items-center text-center w-48 h-48"
          >
            <Timer className="w-8 h-8 text-theme mb-2" />
            <h3 className="text-lg font-semibold text-white mb-2">
              {cards[0].title}
            </h3>
            <p className="text-xs leading-tight inter text-white/80">
              {cards[0].text}
            </p>
          </FadeRise>

          {/* Card 2 - Middle Center */}
          <FadeRise
            delay={0.12}
            className="absolute top-16 left-1/2 transform -translate-x-1/2 rounded-2xl border border-white/30 bg-gradient-to-b from-white/10 to-black/80 p-4 flex flex-col justify-center items-center text-center w-48 h-48 shadow-lg"
          >
            <Lightbulb className="w-8 h-8 text-theme mb-2" />
            <h3 className="text-lg font-semibold text-white mb-2">
              {cards[1].title}
            </h3>
            <p className="text-xs leading-tight inter text-white/80">
              {cards[1].text}
            </p>
          </FadeRise>

          {/* Card 3 - Top Right */}
          <FadeRise
            delay={0.24}
            className="absolute top-0 right-4 rounded-2xl border border-white/30 bg-gradient-to-b from-white/10 to-black/80 p-4 flex flex-col justify-center items-center text-center w-48 h-48"
          >
            <Target className="w-8 h-8 text-theme mb-2" />
            <h3 className="text-lg font-semibold text-white mb-2">
              {cards[2].title}
            </h3>
            <p className="text-xs leading-tight inter text-white/80">
              {cards[2].text}
            </p>
          </FadeRise>
        </div>

        {/* Mobile Vertical Stack (below 768px) */}
        <div className="md:hidden flex flex-col items-center space-y-6">
          {cards.map((card, i) => (
            <FadeRise
              key={card.title}
              delay={i * 0.12}
              className="rounded-2xl border border-white/30 bg-gradient-to-b from-white/10 to-black/80 p-6 flex flex-col justify-center items-center text-center w-full max-w-sm h-60"
            >
              <card.icon className="w-10 h-10 text-theme mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-sm leading-tight inter text-white/80">
                {card.text}
              </p>
            </FadeRise>
          ))}
        </div>
      </div>
    </section>
  );
};
