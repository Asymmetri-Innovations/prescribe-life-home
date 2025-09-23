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
  "PrescribeLife.ai is the first platform designed not as a replacement, but as an amplifier for your humanity.",
  "It gives you the insights to make your connections deeper and your impact undeniable.",
];

export default function Home() {
  const steps = [
    {
      id: "01",
      title: "Invite Your Client",
      description:
        "They download the PrescribeLife.ai app and connect their existing wearables in minutes.",
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
    <main className="space-y-24 relative overflow-x-hidden max-w-full min-w-0 px-4 max-md:px-2">
      <Image
        className="w-full h-[150vh] absolute rotate-30 rotate-animation-slow scale-110 z-[-1] overflow-hidden"
        src="/bggradient.png"
        width={300}
        height={300}
        alt="bg"
      />

      {/* HERO */}

      <section id="hero" className=" flex flex-col pt-24 px-6 max-md:px-4 ">
        <motion.div
          initial={{ y: 32, filter: "blur(6px)", opacity: 0 }}
          animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="w-full pb-0 max-md:pb-0 min-h-screen mx-6 max-md:mx-auto"
        >
          {/* Two-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8 w-full h-full mt-16 max-md:mt-8">
            {/* Left-side text */}
            <div className="flex flex-col items-start justify-center text-left max-md:text-center max-md:items-center space-y-6 max-md:space-y-4 order-1">
              <motion.h1
                className="text-6xl max-md:text-4xl font-medium"
                initial={{ y: 30, filter: "blur(4px)", opacity: 0 }}
                animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Set the new standard in <br />
                <span className="text-gradient">performance coaching</span>
              </motion.h1>

              <motion.p
                className="text-lg max-md:text-base"
                initial={{ y: 24, filter: "blur(4px)", opacity: 0 }}
                animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
              >
                Resilience coaching that adapts in real time to evolving client
                needs, powered by behavioral science and biometric
                precision—because burnout should not be the cost of performance.
              </motion.p>

              {/* Button only on desktop */}
              <motion.div className="flex max-md:hidden">
                <CTA />
              </motion.div>
            </div>

            {/* Right-side image */}
            <div className="flex flex-col items-center justify-start order-2 space-y-6">
              <Image
                src="/result.png"
                width={900}
                height={900}
                alt="platform"
                className="w-full h-auto"
              />

              {/* Button only on mobile */}
              <motion.div className="flex md:hidden">
                <CTA />
              </motion.div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 32, filter: "blur(6px)", opacity: 0 }}
          animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="w-full pb-0 max-md:pb-0 space-y-8 mt-20 max-md:mt-10"
        >
          <p className="text-4xl text-center">
            Trusted by Performance Coaches Behind Today's <br />
            <span className="text-theme">Most Influential Leaders</span>
          </p>
          <section className="mt-0">
            <TestimonialsCarousel />
            <div className="flex items-center justify-center mt-7">
              <Image
                src="/security.png"
                width={400}
                height={400}
                alt="security"
              />
            </div>
          </section>
        </motion.div>
      </section>

      <section className="relative max-w-5xl mx-auto px-6 text-center space-y-4 sm:space-y-6">
        <FadeRise>
          <p className="text-white/80 text-base sm:text-lg">
            The International Coach Federation (ICF) reports that 85% of coaches
            are hearing increased demand for mental well-being support.
          </p>
        </FadeRise>
        <FadeRise delay={0.06}>
          <p className="text-white/80 text-base sm:text-lg">
            Mercer’s Global Talent Trends report shares that 80% of
            professionals are at risk of burnout.
          </p>
        </FadeRise>
        <FadeRise delay={0.12}>
          <p className="text-theme text-4xl max-md:text-3xl font-semibold">
            “PrescribeLife.Ai was built to help coaches meet this urgent need
            head on.”
          </p>
        </FadeRise>
        <FadeRise delay={0.18}>
          <p className="text-white/80 text-base sm:text-lg">
            Whether you coach executives, leaders, founders or already focus on
            resilience, mental fitness and burnout — PrescribeLife.AI is
            designed for you.
          </p>
        </FadeRise>
      </section>
      {/* TRUSTED */}
      {/* <section className="flex flex-col items-center min-h-[50vh] space-y-10 text-center">
        <FadeRise>
          <Title text="Trusted by Performance Coaches Behind Today's Most Influential Leaders" />
        </FadeRise>
        
      </section> */}

      {/* STEPS */}
      <section className="flex flex-col items-center space-y-8 max-md:space-y-4">
        <FadeRise>
          <Title
            text="Powerful Insights, Radically Simple to Use"
            className="text-5xl max-md:text-4xl"
          />
        </FadeRise>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full px-6 max-md:px-4">
          {steps.map((step, i) => (
            <FadeRise key={step.id} delay={i * 0.12}>
              <MagicCard>
                <div className="h-[400px] rounded-2xl p-8 border border-white/10 relative overflow-hidden space-y-6 max-md:space-y-4">
                  <div className="absolute top-6 right-6 text-6xl max-md:text-4xl font-bold text-white/30 opacity-50">
                    {step.id}
                  </div>
                  <step.icon size={60} className="text-theme" />
                  <h3 className="text-3xl max-md:text-2xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                  <p className="text-white font-medium">{step.subtitle}</p>
                </div>
              </MagicCard>
            </FadeRise>
          ))}
        </div>
      </section>

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
      <section className="max-w-6xl mx-auto px-8 max-md:px-4 space-y-20 max-md:space-y-12">
        <div className="space-y-12 max-md:space-y-8 max-md:text-center">
          <FadeRise>
            <h2 className="text-5xl max-md:text-4xl font-bold leading-tight">
              Are Weekly Check-ins and Client Self-Reporting Still Enough?
            </h2>
          </FadeRise>
          <div className="grid md:grid-cols-2 gap-12 items-start max-md:items-center">
            <FadeRise delay={0.05} className="">
              <img
                className="rounded-xl shadow-lg ring-1 ring-white/10 max-md:w-3/4 max-md:mx-auto"
                src="/gavin.jpg"
                alt="coach context"
              />
            </FadeRise>
            <FadeRise delay={0.12}>
              <div className="space-y-5 max-md:space-y-3 text-base max-md:text-sm leading-relaxed">
                <h3 className="text-3xl max-md:text-2xl font-semibold text">
                  You excel in the moment
                </h3>
                <p>
                  During a call, you see the shifts, hear the hesitations, and
                  guide breakthroughs. Your expertise is undeniable.
                </p>
                <p>But what happens when the call ends?</p>
                <p>
                  Your client steps back into a 24/7 reality of hidden
                  stressors, fluctuating energy shifts, and invisible mindset
                  blocks.
                </p>
                <p>
                  You’re left with week-old self-reporting, piecing together an
                  incomplete puzzle.
                </p>
                <p className="italic text-theme font-medium">
                  “You’re coaching the person who shows up to the session, not
                  the whole person living their life”.
                </p>
                <p>
                  This isn’t a flaw in your method—it’s a limitation of the
                  traditional model.
                </p>
              </div>
            </FadeRise>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <FadeRise>
            <div className="space-y-6 max-md:text-center">
              <h3 className="text-3xl max-md:text-2xl font-semibold text">
                <span className="text-theme/80">PrescribeLife.ai</span> closes
                that gap.
              </h3>
              <p className="text-zinc-300 max-w-md text-base max-md:text-sm">
                We surface real-time, objective data on resilience, recovery,
                and behavior patterns—fuel for your intuition to drive lasting
                change.
              </p>
              <div className="flex justify-start max-md:justify-center">
                <CTA classname="w-2xs" />
              </div>
            </div>
          </FadeRise>
          <FadeRise delay={0.1}>
            <div className="rounded-xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-black p-6 md:p-8 ring-1 ring-white/10 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.18),transparent_65%)]" />
              <div className="space-y-6 relative z-10">
                <img
                  src="/second.jpg"
                  alt="fusion"
                  className="rounded-lg ring-1 ring-white/10 max-md:w-full"
                />
                <div className="text-center text-xs tracking-widest text-zinc-400 font-semibold">
                  UNPRECEDENTED CLIENT RESULTS
                </div>
              </div>
            </div>
          </FadeRise>
        </div>
      </section>

      {/* Comparison Illustration (new section) */}
      <section className="relative mx-auto max-w-7xl px-8 max-md:px-4 py-32 max-md:py-20 rounded-[48px] bg-gradient-to-b from-white/10 via-white/5 to-pink-500/10 border border-white/20 shadow-[0_8px_40px_-12px_rgba(236,72,153,0.25)] overflow-hidden flex flex-col md:flex-row justify-start items-start max-md:space-y-8 max-md:mx-4">
        <div className="pointer-events-none absolute -top-32 -left-32 w-[420px] h-[420px] bg-gradient-to-br from-theme/30 to-pink-500/30 blur-3xl opacity-40" />
        <div className="pointer-events-none absolute bottom-0 -right-20 w-[360px] h-[360px] bg-gradient-to-br from-pink-400/40 to-blue-400/40 blur-3xl opacity-40" />
        <div className="relative space-y-10 w-full md:w-1/2 text-left">
          <FadeRise>
            <h2 className="text-5xl max-md:text-4xl font-bold leading-tight">
              Set the New Standard in Coaching with Evidence-Based AI Insights &
              Signals:
            </h2>
            <p className="text-lg max-md:text-base text-white/80 max-w-xl leading-relaxed mt-6 max-md:mt-4">
              Where your coaching genius meets real-time data intelligence.
            </p>
            <FadeRise
              delay={0.4}
              className="flex justify-center max-md:justify-center mt-24 max-md:mt-12"
            >
              <CTA classname="" />{" "}
            </FadeRise>
          </FadeRise>
        </div>
        <div className="relative w-full md:w-1/2 space-y-10 max-md:space-y-6 pl-16 max-md:pl-0">
          <FadeRise className="space-y-4" delay={0.15}>
            <h3 className="text-3xl max-md:text-2xl font-semibold">
              Without Prescribelife.ai
            </h3>
            <div className="flex flex-col items-start gap-10 ">
              <ul className="space-y-5 max-md:space-y-3 text-base max-md:text-sm font-medium text-zinc-200 ">
                {["Clients Self Reporting", "Your Expertise & Guidance"].map(
                  (item, i) => (
                    <li key={i} className="relative pl-5">
                      <span className="absolute left-0 top-2 w-3 h-[2px] bg-gradient-to-r from-theme to-pink-500" />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </FadeRise>
          <FadeRise className="space-y-4" delay={0.15}>
            <h3 className="text-3xl max-md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-theme to-pink-600">
              With Prescribelife.ai
            </h3>
            <ul className="space-y-4 max-md:space-y-2 text-sm max-md:text-xs font-medium  text-zinc-200  tracking-tight">
              {[
                "Client Reporting with Prompts on Automation",
                "Real-Time Recovery & Stress Levels",
                "Daily Patterns of Action & Inaction",
                "Early Burnout & Fatigue Warnings",
                "Hidden Mindset & Motivation Blockers",
                "AI-Generated Evidence Based Topics for Your Next Session",
                "Your Expertise & Guidance",
              ].map((item, i) => (
                <li key={i} className="relative pl-6 leading-snug">
                  <span className="absolute left-0 top-2 w-4 h-[2px] bg-gradient-to-r from-theme via-pink-500 to-blue-500 max-md:text-lg" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeRise>
        </div>
      </section>

      {/* PHONE / DASHBOARD */}
      <section className="space-y-6 max-md:space-y-4 flex flex-col items-center relative px-4 max-md:px-2">
        <FadeRise>
          <Title
            text="Your Impact is Capped by Your Calendar. Until Now."
            className="text-5xl max-md:text-4xl"
          />
        </FadeRise>
        <FadeRise delay={0.1}>
          <div className="text-base max-md:text-sm">
            Next Generation Performance Coaching Dashboard
          </div>
        </FadeRise>
        <div className="flex flex-col md:flex-row gap-6 max-md:gap-3">
          {["/phone1.png", "/phone2.png", "/phone3.png"].map((p, i) => (
            <FadeRise delay={0.15 + i * 0.1} key={p}>
              <img
                className={
                  i === 0
                    ? "w-64 translate-x-8 max-md:w-48 max-md:translate-x-0"
                    : i === 2
                    ? "w-64 -translate-x-8 max-md:w-48 max-md:translate-x-0"
                    : "w-64 max-md:w-48"
                }
                src={p}
                alt={p}
              />
            </FadeRise>
          ))}
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 max-md:gap-8 max-w-6xl mx-auto px-8 max-md:px-4">
        {/* Left column: Before content now */}
        <FadeRise className="h-full" delay={0.15}>
          <div className="bg-gradient-to-b from-white/15 to-white/20 rounded-3xl p-12 max-md:p-6 border-2 border-white/20 relative overflow-hidden w-full h-full flex flex-col">
            <img
              className="absolute bottom-1 right-1 w-28 max-md:w-24"
              src="/carddesign2.png"
              alt="decor2"
            />
            <div className="relative z-10 space-y-8 flex-1">
              <div>
                <h2 className="text-5xl max-md:text-4xl font-bold text-white mb-2">
                  Before
                </h2>
                <p className="text-4xl max-md:text-3xl text-zinc-400">
                  The Manual,
                  <br />
                  Reactive Grind
                </p>
              </div>
              {[
                "You have a great session based on what the client reports",
                "You assign practices—hoping they remember",
                "You wait two weeks blind to daily struggles",
                "You chase for updates or messy exports",
              ].map((t, i) => (
                <div className="flex items-start gap-3" key={i}>
                  <div className="w-1 h-10 bg-theme rounded-full mt-1" />
                  <p className="text-white leading-relaxed text-lg max-md:text-base">
                    {t}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeRise>

        {/* Right column: After content now */}
        <FadeRise className="h-full">
          <div className="rounded-3xl p-12 pb-6 max-md:p-6 border-2 border-white/20 relative overflow-hidden w-full h-full flex flex-col">
            <img
              className="absolute top-4 right-4 w-32 max-md:w-24"
              src="/carddesgn.png"
              alt="decor"
            />
            <div className="relative z-10 space-y-8 flex-1">
              <div>
                <h2 className="text-5xl max-md:text-4xl font-bold text-white mb-2">
                  After
                </h2>
                <p className="text-4xl max-md:text-3xl text-zinc-400">
                  The Automatic,
                  <br />
                  Proactive System
                </p>
              </div>
              {[
                "Biometric data streams to your dashboard",
                "Adaptive system supports change 24/7",
                "AI surfaces what to focus",
                "You coach with precision & foresight",
              ].map((t, i) => (
                <div className="flex items-start gap-3" key={i}>
                  <div className="w-1 h-10 bg-theme rounded-full mt-1" />
                  <p className="text-white leading-relaxed text-lg max-md:text-base">
                    {t}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeRise>
      </section>

      {/* METRICS */}
      <section className="flex flex-col items-center gap-16 max-md:gap-8">
        <FadeRise>
          <Title text="Powered By" className="text-5xl max-md:text-4xl" />
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
              <div className="text-6xl max-md:text-4xl font-semibold">
                <NumberTicker value={m.v} />
                {m.suffix}
              </div>
              <p className="text-white/60 text-center max-w-xs text-base max-md:text-sm">
                {m.label}
              </p>
            </FadeRise>
          ))}
        </div>
      </section>

      {/* SIMPLE MARQUEE (placeholder) */}
      <section className="overflow-x-hidden w-full min-w-0">
        <FadeRise>
          <div className="overflow-x-hidden w-full">
            <Marquee className="[--duration:20s]">
              {[
                { name: "Oura", src: "/oura.png" },
                { name: "Fitbit", src: "/fitbit.png" },
                { name: "Garmin", src: "/garmin.png" },
                { name: "Apple Health", src: "/apple-health.png" },
                { name: "Google Fit", src: "/google-fit.png" },
                { name: "Health Connect", src: "/health-connect.png" },
                { name: "MyFitnessPal", src: "/myfitnesspal.png" },
                { name: "Peloton", src: "/peloton.png" },
                { name: "Samsung Health", src: "/samsung-health.png" },
                { name: "Strava", src: "/strava.png" },
                { name: "Whoop", src: "/whoop.png" },
              ].map((app) => (
                <div
                  key={app.name}
                  className="bg-white w-64 max-md:w-[45vw] p-7 max-md:p-5 rounded-xl border-2 border-white/20 flex flex-col items-center gap-3 max-md:gap-2 shrink-0 shadow-md"
                >
                  <img
                    src={app.src}
                    alt={app.name}
                    className="w-16 h-16 max-md:w-12 max-md:h-12 rounded-full object-contain"
                  />
                  <div className="text-base max-md:text-sm text-gray-900">
                    {app.name}
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </FadeRise>
      </section>

      {/* COMPARISON CARDS (Problem / Solution) */}
      <section className="flex flex-col items-center">
        <FadeRise>
          <Title
            text="Your Next Coaching Session Could Be Your Best Ever."
            className="text-5xl max-md:text-4xl"
          />
        </FadeRise>
        <FadeRise delay={0.1}>
          <Title text="Here's How" className="text-theme mb-16" />
        </FadeRise>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-md:gap-6 max-w-6xl w-full px-8 max-md:px-4 mb-5 max-md:mb-4">
          <FadeRise className="h-full">
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 rounded-3xl p-8 max-md:p-6 border border-red-500/20 backdrop-blur-sm h-full space-y-6 max-md:space-y-4">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center">
                  <MessageCircleQuestion className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-3xl max-md:text-2xl font-semibold text-white">
                  How many sessions start the same way?
                </h3>
              </div>
              {[
                "Your client shows up exhausted…",
                "They say, \"I don't know, I'm tired.\"",
                "First 20 minutes just finding a starting point.",
                "Time lost navigating fog & incomplete recall.",
              ].map((t, i) => (
                <p
                  key={i}
                  className={
                    i === 1
                      ? "text-xl max-md:text-lg font-medium text-red-400 bg-red-500/10 p-4 max-md:p-3 rounded-xl border border-red-500/20"
                      : "text-lg max-md:text-base text-zinc-300 leading-relaxed"
                  }
                >
                  {t}
                </p>
              ))}
            </div>
          </FadeRise>
          <FadeRise delay={0.15}>
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-800/20 rounded-3xl p-8 max-md:p-6 border border-green-500/20 backdrop-blur-sm space-y-6 max-md:space-y-4">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-3xl max-md:text-2xl font-semibold text-white">
                  The PrescribeLife Way
                </h3>
              </div>
              <p className="text-white leading-relaxed text-lg max-md:text-base">
                Before your next call you open your dashboard.
              </p>
              <p className="text-white leading-relaxed text-lg max-md:text-base">
                You instantly see readiness dips and disrupted patterns.
              </p>
              <p className="text-white leading-relaxed text-lg max-md:text-base">
                Contextual notes surfaced by AI reveal cognitive themes.
              </p>
              <p className="text-xl max-md:text-lg font-medium text-green-400 bg-green-500/10 p-4 max-md:p-3 rounded-xl border border-green-500/20">
                “Let’s go straight into the pattern that showed up.”
              </p>
              <p className="text-white leading-relaxed text-lg max-md:text-base">
                You bypass fog and create decisive movement.
              </p>
            </div>
          </FadeRise>
        </div>
      </section>

      {/* ONBOARD BENEFITS */}

      <section className="flex flex-col items-center">
        <div className="flex w-full px-16 max-md:px-4 justify-start">
          <Title
            text="In Your First 10-14 Days, You Will"
            className="text-5xl max-md:text-4xl"
          />
        </div>
        <div className="w-full px-8 max-md:px-4 mt-8 max-md:mt-4">
          <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-6 gap-4 w-full max-w-5xl mx-auto">
            {[
              {
                icon: Timer,
                title: "Eliminate Wasted Time",
                text: "Go from 'What's on your mind?' to data-informed clarity.",
                gridClass:
                  "md:col-start-1 md:col-end-3 md:row-start-3 md:row-end-5",
              },
              {
                icon: Lightbulb,
                title: "Unlock Deeper Insights",
                text: "Surface challenges happening between sessions.",
                gridClass:
                  "md:col-start-3 md:col-end-5 md:row-start-2 md:row-end-4",
              },
              {
                icon: Target,
                title: "Lead With Precision",
                text: "Guide the conversation when clients can't articulate needs.",
                gridClass:
                  "md:col-start-5 md:col-end-7 md:row-start-1 md:row-end-3",
              },
            ].map((c, i) => (
              <FadeRise
                key={c.title}
                delay={i * 0.12}
                className={`${c.gridClass} rounded-2xl border border-white/30 bg-gradient-to-b from-white/10 to-black/80 p-6 max-md:p-2 max-md:w-full flex flex-col justify-center items-center text-center max-md:h-auto max-md:min-h-56`}
              >
                <c.icon className="w-10 h-10 max-md:w-8 max-md:h-8 text-theme mb-4 max-md:mb-3" />
                <h3 className="text-3xl max-md:text-2xl font-semibold text-white mb-3 max-md:mb-2">
                  {c.title}
                </h3>
                <p className="text-white/70 text-sm max-md:text-xs leading-relaxed">
                  {c.text}
                </p>
              </FadeRise>
            ))}
          </div>
        </div>
      </section>
      {/* CTA CURVE */}
      <section className="relative flex flex-col md:flex-row items-center justify-start gap-16 md:pl-0 px-6 md:px-12">
        <FadeRise className="bg-white text-black rounded-2xl md:rounded-r-[300px] p-16 max-md:p-8 flex flex-col items-center justify-center relative overflow-hidden min-h-[400px] w-full max-w-5xl md:max-w-7xl">
          <h2 className="text-5xl max-md:text-4xl font-bold text-center leading-tight mb-6 max-w-3xl">
            Turn Your Expertise into a potential 5x to 10x Return
          </h2>
          <a
            href="https://calendly.com/d/cswq-pmr-xzn/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-theme to-pink-600 text-white font-semibold px-12 py-5 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all mb-8 max-md:text-center"
          >
            Book a Personalized Demo Call
          </a>
          <p className="text-base text-zinc-600 text-center max-w-lg">
            Let us show you how to multiply your revenue, not your workload.
          </p>
        </FadeRise>
        <div className="flex flex-col gap-6 w-96">
          {[
            "Instantly add high-value, data-driven programs.",
            "Confidently introduce premium revenue streams.",
          ].map((t, i) => (
            <FadeRise
              delay={0.15 + i * 0.1}
              key={i}
              className="bg-[#1a1a1a] border border-white/20 rounded-3xl px-8 py-6 relative"
            >
              <div className="absolute left-6 top-6 w-[3px] h-16 bg-theme rounded-full" />
              <p className="pl-10 text-lg leading-relaxed text-white">
                <span className="text-pink-400 font-semibold">
                  {t.split(" ")[0]}
                </span>{" "}
                {t.split(" ").slice(1).join(" ")}
              </p>
            </FadeRise>
          ))}
          <Image src="/security.png" width={400} height={400} alt="security" />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialsSection />
      <FAQ></FAQ>
      {/* RESULTS */}
      <section className="flex flex-col items-center text-center">
        <FadeRise>
          <Title
            text="Your Proven Framework + Adaptive Intelligence"
            className="text-5xl max-md:text-4xl"
          />
        </FadeRise>
        <FadeRise delay={0.1}>
          <Title
            text="= Unstoppable Results"
            className="text-theme text-5xl max-md:text-4xl"
          />
        </FadeRise>
        <FadeRise className="flex justify-center items-center" delay={0.2}>
          <img
            className="w-2/3 max-md:w-full mt-16 max-md:mt-8 -translate-x-16 max-md:-translate-x-0"
            src="/hero.png"
            alt="result"
          />
        </FadeRise>
      </section>

      {/* POSITIONING */}

      <section className="flex flex-col items-center space-y-10 max-md:space-y-6">
        <FadeRise>
          <div className="max-w-7xl text-2xl max-md:text-lg text-center">
            You're here to create lasting change. Transformation happens between
            sessions. To guide that journey you need visibility—an adaptive,
            intelligent layer over your framework.
          </div>
        </FadeRise>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-md:gap-4 max-w-6xl w-full px-8 max-md:px-4 mt-12 max-md:mt-6">
          {[
            {
              icon: Activity,
              title: "Evidence-Based",
              body: "Real-time insight into physiology & mindset.",
            },
            {
              icon: Cog,
              title: "Systematized",
              body: "Behavioral change engine supports follow-through.",
            },
            {
              icon: Heart,
              title: "Deeply Human",
              body: "Frees you to focus on irreplaceable transformation.",
            },
          ].map((c, i) => (
            <FadeRise
              key={c.title}
              delay={i * 0.12}
              className="bg-gradient-to-b from-zinc-900 to-black rounded-3xl p-8 max-md:p-3 max-md:h-auto max-md:min-h-56 border border-white/20 space-y-4 max-md:space-y-3"
            >
              <div className="w-12 h-12 bg-theme/20 rounded-lg flex items-center justify-center">
                <c.icon className="w-6 h-6 text-theme" />
              </div>
              <h3 className="text-3xl max-md:text-2xl font-semibold">
                {c.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">{c.body}</p>
            </FadeRise>
          ))}
        </div>
        <FadeRise delay={0.4}>
          <div className="max-w-4xl text-2xl max-md:text-lg text-center">
            Not replacing your method—amplifying it. Adaptive, precise,
            profoundly effective.
          </div>
        </FadeRise>
        <FadeRise delay={0.5}>
          <CTA />
        </FadeRise>
        <FadeRise delay={0.6}>
          <div className="text-xl max-md:text-lg text-center">
            Multiply impact without multiplying hours. <br />
            Take a peek into the <span className="text-theme">FUTURE</span>
          </div>
        </FadeRise>
      </section>

      {/* NEWSLETTER */}
      <Newsletter></Newsletter>
    </main>
  );
}
