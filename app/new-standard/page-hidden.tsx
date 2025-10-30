"use client";
import { MagicCard } from "@/components/MagicCard";
import Image from "next/image";
import { motion } from "motion/react";
import React from "react";
import { Title } from "@/components/Title";
import { FadeRise } from "@/components/FadeRise";
import CTA from "@/components/CTA";
import { Dna, Sparkle, Handshake, Users, Heart } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Personalized Behavioral Change System",
    description:
      "Facilitates self-awareness, better decision-making, and adaptive strategies to help your clients drive measurable resilience and performance gains — aligned with your unique coaching style.",
    icon: null,
    image: "/behaviours.png",
  },
  {
    id: "02",
    title: "Biometric Data + Habitual Insights",
    description:
      "Captures real-time physiological and emotional resilience markers, tracking trends across sleep, readiness, activity, and wellbeing—without requiring new hardware. Every small choice adds up. With Habitual Insights, coaches and clients see the hidden patterns driving performance and burnout.",
    icon: Dna,
    image: null,
  },
];

export default function NewStandard() {
  return (
    <div>
      <main className="space-y-12 max-md:space-y-8 relative overflow-hidden max-w-full min-w-0 px-6 max-md:px-5">
        {/* Background */}
        <Image
          className="absolute inset-0 w-full md:h-[150vh] max-md:h-[80vh] object-cover md:rotate-30 rotate-animation-slow md:scale-110 max-md:scale-100 z-[-1] overflow-visible pointer-events-none"
          src="/bggradient.png"
          width={300}
          height={300}
          alt="bg"
        />
        {/* HERO */}
        <section
          id="hero"
          className="flex flex-col pt-6 max-md:pt-6 px-6 max-md:px-4"
        >
          <motion.div
            initial={{ y: 32, filter: "blur(6px)", opacity: 0 }}
            animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 1, delay: 0.45 }}
            className="w-full min-h-[50vh] max-md:min-h-[37vh] flex justify-center items-center"
          >
            <div className="flex w-full flex-col items-center justify-center text-center mx-auto space-y-2 max-md:space-y-1 max-md:pt-16">
              <motion.h1
                className="text-6xl md:text-5xl max-md:text-2xl font-semibold text-center leading-tight max-md:leading-tight max-md:mb-6"
                initial={{ y: 30, filter: "blur(4px)", opacity: 0 }}
                animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                The New Standard in <br />
                <span className="text-gradient">Performance Coaching</span>
              </motion.h1>

              <motion.p
                className="text-lg max-md:text-sm inter text-center w-full max-w-4xl mt-0 px-2"
                initial={{ y: 24, filter: "blur(4px)", opacity: 0 }}
                animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
              >
                Effective coaching isn't one-size-fits-all. The new standard
                ensures burnout is no longer the cost of high performance — by
                cultivating resilience through the right systems, insights, and
                support.
              </motion.p>

              <motion.div className="flex justify-center mt-1 max-md:mt-0 max-md:my-8 max-md:mt-8">
                <CTA />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* WHY IT MATTERS */}
        <section className="relative mx-auto max-w-7xl px-8 max-md:px-4 py-4 max-md:py-3 -mt-8 max-md:-mt-12">
          <FadeRise className="text-center space-y-1">
            <h2 className="text-5xl max-md:text-2xl font-semibold">
              Why it matters
            </h2>
            <div className="text-theme text-3xl max-md:text-lg font-semibold">
              Here's Why
            </div>
          </FadeRise>

          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6 max-md:gap-4 items-center mt-6 max-md:mt-4">
            {/* Text content - spans 1 column */}
            <FadeRise className="col-span-1 max-md:col-span-1">
              <div className="space-y-6 max-md:space-y-4 leading-relaxed text-left max-md:text-center">
                <p className="text-lg max-md:text-sm">
                  Traditional coaching often stops at goals and accountability,
                  missing the hidden stress and recovery patterns that shape
                  outcomes.
                </p>
                <p className="text-theme font-semibold text-lg max-md:text-sm">
                  The new standard brings resilience science, biometric data,
                  and adaptive support into every client journey.
                </p>
              </div>
            </FadeRise>

            {/* Image - spans 2 columns */}
            <FadeRise delay={0.05} className="col-span-2 max-md:col-span-1">
              <div className="flex justify-center">
                <Image
                  src="/process.png"
                  alt="The new standard process for coaching"
                  width={600}
                  height={600}
                  className="w-full max-w-2xl"
                />
              </div>
            </FadeRise>
          </div>
        </section>

        {/* ESSENTIALS OF THE NEW STANDARD */}
        <section className="flex flex-col items-center space-y-8 max-md:space-y-6">
          <FadeRise delay={0.6}>
            <div className="text-5xl max-md:text-2xl text-center font-semibold">
              The Essentials of the{" "}
              <span className="text-theme">New Standard</span>
            </div>
          </FadeRise>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-md:gap-3 max-w-6xl w-full px-6 max-md:px-4 mt-6 max-md:mt-4">
            {[
              {
                titleLines: ["Adaptive", "Coaching"],
                body: "Adaptive coaching to each client's physiological, emotional, and cognitive states.",
              },
              {
                titleLines: ["Personalized", "Strategies"],
                body: "Tailored approaches are essential because not everyone responds the same way.",
              },
              {
                titleLines: ["Whole-Person", "Focus"],
                body: "Unlocking durable performance across cognitive, emotional, and physical domains.",
              },
            ].map((c, i) => (
              <FadeRise
                key={c.titleLines.join("-")}
                delay={i * 0.12}
                className="rounded-2xl p-4 md:p-5 max-md:p-3 border border-white/20 bg-gradient-to-b from-zinc-800/70 to-black/90 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)] space-y-2 max-md:space-y-1.5 flex flex-col h-full min-h-[160px] max-md:min-h-[120px]"
              >
                <h3 className="text-white font-semibold text-2xl md:text-3xl max-md:text-base leading-tight">
                  {c.titleLines[0]} <br /> {c.titleLines[1]}
                </h3>
                <p className="text-white/80 text-sm md:text-base max-md:text-xs leading-snug max-md:leading-tight inter flex-1">
                  {c.body}
                </p>
              </FadeRise>
            ))}
          </div>
        </section>

        {/* NEEDED TO DELIVER IT */}
        <section className="flex flex-col items-center space-y-8 max-md:space-y-6">
          <FadeRise>
            <h2 className="text-5xl max-md:text-2xl font-semibold text-center">
              What is needed to <span className="text-theme">Deliver it ?</span>
            </h2>
          </FadeRise>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-md:gap-3 max-w-6xl w-full px-6 max-md:px-4">
            {[
              {
                titleLines: ["Right", "System"],
                body: "Sustained behavior change through consistent daily actions.",
              },
              {
                titleLines: ["Right", "Data"],
                body: "Objective insights to measure what's really working.",
              },
              {
                titleLines: ["Scalable", "Support"],
                body: "Extending coaching beyond sessions with adaptive systems.",
              },
            ].map((c, i) => (
              <FadeRise
                key={c.titleLines.join("-")}
                delay={i * 0.12}
                className="rounded-2xl p-3 md:p-4 max-md:p-2.5 border border-white/20 bg-gradient-to-b from-zinc-800/70 to-black/90 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)] space-y-1.5 max-md:space-y-1 flex flex-col h-full min-h-[140px] max-md:min-h-[100px]"
              >
                <h3 className="text-white font-semibold text-2xl md:text-3xl max-md:text-base leading-tight">
                  {c.titleLines.join(" ")}
                </h3>
                <p className="text-white/80 text-sm md:text-base max-md:text-xs leading-snug max-md:leading-tight inter flex-1">
                  {c.body}
                </p>
              </FadeRise>
            ))}
          </div>
        </section>

        {/* ELEVATE YOUR PRACTICE */}
        <section className="flex flex-col items-center text-center">
          <FadeRise>
            <h2 className="text-5xl max-md:text-3xl font-semibold">
              Elevate Your Practice with{" "}
              <span className="text-theme">PrescribeLife.Ai</span>
            </h2>
          </FadeRise>
          <FadeRise delay={0.15}>
            <div className="w-full max-w-6xl px-8 max-md:px-4 mt-6">
              <p className="text-lg max-md:text-base text-white/80 text-center">
                The PrescribeLife.AI platform integrates three layers,{" "}
                <span className="text-theme">
                  behavioral change, biometric insights, and adaptive AI support
                </span>
                , to help coaches deliver the new standard in performance
                coaching.
              </p>
            </div>
          </FadeRise>
          <FadeRise delay={0.2}>
            <div className="w-full mt-5">
              <div className="w-full rounded-2xl overflow-hidden">
                <Image
                  src="/adaptive-coaching-platform.png"
                  alt="Adaptive Coaching Platform"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </FadeRise>
        </section>

        {/* PERSONALIZED BEHAVIORAL CHANGE SYSTEM */}
        <div className="flex items-center justify-center -mt-25 max-md:-mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full items-stretch">
            {steps.map((step, i) => (
              <FadeRise key={step.id} delay={i * 0.1}>
                <HoverGlowContainer className="h-full">
                  <div className="rounded-2xl h-full flex flex-col p-8 max-md:p-6 bg-white/10 shadow-lg border border-white/10">
                    <div className="flex justify-between items-start mb-4">
                      {step.image ? (
                        <Image
                          src={step.image}
                          alt={step.title}
                          width={56}
                          height={56}
                          className="flex-shrink-0"
                        />
                      ) : step.icon ? (
                        React.createElement(step.icon, {
                          size: 56,
                          className: "text-theme flex-shrink-0",
                        })
                      ) : null}
                      <div className="text-5xl max-md:text-3xl font-semibold text-white/30">
                        {step.id}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl max-md:text-xl font-semibold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-zinc-300 text-base max-md:text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </HoverGlowContainer>
              </FadeRise>
            ))}
          </div>
        </div>

        {/* 24/7 ADAPTIVE COACHING SUPPORT */}
        <div className="flex items-center justify-center">
          <div className="max-w-6xl w-full">
            <FadeRise delay={0.2}>
              <HoverGlowContainer className="h-full">
                <div className="rounded-2xl h-full flex flex-col p-8 max-md:p-6 bg-white/10 shadow-lg border border-white/10 relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                    style={{ backgroundImage: "url('/preslie-adaptive.png')" }}
                  />
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <Sparkle size={56} className="text-theme flex-shrink-0" />
                    <div className="text-5xl max-md:text-3xl font-semibold text-white/30">
                      03
                    </div>
                  </div>
                  <h3 className="text-2xl max-md:text-xl font-semibold text-white mb-6 relative z-10">
                    24/7 Adaptive Coaching Support (Preslie.AI™)
                  </h3>

                  <div className="bg-[#FFFFFF1A] border border-white/10 rounded-xl p-6 mb-6 relative z-10">
                    <h4 className="text-theme font-semibold mb-3">
                      Who is Preslie.AI™?
                    </h4>
                    <p className="text-zinc-300 text-sm leading-relaxed">
                      Preslie™ is our mobile app & your AI co-pilot—making
                      complex data simple and actionable. It quietly tracks
                      resilience patterns, flags early warning signs, and
                      suggests micro-strategies between sessions.
                    </p>
                  </div>

                  <p className="text-white font-medium mb-6 leading-relaxed relative z-10">
                    This evidence-based system gives you continuous visibility
                    into a client's mental, physical, and emotional resilience
                    profile.
                  </p>

                  <div className="space-y-6 max-w-xl">
                    <h4 className="text-theme font-semibold text-lg">
                      With this clarity, you can:
                    </h4>
                    <div className="space-y-4">
                      {[
                        "Spot stress and recovery patterns before they escalate.",
                        "Adapt strategies to each client's current resilience stage.",
                        "Scale personalization without adding manual workload.",
                      ].map((text, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                          <div className="flex flex-col items-center">
                            <div className="w-1 h-6 bg-theme rounded-full" />
                          </div>
                          <p className="text-zinc-300 text-base leading-relaxed">
                            {text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </HoverGlowContainer>
            </FadeRise>
          </div>
        </div>

        {/* TURNS COMPLEX DATA */}
        <section className="flex flex-col items-center text-center">
          <FadeRise>
            <div className="text-5xl max-md:text-3xl font-semibold mx-5">
              <span className="text-theme">PrescribeLife.AI</span> turns complex
              data into simple, actionable insights coaches can use in every
              session.
            </div>
          </FadeRise>
          <FadeRise className="flex justify-center items-center" delay={0.2}>
            <img
              className="w-2/3 max-md:w-full mt-12 max-md:mt-8 -translate-x-16 max-md:-translate-x-0"
              src="/hero.png"
              alt="result"
            />
          </FadeRise>
        </section>

        {/* JOIN THE NEXT GENERATION OF COACHES */}
        <section className="flex flex-col items-center text-center space-y-10 max-md:space-y-8 py-12 max-md:py-8 relative">
          <FadeRise>
            <Title
              text="Join the Next Generation of Coaches Now"
              className="text-6xl max-md:text-2xl font-semibold"
            />
          </FadeRise>
          <FadeRise delay={0.05}>
            <h3 className="text-3xl max-md:text-xl font-semibold text-pink-400 max-w-7xl">
              Burnout is one of the defining challenges of our era.
            </h3>
          </FadeRise>
          <FadeRise delay={0.1} className="max-w-5xl mx-auto w-full">
            <p className="text-lg max-md:text-base text-white/80 leading-relaxed">
              By integrating resilience science, biometric data, habitual
              insights, and consistent AI-adapted support, you aren't just
              helping individual clients — you're setting the new standard for
              what high-performance coaching can truly be.
            </p>
          </FadeRise>

          <FadeRise
            delay={0.15}
            className="bg-[#1a1a1a] border border-white/20 rounded-3xl px-8 py-6 relative max-w-lg w-full"
          >
            <div className="absolute left-6 top-1/2 -translate-y-1/2 w-[3px] h-10 bg-theme rounded-full" />
            <p className="pl-10 text-lg leading-relaxed text-white">
              <span className="text-pink-400 font-semibold">
                PrescribeLife.AI &nbsp;
              </span>
              is your partner.
            </p>
          </FadeRise>

          <FadeRise delay={0.25} className="max-w-5xl mx-auto w-full">
            <p className="text-white/80 leading-relaxed text-base">
              Your work has a ripple effect: when one client builds resilience,
              it impacts their team, family, and community.
            </p>
          </FadeRise>

          <FadeRise
            delay={0.35}
            className="bg-[#1a1a1a] border border-white/20 rounded-3xl px-8 py-6 relative max-w-3xl w-full"
          >
            <div className="absolute left-6 top-6 w-[3px] h-16 bg-theme rounded-full" />
            <p className="pl-10 text-lg leading-relaxed text-white">
              <span className="text-pink-400 font-semibold">Together</span>,
              we're creating a future where high achievement and wellbeing are
              not at odds — but deeply connected.
            </p>
          </FadeRise>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full px-8 max-md:px-4 mt-10">
            {[
              {
                icon: <Handshake className="w-8 h-8 text-pink-400" />,
                title: "Impact on clients",
                body: "Transform individual client outcomes with personalized, data-driven coaching.",
              },
              {
                icon: <Users className="w-8 h-8 text-pink-400" />,
                title: "Impacts on teams",
                body: "Resilient clients create resilient teams and organizational cultures.",
              },
              {
                icon: <Heart className="w-8 h-8 text-pink-400" />,
                title: "Impacts on families",
                body: "Wellbeing ripples from work to home, strengthening communities.",
              },
            ].map((card, i) => (
              <FadeRise
                key={i}
                delay={0.45 + i * 0.1}
                className="rounded-2xl p-6 md:p-7 border border-white/20 bg-gradient-to-b from-zinc-800/70 to-black/90 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)] flex flex-col items-center space-y-4 text-center h-full min-h-[200px]"
              >
                {card.icon}
                <h3 className="text-white font-semibold text-xl">
                  {card.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {card.body}
                </p>
              </FadeRise>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA SECTION */}
      </main>
      <section className="relative w-screen left-[50%] right-[50%] -mx-[50vw] overflow-hidden bg-black text-center text-white min-h-[400px] max-md:min-h-[300px] flex items-center py-12 max-md:py-10 -mb-20 ">
        <div
          className="absolute inset-0 bg-repeat bg-center bg-[length:auto_100%] opacity-60 "
          style={{ backgroundImage: "url('/new-standard-grid.png')" }}
        />
        <div className="relative z-10 space-y-4 max-w-4xl mx-auto px-6">
          <FadeRise delay={0.12}>
            <p className="text-white text-5xl max-md:text-2xl font-semibold">
              Ready to See the <span className="text-theme">New Standard</span>{" "}
              in Action?
            </p>
          </FadeRise>
          <FadeRise delay={0.1} className="max-w-5xl mx-auto w-full">
            <p className="text-lg max-md:text-base text-white/80 leading-relaxed">
              We're inviting select coaches to experience how resilience
              insights and adaptive support can transform client results.
            </p>
          </FadeRise>
          <div className="flex justify-center items-center mt-4">
            <CTA classname="w-2xs" />
          </div>
        </div>
      </section>
    </div>
  );
}
