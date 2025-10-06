"use client";
import Explain from "@/components/Explain";
import FAQ from "@/components/FAQ";
import { MagicCard } from "@/components/MagicCard";
import { Marquee } from "@/components/Marquee";
import { NumberTicker } from "@/components/NumberTicker";
import { Activity, Cog, Heart } from "lucide-react";
import {
  Crown,
  Eye,
  User,
  Timer,
  Lightbulb,
  Target,
  MessageCircleQuestion,
} from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import React from "react";
import { Title } from "@/components/Title";
import { Newsletter } from "@/components/Newsletter";
import { FadeRise } from "@/components/FadeRise";
//@ts-expect-error: JS COMPATIBILITY
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import CTA from "@/components/CTA";
import TestimonialsSection from "@/components/Testimonials";
import { TestimonialsCarousel } from "@/components/CoachCarousel";

// Mild, performant animation helper
const list = [
  "Let's be honest.",
  "The rise of AI has many coaches wondering about their future.",
  "But most tech solutions are designed to remove the human element, not enhance it.",
  "We believe that’s a flawed approach.",
  "Your intuition, empathy, and connection are the most powerful assets in coaching and technology should serve them, not sideline them.",
  "PrescribeLife.AI is the first platform designed not as a replacement, but as an amplifier for your humanity.",
  "It gives you the insights to make your connections deeper and your impact undeniable.",
];

export default function Home() {
  const steps = [
    {
      id: "01",
      title: "Invite Your Client",
      description:
        "They download the PrescribeLife.AI app and connect their existing wearables in minutes.",
      subtitle: "No extra hardware, no tech headaches.",
      icon: User,
    },
    {
      id: "02",
      title: "Coach with Confidence",
      description: "Walk into every session already knowing where to focus.",
      subtitle:
        "Use data-informed topics to guide powerful conversations, prevent burnout, and create breakthroughs.",
      icon: Eye,
    },
    {
      id: "03",
      title: "Uncover Hidden Patterns",
      description:
        "We translate real-time biometric and behavioral data into simple, actionable insights.",
      subtitle: "See readiness, recovery, and resilience patterns instantly.",
      icon: Crown,
    },
  ];

  return (
    <main className="space-y-20 relative overflow-hidden max-w-full min-w-0 px-6 max-md:px-5 ">
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
        className=" flex flex-col pt-8 max-md:pt-4 px-16 max-md:px-5 "
      >
        <motion.div
          initial={{ y: 32, filter: "blur(6px)", opacity: 0 }}
          animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="w-full pb-0 max-md:pb-0 min-h-[60vh] max-md:min-h-[60vh] flex justify-center items-center"
        >
          {/* Two-column grid */}

          {/* Left-side text */}
          <div className="flex w-full flex-col items-center justify-center text-center mx-auto space-y-6 max-md:space-y-4 order-1 ">
            <motion.h1
              className="text-6xl max-md:text-3xl font-semibold text-center"
              initial={{ y: 30, filter: "blur(4px)", opacity: 0 }}
              animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              The New Standard in <br />
              <span className="text-gradient">Performance Coaching</span>
            </motion.h1>

            <motion.p
              className="text-2xl max-md:text-base inter text-center w-full max-w-none mt-2 px-8 md:px-20"
              initial={{ y: 24, filter: "blur(4px)", opacity: 0 }}
              animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
            >
              Effective coaching isn’t one-size-fits-all. The new standard
              ensures burnout is no longer the cost of high <br />
              performance — by cultivating resilience through the right systems,
              insights, and support.
            </motion.p>

            {/* Button only on desktop */}
            <motion.div className="flex justify-center">
              <CTA />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="relative mx-auto max-w-7xl px-8 max-md:px-4 py-16 max-md:py-10">
        <FadeRise className="text-center space-y-2">
          <h2 className="text-4xl max-md:text-3xl font-semibold">
            Why it matters
          </h2>
          <div className="text-theme text-3xl max-md:text-xl font-semibold">
            Here’s Why
          </div>
        </FadeRise>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-8 max-md:mt-6">
          {/* Left copy */}
          <FadeRise>
            <div className="space-y-6 max-md:space-y-4 max-md:text-base leading-relaxed text-center md:text-left">
              <p className="text-2xl">
                Traditional coaching often stops at goals and accountability,
                missing the hidden stress and recovery patterns that shape
                outcomes.
              </p>
              <p className="text-theme font-semibold text-2xl">
                The new standard brings resilience science, biometric data, and
                adaptive support into every client journey.
              </p>
            </div>
          </FadeRise>

          {/* Right visual (no yellow bars) */}
          <FadeRise delay={0.05} className="flex justify-center md:justify-end">
            <div className="">
              <Image
                src="/resilience-insight.png"
                alt="Resilience • Insight • Adaptive support"
                width={400}
                height={400}
                className="mx-auto w-full max-w-md"
              />
            </div>
          </FadeRise>
        </div>
      </section>
      <section className="flex flex-col items-center space-y-10 max-md:space-y-6">
        <FadeRise delay={0.6}>
          <div className="text-4xl max-md:text-base text-center font-semibold ">
            The Essentials of the{" "}
            <span className="text-theme ">New Standard</span>
          </div>
        </FadeRise>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-md:gap-4 max-w-6xl w-full px-8 max-md:px-4 mt-12 max-md:mt-6">
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
              className="rounded-2xl p-6 md:p-7 border border-white/20 bg-gradient-to-b from-zinc-800/70 to-black/90 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)] space-y-3 flex flex-col h-full min-h-[200px]"
            >
              <h3 className="text-white font-semibold text-2xl leading-snug">
                {c.titleLines[0]} <br /> {c.titleLines[1]}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed inter flex-1">
                {c.body}
              </p>
            </FadeRise>
          ))}
        </div>
      </section>
      {/* NEEDED TO DELIVER IT */}
      <section className="flex flex-col items-center space-y-10 max-md:space-y-6 mt-6">
        <FadeRise>
          <h2 className="text-4xl max-md:text-base font-semibold text-center">
            What is needed to <span className="text-theme">Deliver it ?</span>
          </h2>
        </FadeRise>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-md:gap-4 max-w-6xl w-full px-8 max-md:px-4">
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
              className="rounded-2xl p-6 md:p-7 border border-white/20 bg-gradient-to-b from-zinc-800/70 to-black/90 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)] space-y-3 flex flex-col h-full min-h-[200px]"
            >
              <h3 className="text-white font-semibold text-2xl leading-snug">
                {c.titleLines.join(" ")}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed inter flex-1">
                {c.body}
              </p>
            </FadeRise>
          ))}
        </div>
      </section>

      {/*ELEVATE YOUR PRACTICE */}
      <section className="flex flex-col items-center text-center">
        <FadeRise>
          <Title
            text="Elevate Your Practice with "
            className="text-5xl max-md:text-3xl"
          />
        </FadeRise>
        <FadeRise delay={0.1}>
          <Title
            text="PrescribeLife.Ai"
            className="text-theme text-5xl max-md:text-3xl"
          />
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

      {/* Turns complex data */}
      <section className="flex flex-col items-center text-center">
        <FadeRise>
          <div className="text-5xl max-md:text-3xl font-semibold mx-5 ">
            <span
              dangerouslySetInnerHTML={{
                __html:
                  '<span class="text-theme">PrescribeLife.AI</span> turns complex data into simple, actionable insights coaches can use in every session.',
              }}
            />
          </div>
        </FadeRise>

        <FadeRise className="flex justify-center items-center" delay={0.2}>
          <img
            className="w-2/3 max-md:w-full mt-16 max-md:mt-8 -translate-x-16 max-md:-translate-x-0"
            src="/hero.png"
            alt="result"
          />
        </FadeRise>
      </section>

      {/* TRUSTED */}
      {/* <section className="flex flex-col items-center min-h-[50vh] space-y-10 text-center">
        <FadeRise>
          <Title text="Trusted by Performance Coaches Behind Today's Most Influential Leaders" />
        </FadeRise>
        
      </section> */}

      <div className="max-md:hidden"></div>
      {/* <div className="hidden max-md:block">
        <div className="w-full flex-col justify-center items-center hidden max-md:flex mb-16">
          <Splide
            options={{
              type: "loop",
              focus: "center",
              interval: 2000,
              direction: "ttb",
              autoplay: true,
              height: "30rem",
              perPage: 3,
              arrows: false,
              pagination: false,
              gap: "0px",
              pauseOnHover: false,
              wheel: false,
              drag: false,
            }}
          >
            {list.map((x, i) => (
              <SplideSlide key={i}>
                <motion.div
                  style={{
                    animation: `rotateBG 5s linear infinite`,
                    animationDelay: "6s",
                  }}
                  className="text-center text-lg text-white w-full bg-black"
                >
                  {x}
                </motion.div>
              </SplideSlide>
            ))}
          </Splide>

          <motion.div
            whileInView={{
              opacity: 1,
            }}
            initial={{
              opacity: 0.2,
            }}
            style={{
              animation: `rotateBG 4s linear infinite`,
              fontSize: "3em",
            }}
            className="floatingText red-text floating-main z-[9]"
          ></motion.div>
        </div>
      </div> */}

      {/* GAP NARRATIVE */}

      {/* Grounded in research*/}
      <section className="flex flex-col items-center gap-16 max-md:gap-8">
        <FadeRise>
          <Title
            text="Grounded in Research"
            className="text-5xl max-md:text-3xl"
          />
        </FadeRise>
        <div className="flex flex-col  md:flex-row justify-center items-stretch w-full max-w-6xl divide-y md:divide-y-0 md:divide-x divide-white/20">
          {[
            { v: 8, label: "Days of real-world behavioral data", suffix: "M+" },
            { v: 500, label: "User profiles analyzed", suffix: "K+" },
            {
              v: 50,
              label: "Clinical assessments training models",
              suffix: "K+",
            },
          ].map((m, i) => (
            <FadeRise
              key={i}
              delay={i * 0.15}
              className="flex-1 flex flex-col items-center py-6 max-md:py-4 px-4 max-md:px-2 gap-4"
            >
              <div className="text-6xl max-md:text-4xl font-semibold text-theme">
                <NumberTicker value={m.v} className="text-theme" />
                {m.suffix}
              </div>
              <p className="text-white/60 text-center max-w-xs text-base max-md:text-sm inter">
                {m.label}
              </p>
            </FadeRise>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <Newsletter></Newsletter>
    </main>
  );
}
