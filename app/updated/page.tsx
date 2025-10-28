"use client";
import { motion } from "motion/react";
import CTA from "@/components/CTA";
import Image from "next/image";
import React from "react";
import GlowCard from "@/components/Glowcard";
import { Dna, Sparkle } from "lucide-react";
import { MagicCard } from "@/components/MagicCard";
import { FadeRise } from "@/components/FadeRise";

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

export default function UpdatedHome() {
  return (
    <section className="mx-12 flex flex-col gap-24">
      {/* Hero Section */}
      <section id="hero" className="flex flex-col max-md:pt-4 px-6 max-md:px-5">
        <motion.div
          initial={{ y: 32, filter: "blur(6px)", opacity: 0 }}
          animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="w-full pb-0 max-md:pb-0 min-h-[90vh] flex justify-center items-center max-md:items-center max-md:justify-center"
        >
          <div className="flex flex-col md:flex-row items-start justify-center gap-6 max-md:gap-4 w-full max-md:mt-1">
            {/* Left Text */}
            <div className="flex w-full md:w-1/2 flex-col items-start justify-center text-left max-md:text-center max-md:items-center space-y-4 max-md:space-y-4 order-1">
              <motion.h1
                className="text-6xl max-md:text-3xl font-semibold"
                initial={{ y: 30, filter: "blur(4px)", opacity: 0 }}
                animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Set the new standard in <br />
                <span className="text-gradient">performance coaching</span>
              </motion.h1>

              <motion.p
                className="text-xl max-md:text-base inter"
                initial={{ y: 24, filter: "blur(4px)", opacity: 0 }}
                animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
              >
                Resilience coaching that adapts in real time to evolving client
                needs, powered by behavioral science and biometric
                precision—because burnout should not be the cost of performance.
              </motion.p>

              <motion.div className="flex">
                <CTA />
              </motion.div>
            </div>

            {/* Right Image */}
            <div className="flex w-full md:w-1/2 flex-col items-center justify-start order-2 space-y-4 max-md:space-y-2">
              <Image
                src="/result.png"
                width={900}
                height={900}
                alt="platform"
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Burnout + Thesis Section */}
      <section className="flex flex-col gap-16 mx-20">
        {/* Burnout */}
        <section className="flex flex-col gap-10">
          <h1 className="text-5xl font-semibold">
            <span className="text-theme">Burnout &nbsp;</span>
            is one the most Defining <br />
            Challenges of our Time
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 text-xl align-start max-md:gap-5 gap-2">
            <div className="flex justify-start items-center">
              <p>
                85% of coaches say clients are seeking more support for
                well-being.
                <br />
                80% of professionals are at{" "}
                <span className="text-theme">risk of burnout.</span>
              </p>
            </div>

            <div className="flex justify-end items-center">
              <GlowCard className="min-h-[100px] flex justify-center items-center max-w-2xl">
                <p>
                  <span className="text-pink-400 font-semibold">
                    PrescribeLife.AI
                  </span>{" "}
                  was built to help you meet this urgent need head-on.
                </p>
              </GlowCard>
            </div>
          </div>
        </section>

        {/* Thesis */}
        <section className="flex flex-col gap-10">
          <h1 className="text-5xl font-semibold">
            Our Founding&nbsp;
            <span className="text-theme">Thesis</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 text-xl align-start max-md:gap-5 gap-2">
            <div className="flex justify-start items-center">
              <p>
                Built by a team of doctors, neuroscientists, and ICF-accredited
                <br />
                resilience coaches, we believe the future of coaching is
                adaptive,
                <br />
                personalized, and always-on.
              </p>
            </div>

            <div className="flex justify-end items-end max-md:justify-center">
              <span className="border-1 border-white px-6 py-2 rounded-3xl">
                Here's what we mean:
              </span>
            </div>
          </div>
        </section>
      </section>

      {/* 360 View */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex justify-end items-center">
          <Image src={"/360view.png"} height={500} width={500} alt="360View" />
        </div>

        <div className="flex flex-col justify-between">
          <h1 className="text-5xl font-semibold">
            The <span className="text-theme">PrescribeLife.AI</span>
            <br />
            Platform
          </h1>
          <p className="text-xl">
            Resilience coaching that adapts in real time to evolving <br />
            client needs, powered by{" "}
            <span className="text-theme">
              behavioral science and <br /> biometric precision,&nbsp;
            </span>
            because burnout should not be the <br /> cost of performance.
          </p>
        </div>
      </section>

      {/* How It Works */}

      <section className="flex flex-col gap-12 pt-10">
        <div className="text-5xl text-center font-semibold">
          How <span className="text-theme">PrescribeLife.AI</span> Works
        </div>

        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full items-stretch">
            {steps.map((step, i) => (
              <FadeRise key={step.id} delay={i * 0.1}>
                <MagicCard className="h-full">
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
                </MagicCard>
              </FadeRise>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="max-w-6xl w-full">
            <FadeRise delay={0.2}>
              <MagicCard className="h-full">
                <div className="rounded-2xl h-full flex flex-col p-8 max-md:p-6 bg-white/10 shadow-lg border border-white/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" />
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
              </MagicCard>
            </FadeRise>
          </div>
        </div>
      </section>

      {/* Personalized daily support */}
      <section className="flex flex-col space-y-10">
        <div className="text-5xl text-center">
          <span className="text-theme">Personalized daily support </span>
          that keeps clients engaged
          <br />
          and making progress.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mx-auto ">
          <div className="flex flex-col justify-between items-center space-y-5">
            <div>
              <Image
                src={"/phone4.png"}
                height={50}
                width={250}
                alt="phone-screenshot"
              />
            </div>
            <div>
              <GlowCard>
                Build awareness <br />
                Self-Assess Resillience Drivers
              </GlowCard>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center">
            <div>
              <Image
                src={"/phone5.png"}
                height={50}
                width={250}
                alt="phone-screenshot"
              />
            </div>
            <div>
              <GlowCard>
                Build awareness <br />
                Self-Assess Resillience Drivers
              </GlowCard>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center">
            <div>
              <Image
                src={"/phone6.png"}
                height={50}
                width={250}
                alt="phone-screenshot"
              />
            </div>
            <div>
              <GlowCard>
                Build awareness <br />
                Self-Assess Resillience Drivers
              </GlowCard>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
