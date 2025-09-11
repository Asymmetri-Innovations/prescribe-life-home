"use client";
import Explain from "@/components/Explain";
import FAQ from "@/components/FAQ";
import { MagicCard } from "@/components/MagicCard";
import { Marquee } from "@/components/Marquee";
import { NumberTicker } from "@/components/NumberTicker";
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

// Mild, performant animation helper
const baseMotion = {
  initial: { y: 18, filter: "blur(2px)", opacity: 0 },
  whileInView: { y: 0, filter: "blur(0px)", opacity: 1 },
  viewport: { once: true, amount: 0.35 },
};
const FadeRise = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    {...baseMotion}
    transition={{ duration: 0.55, ease: "easeOut", delay }}
    className={className}
  >
    {children}
  </motion.div>
);

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
    <main className="space-y-32 relative">
      <Image
        className="w-[150vw] h-[150vh] absolute rotate-30 rotate-animation-slow scale-110 z-[-1]"
        src="/bggradient.png"
        width={300}
        height={300}
        alt="bg"
      />

      {/* HERO */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center space-y-6 pt-32 text-center"
      >
        <motion.h1
          className="text-6xl font-medium"
          initial={{ y: 30, filter: "blur(4px)", opacity: 0 }}
          animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Amplify Your <span className="text-gradient">Coaching Genius.</span>
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto"
          initial={{ y: 24, filter: "blur(4px)", opacity: 0 }}
          animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
        >
          You provide the genius. We provide the real-time data and behavioral
          analysis tools—together scaling your unique method for deeper, lasting
          client transformation.
        </motion.p>
        <motion.button
          className="bg-white/16 backdrop-blur-lg px-6 py-3 rounded-full border border-white/30 text-sm"
          initial={{ y: 20, filter: "blur(4px)", opacity: 0 }}
          animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
        >
          Request a Demo Call
        </motion.button>
        <motion.div
          initial={{ y: 32, filter: "blur(6px)", opacity: 0 }}
          animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 1, delay: 0.45 }}
        >
          <Image src="/hero.png" width={700} height={700} alt="platform" />
        </motion.div>
      </section>

      {/* TRUSTED */}
      <section className="flex flex-col items-center min-h-[50vh] space-y-10 text-center">
        <FadeRise>
          <Title text="Trusted by Performance Coaches Behind Today's Most Influential Leaders" />
        </FadeRise>
        <FadeRise delay={0.12}>
          <Image src="/security.png" width={500} height={500} alt="security" />
        </FadeRise>
      </section>

      {/* STEPS */}
      <section className="flex flex-col items-center space-y-8">
        <FadeRise>
          <Title text="Powerful Insights, Radically Simple to Use" />
        </FadeRise>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full px-4">
          {steps.map((step, i) => (
            <FadeRise key={step.id} delay={i * 0.12}>
              <MagicCard>
                <div className="h-full rounded-2xl p-8 border border-white/10 relative overflow-hidden space-y-6">
                  <div className="absolute top-6 right-6 text-6xl font-bold text-white/30 opacity-50">
                    {step.id}
                  </div>
                  <step.icon size={60} className="text-theme" />
                  <h3 className="text-2xl font-semibold text-white">
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

      <Explain />

      {/* GAP NARRATIVE */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 space-y-20">
        <div className="space-y-12">
          <FadeRise>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Are Weekly Check-ins and Client Self-Reporting Still Enough?
            </h2>
          </FadeRise>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <FadeRise delay={0.05}>
              <img
                className="rounded-xl shadow-lg ring-1 ring-white/10"
                src="/gavin.png"
                alt="coach context"
              />
            </FadeRise>
            <FadeRise delay={0.12}>
              <div className="space-y-5 text-sm md:text-base leading-relaxed">
                <h3 className="text-theme font-semibold text-lg">
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
            <div className="space-y-6">
              <h3 className="text-lg md:text-xl font-semibold">
                <span className="text-theme/80">PrescribeLife.ai</span> closes
                that gap.
              </h3>
              <p className="text-zinc-300 max-w-md">
                We surface real-time, objective data on resilience, recovery,
                and behavior patterns—fuel for your intuition to drive lasting
                change.
              </p>
              <button className="relative group bg-gradient-to-r from-theme to-pink-600 text-white font-medium px-8 py-3 rounded-full shadow-lg hover:shadow-theme/30 transition-all">
                <span className="relative z-10">Request a Demo Call</span>
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-white/10" />
              </button>
            </div>
          </FadeRise>
          <FadeRise delay={0.1}>
            <div className="rounded-xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-black p-6 md:p-8 ring-1 ring-white/10 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.18),transparent_65%)]" />
              <div className="space-y-6 relative z-10">
                <img
                  src="/second.png"
                  alt="fusion"
                  className="rounded-lg ring-1 ring-white/10"
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
      <section className="relative mx-auto max-w-7xl px-6 md:px-12 py-32 rounded-[48px] bg-gradient-to-b from-white via-pink-50/70 to-pink-200/40 dark:from-white/10 dark:via-white/5 dark:to-pink-500/10 border border-white/20 shadow-[0_8px_40px_-12px_rgba(236,72,153,0.25)] overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -left-32 w-[420px] h-[420px] bg-gradient-to-br from-theme/30 to-pink-500/30 blur-3xl opacity-40" />
        <div className="pointer-events-none absolute bottom-0 -right-20 w-[360px] h-[360px] bg-gradient-to-br from-pink-400/40 to-blue-400/40 blur-3xl opacity-40" />
        <div className="relative space-y-10 text-center max-w-3xl mx-auto">
          <FadeRise>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Amplify Your Human Touch with Evidence‑Based AI Insights and
              Signals
            </h2>
          </FadeRise>
          <FadeRise delay={0.1}>
            <p className="text-zinc-600 dark:text-zinc-300 text-lg md:text-xl leading-relaxed">
              The platform provides a window into your client’s world, revealing
              the invisible patterns of stress, recovery and behavioral change.
            </p>
          </FadeRise>
        </div>
        <div className="relative mt-24 grid md:grid-cols-2 gap-24 items-start">
          <FadeRise className="space-y-10" delay={0.15}>
            <h3 className="text-xl md:text-2xl font-semibold">
              Without Prescribelife.ai
            </h3>
            <div className="flex flex-col items-center gap-10">
              {/* <img
                src="/without-prescribe.png"
                alt="Limited insight rings"
                className="w-72 md:w-96"
              /> */}
              <ul className="space-y-5 text-sm md:text-base font-medium text-zinc-700 dark:text-zinc-300 max-w-xs">
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
          <FadeRise className="space-y-10" delay={0.25}>
            <h3 className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-theme to-pink-600">
              With Prescribelife.ai
            </h3>
            <div className="flex flex-col items-center gap-10">
              {/* <img
                src="/with.png"
                alt="Expanded multi-layer insight spiral"
                className="w-72 md:w-80"
              /> */}
              <ul className="space-y-4 text-xs md:text-sm font-medium text-zinc-700 dark:text-zinc-200 max-w-sm tracking-tight">
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
                    <span className="absolute left-0 top-2 w-4 h-[2px] bg-gradient-to-r from-theme via-pink-500 to-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeRise>
        </div>
        <FadeRise delay={0.4} className="flex justify-center mt-24">
          <button className="group relative px-10 md:px-14 py-4 text-base md:text-lg font-semibold rounded-full overflow-hidden">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-theme to-pink-600 opacity-90 group-hover:opacity-100 transition-opacity" />
            <span className="absolute inset-0 rounded-full ring-2 ring-white/60 group-hover:ring-white/90 transition-all" />
            <span className="relative z-10">Request a Demo Call</span>
          </button>
        </FadeRise>
      </section>

      {/* PHONE / DASHBOARD */}
      <section className="space-y-6 flex flex-col items-center relative">
        <FadeRise>
          <Title text="Your Impact is Capped by Your Calendar. Until Now." />
        </FadeRise>
        <FadeRise delay={0.1}>
          <div>Next Generation Performance Coaching Dashboard</div>
        </FadeRise>
        <div className="flex gap-6">
          {["/phone1.png", "/phone2.png", "/phone3.png"].map((p, i) => (
            <FadeRise delay={0.15 + i * 0.1} key={p}>
              <img
                className={
                  i === 0
                    ? "w-64 translate-x-8"
                    : i === 2
                    ? "w-64 -translate-x-8"
                    : "w-64"
                }
                src={p}
                alt={p}
              />
            </FadeRise>
          ))}
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto px-6">
        <FadeRise className="w-full flex justify-end">
          <div className="rounded-3xl p-8 border-2 border-white/20 relative overflow-hidden max-w-lg">
            <img
              className="absolute top-0 right-0 w-40"
              src="/carddesgn.png"
              alt="decor"
            />
            <div className="relative z-10 space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">Before</h2>
                <p className="text-4xl text-zinc-400">
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
                "You stitch together spreadsheets & notes",
              ].map((t, i) => (
                <div className="flex items-center gap-3" key={i}>
                  <div className="w-1 h-10 bg-theme rounded-full" />
                  <p className="text-white leading-relaxed">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeRise>
        <FadeRise className="h-full" delay={0.15}>
          <div className="bg-gradient-to-b from-white/15 to-white/20 rounded-3xl p-8 border-2 border-white/20 relative overflow-hidden max-w-lg h-full">
            <img
              className="absolute bottom-0 right-0 w-40"
              src="/carddesign2.png"
              alt="decor2"
            />
            <div className="relative z-10 space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">After</h2>
                <p className="text-4xl text-zinc-400">
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
                <div className="flex items-center gap-3" key={i}>
                  <div className="w-1 h-10 bg-theme rounded-full" />
                  <p className="text-white leading-relaxed">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeRise>
      </section>

      {/* METRICS */}
      <section className="flex flex-col items-center gap-16">
        <FadeRise>
          <Title text="Powered By" />
        </FadeRise>
        <div className="flex flex-col md:flex-row justify-center items-stretch w-full max-w-6xl divide-y md:divide-y-0 md:divide-x divide-white/20">
          {[
            { v: 8, label: "Days of real-world behavioral data", suffix: "+" },
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
              className="flex-1 flex flex-col items-center py-6 px-4 gap-4"
            >
              <div className="text-6xl font-semibold">
                <NumberTicker value={m.v} />
                {m.suffix}
              </div>
              <p className="text-white/60 text-center max-w-xs">{m.label}</p>
            </FadeRise>
          ))}
        </div>
      </section>

      {/* SIMPLE MARQUEE (placeholder) */}
      <section>
        <FadeRise>
          <Marquee className="[--duration:20s]">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="bg-gradient-to-r from-white/15 to-white/20 w-64 p-7 rounded-xl border-2 border-white/20 flex flex-col items-center gap-3 mx-2"
              >
                <div className="w-16 h-16 rounded-full bg-white" />
                <div>Name</div>
              </div>
            ))}
          </Marquee>
        </FadeRise>
      </section>

      {/* COMPARISON CARDS (Problem / Solution) */}
      <section className="flex flex-col items-center">
        <FadeRise>
          <Title text="Your Next Coaching Session Could Be Your Best Ever." />
        </FadeRise>
        <FadeRise delay={0.1}>
          <Title text="Here's How" className="text-theme mb-16" />
        </FadeRise>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full px-4 mb-16">
          <FadeRise className="h-full">
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 rounded-3xl p-8 border border-red-500/20 backdrop-blur-sm h-full space-y-6">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center">
                  <MessageCircleQuestion className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white">
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
                      ? "text-xl font-medium text-red-400 bg-red-500/10 p-4 rounded-xl border border-red-500/20"
                      : "text-lg text-zinc-300 leading-relaxed"
                  }
                >
                  {t}
                </p>
              ))}
            </div>
          </FadeRise>
          <FadeRise delay={0.15}>
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-800/20 rounded-3xl p-8 border border-green-500/20 backdrop-blur-sm space-y-6">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  The PrescribeLife Way
                </h3>
              </div>
              <p className="text-white leading-relaxed text-lg">
                Before your next call you open your dashboard.
              </p>
              <p className="text-white leading-relaxed text-lg">
                You instantly see readiness dips and disrupted patterns.
              </p>
              <p className="text-white leading-relaxed text-lg">
                Contextual notes surfaced by AI reveal cognitive themes.
              </p>
              <p className="text-xl font-medium text-green-400 bg-green-500/10 p-4 rounded-xl border border-green-500/20">
                “Let’s go straight into the pattern that showed up.”
              </p>
              <p className="text-white leading-relaxed text-lg">
                You bypass fog and create decisive movement.
              </p>
            </div>
          </FadeRise>
        </div>
      </section>

      {/* ONBOARD BENEFITS */}
      <section className="flex flex-col items-center">
        <div className="flex w-full px-16 justify-start">
          <Title text="In Your First 10-14 Days, You Will" />
        </div>
        <div className="w-full px-4 md:px-16 mt-8">
          <div className="flex flex-col md:flex-row gap-6 w-full">
            {[
              {
                icon: Timer,
                title: "Eliminate Wasted Time",
                text: "Go from ‘What’s on your mind?’ to data-informed clarity.",
              },
              {
                icon: Lightbulb,
                title: "Unlock Deeper Insights",
                text: "Surface challenges happening between sessions.",
              },
              {
                icon: Target,
                title: "Lead With Precision",
                text: "Guide the conversation when clients can’t articulate needs.",
              },
            ].map((c, i) => (
              <FadeRise
                key={c.title}
                delay={i * 0.12}
                className="flex-1 rounded-2xl border border-white/30 bg-gradient-to-b from-white/10 to-black/80 p-8"
              >
                <c.icon className="w-12 h-12 text-theme mb-6" />
                <h3 className="text-white font-semibold text-xl mb-4">
                  {c.title}
                </h3>
                <p className="text-white/70 leading-relaxed">{c.text}</p>
              </FadeRise>
            ))}
          </div>
        </div>
      </section>

      {/* CTA CURVE */}
      <section className="relative flex flex-col md:flex-row items-center justify-start gap-16 md:pl-0 px-6 md:px-12">
        <FadeRise className="bg-white text-black rounded-none md:rounded-r-[300px] p-16 flex flex-col items-center justify-center relative overflow-hidden min-h-[400px] max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center leading-tight mb-6 max-w-2xl">
            Turn Your Expertise into a 5x to 10x Return
          </h2>
          <button className="bg-gradient-to-r from-theme to-pink-600 text-white font-semibold px-12 py-5 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all mb-8">
            Book a Personalized Demo Call
          </button>
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
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="flex flex-col items-center gap-10">
        <FadeRise>
          <div className="text-3xl text-center">
            What Other <span className="text-theme">Coaches</span> Are Saying
          </div>
        </FadeRise>
        <Marquee pauseOnHover className="[--duration:20s]">
          {Array.from({ length: 6 }).map((_, i) => (
            <FadeRise key={i} delay={i * 0.05} className="mx-4">
              <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 w-96 p-6 rounded-2xl border border-white/10 flex flex-col gap-4">
                <p className="text-white text-base leading-relaxed">
                  “This platform transformed how I work with clients—objective
                  insight = better breakthroughs.”
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src="/pfp.png"
                      alt="coach"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">
                      Morgan Lobb
                    </h4>
                    <p className="text-zinc-400 text-xs">Executive Coach</p>
                  </div>
                </div>
              </div>
            </FadeRise>
          ))}
        </Marquee>
        {/* <FadeRise delay={0.1}>
        </FadeRise> */}
        <FadeRise delay={0.25}>
          <div>
            Let us show you how to multiply your revenue, not your workload.
          </div>
        </FadeRise>
      </section>
      <FAQ></FAQ>
      {/* RESULTS */}
      <section className="flex flex-col items-center text-center">
        <FadeRise>
          <Title
            text="Your Proven Framework + Adaptive Intelligence"
            className="text-5xl"
          />
        </FadeRise>
        <FadeRise delay={0.1}>
          <Title text="= Unstoppable Results" className="text-theme text-5xl" />
        </FadeRise>
        <FadeRise className="flex justify-center items-center" delay={0.2}>
          <img
            className="w-2/3 mt-16 -translate-x-16"
            src="/result.png"
            alt="result"
          />
        </FadeRise>
      </section>

      {/* POSITIONING */}
      <section className="flex flex-col items-center space-y-10">
        <FadeRise>
          <div className="max-w-7xl text-2xl text-center">
            You're here to create lasting change. Transformation happens between
            sessions. To guide that journey you need visibility—an adaptive,
            intelligent layer over your framework.
          </div>
        </FadeRise>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full px-4 mt-12">
          {[
            {
              title: "Evidence-Based",
              body: "Real-time insight into physiology & mindset.",
            },
            {
              title: "Systematized",
              body: "Behavioral change engine supports follow-through.",
            },
            {
              title: "Deeply Human",
              body: "Frees you to focus on irreplaceable transformation.",
            },
          ].map((c, i) => (
            <FadeRise
              key={c.title}
              delay={i * 0.12}
              className="bg-gradient-to-b from-zinc-900 to-black rounded-3xl p-8 border border-white/20 space-y-4"
            >
              <div className="w-12 h-12 bg-zinc-600 rounded-lg" />
              <h3 className="text-white text-2xl font-semibold">{c.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{c.body}</p>
            </FadeRise>
          ))}
        </div>
        <FadeRise delay={0.4}>
          <div className="max-w-4xl text-2xl text-center">
            Not replacing your method—amplifying it. Adaptive, precise,
            profoundly effective.
          </div>
        </FadeRise>
        <FadeRise delay={0.5}>
          <button className="bg-theme text-white px-8 py-4 rounded-full border-4 border-white text-xl">
            Book a Personalized Demo Call
          </button>
        </FadeRise>
        <FadeRise delay={0.6}>
          <div className="text-xl text-center">
            Multiply impact without multiplying hours. <br />
            Take a peek into the <span className="text-theme">FUTURE</span>
          </div>
        </FadeRise>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-gradient-to-br from-pink-300 to-theme rounded-3xl p-12 mx-4 md:mx-16 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeRise>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
                  The Future of Performance Coaching, Delivered Weekly
                </h2>
                <p className="text-black/80 text-lg leading-relaxed">
                  Join elite coaches. Get insight, strategy, and data-driven
                  breakthroughs in your inbox.
                </p>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-black font-medium text-sm">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="What should we call you..."
                    className="w-full p-4 rounded-xl bg-white/90 text-black placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-black/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-black font-medium text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your best email"
                    className="w-full p-4 rounded-xl bg-white/90 text-black placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-black/20"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="newsletter-consent"
                    className="w-4 h-4 rounded border-2 border-black/30"
                  />
                  <label
                    htmlFor="newsletter-consent"
                    className="text-black text-sm"
                  >
                    I agree to receive updates and promotions from
                    prescribelife.ai
                  </label>
                </div>
                <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-zinc-800 transition-colors">
                  Sign Up for the Newsletter
                </button>
              </div>
            </div>
          </FadeRise>
          <FadeRise delay={0.15}>
            <div className="bg-zinc-800 rounded-3xl h-80 md:h-96" />
          </FadeRise>
        </div>
      </section>
      <section></section>
    </main>
  );
}

function Title({ text, className = "" }: { text: string; className?: string }) {
  return <div className={`text-3xl font-medium ${className}`}>{text}</div>;
}
