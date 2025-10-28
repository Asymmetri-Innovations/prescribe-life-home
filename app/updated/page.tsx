"use client";
import { motion } from "motion/react";
import CTA from "@/components/CTA";
import Image from "next/image";
import React from "react";
import { GlassmorphicCard } from "@/components/Glowcard";
import { Crown, Dna, Eye, Sparkle, User } from "lucide-react";
import { MagicCard } from "@/components/MagicCard";
import { FadeRise } from "@/components/FadeRise";
import { TestimonialsCarousel } from "@/components/CoachCarousel";
import { Title } from "@/components/Title";
import { NumberTicker } from "@/components/NumberTicker";
import { Marquee } from "@/components/Marquee";
import TestimonialsSection from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ImpactGrid from "@/components/ImpactGrid";
import HolisticGrid from "@/components/ImpactGrid";

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
const steps2 = [
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

export default function UpdatedHome() {
  return (
    <section className="mx-12 flex flex-col gap-32 max-md:gap-24">
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
      <section className="flex flex-col gap-16 mx-20 max-md:mx-10">
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
              {/* <GlowCard className="min-h-[100px] flex justify-center items-center max-w-2xl">
                <p>
                  <span className="text-pink-400 font-semibold">
                    PrescribeLife.AI
                  </span>{" "}
                  was built to help you meet this urgent need head-on.
                </p>
              </GlowCard> */}
              <GlassmorphicCard
                title="PrescribeLife.AI"
                secondaryLine="was built to help you meet this urgent need head-on"
                titleCn="max-w-4xl"
              />
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

      <section>
        <HolisticGrid />
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
        <div className="text-5xl text-center font-semibold">
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
              {/* <GlowCard>
                Build awareness <br />
                Self-Assess Resillience Drivers
              </GlowCard> */}
              <GlassmorphicCard
                title="Build awareness"
                secondaryLine=" Self-Assess Resillience Drivers"
              ></GlassmorphicCard>{" "}
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
              <GlassmorphicCard
                title="Commit to action"
                secondaryLine="track & unblock follow through"
              />
            </div>
          </div>
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
              {/* <GlowCard>
                Build awareness <br />
                Self-Assess Resillience Drivers
              </GlowCard> */}
              <GlassmorphicCard
                title="Stay Engaged"
                secondaryLine={
                  <>
                    Share reflections <br /> & get personalized performance tips
                  </>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Biometric Insights */}
      <section className="flex flex-col items-center justify-start gap-10">
        <div className="text-5xl max-w-7xl text-center font-semibold">
          Mobile App captures{" "}
          <span className="text-theme">
            Biometric Insights & Key Resilience &nbsp;
          </span>
          Indicators
        </div>
        <div className=" flex  items-center justify-center  max-md:flex-col">
          <section className="max-w-5xl flex flex-col gap-16 text-xl max-md:items-center max-md:mb-5">
            <div>
              Resilience coaching that adapts in real time to evolving client
              needs, powered by behavioral science and biometric
              precision—because burnout should not be the cost of performance.
            </div>
            <div>
              No extra hardware needed — integrates with major wearables
            </div>
            <CTA classname="max-w-60 text-base" />
          </section>
          <div>
            <img
              src={"/biometric-insight.png"}
              className="h-auto w-auto max-w-[250px]"
              alt="phone"
            />
          </div>
        </div>
      </section>

      {/* Your coaching portal */}
      <section>
        <div className="container mx-auto px-8 py-16">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="text-theme"> Your </span>
              <span>Coaching Portal</span>
            </h1>
            <p className="text-2xl md:text-3xl font-light">
              A 360° view of every client's resilience and communication in one
              place.
            </p>
          </div>

          {/* Content Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left side - Text content */}
            <div className="space-y-8">
              <div>
                <p className="text-lg md:text-xl leading-relaxed">
                  AI-powered insights help you spark deeper coaching
                  conversations.
                </p>
              </div>

              <div>
                <p className="text-lg md:text-xl leading-relaxed">
                  Send client updates, assignments, and messages directly inside
                  the portal.
                </p>
              </div>
            </div>

            {/* Right side - Dashboard mockup */}
            <div className="relative">
              <img
                src="/result.png"
                alt="Coaching Portal Dashboard"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <GlassmorphicCard
          title="Walk into every session with real-time insights on your client’s
          goals, habitual insights, and biometric data."
          titleCn="max-w-9xl"
        />
      </section>

      <section className="flex flex-col gap-20">
        <div className="flex items-center justify-center">
          <div className="text-center text-5xl font-semibold max-w-5xl">
            <span className="text-theme">PrescribeLife.AI </span>
            simple to set up for 1-1, group or team coaching.
          </div>
        </div>
        <TestimonialsCarousel />
        <div className="flex items-center justify-center w-full ">
          <CTA classname="max-w-60 " />
        </div>
      </section>

      {/* Powerful Insights */}

      <section className="flex flex-col items-center space-y-8 max-md:space-y-4">
        <FadeRise>
          <Title
            text="Powerful Insights, Radically Simple to Use"
            className="text-5xl max-md:text-3xl mx-5 text-center"
          />
        </FadeRise>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full px-6 max-md:px-4">
          {steps2.map((step, i) => (
            <FadeRise key={step.id} delay={i * 0.12}>
              <MagicCard>
                <div className="h-[400px] rounded-2xl p-8 border border-white/10 relative overflow-hidden space-y-6 max-md:space-y-4">
                  <div className="absolute top-6 right-6 text-6xl max-md:text-4xl font-bold text-white/30 opacity-50">
                    {step.id}
                  </div>
                  <step.icon size={60} className="text-theme" />
                  <h3 className="text-[20px] max-md:text-2xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-base max-md:text-sm inter">
                    {step.description}
                  </p>
                  <p className="text-base max-md:text-sm font-medium inter">
                    {step.subtitle}
                  </p>
                </div>
              </MagicCard>
            </FadeRise>
          ))}
        </div>
      </section>

      {/* Build on 8M+/ metrics section */}
      <section className="flex flex-col items-center gap-16 max-md:gap-8">
        <FadeRise>
          <div className="max-w-5xl space-y-10">
            <div className="text-5xl text-center">
              Built on <span className="text-theme"> 8M+ </span>
              days of behavioral data and
              <span className="text-theme"> 50K+ </span>
              validated assessment models.
            </div>
            <div className="text-xl text-center">
              We combine behavioral science and biometric data to measure what
              truly drives resilience and performance — powered by trusted
              integrations like Garmin, Apple Health, Google Fit, and more.
            </div>
            <h1 className="text-3xl font-semibold text-center">Powered by</h1>
          </div>
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
              <p className="text-white/60 text-center max-w-xs text-base max-md:text-sm inter">
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

      <div className="flex items-center justify-center">
        <div className="text-center text-5xl font-semibold max-w-6xl">
          Meet the rising demand for{" "}
          <span className="text-theme">resilience-focused</span> coaching and
          expand your impact.
        </div>
      </div>

      {/* CTA CUrve */}
      <section className="relative flex flex-col md:flex-row items-start md:items-center justify-start gap-8 max-md:gap-6 px-6 md:px-12">
        {/* White Curve Card */}
        <FadeRise className="bg-white text-black rounded-2xl md:rounded-r-[300px] p-12 max-md:p-6 flex flex-col items-center justify-center relative overflow-hidden min-h-[400px] max-md:min-h-[300px] w-full md:w-[65%] lg:w-[60%] xl:w-[55%] max-md:translate-x-0 -translate-x-8 md:-translate-x-16">
          <h2 className="text-5xl max-md:text-3xl font-semibold text-center leading-tight mb-6 max-w-3xl">
            Amplify your Impact & Grow Your Practice.
          </h2>
          <a
            href="/booking"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-theme to-pink-600 text-white font-semibold px-12 py-5 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all mb-8 max-md:text-center"
          >
            Book a Personalized Demo Call
          </a>
          <p className="text-base text-zinc-600 text-center max-w-lg inter">
            Projected potential ROI of 5x to 10x minimum
          </p>
        </FadeRise>

        {/* Right-side column */}
        <div className="flex flex-col gap-4 max-md:gap-3 w-full md:w-[35%] lg:w-[40%] xl:w-[45%] items-start max-md:items-center">
          {[
            "Instantly add high-value, data-driven programs.",
            "Confidently introduce premium revenue streams.",
          ].map((t, i) => (
            <FadeRise
              delay={0.15 + i * 0.1}
              key={i}
              className="bg-[#1a1a1a] border border-white/20 rounded-3xl px-6 max-md:px-4 py-4 max-md:py-3 relative w-full max-w-[360px] md:max-w-[400px] lg:max-w-[440px] transition-all"
            >
              <p className="pl-10 text-lg max-md:text-base leading-relaxed text-white">
                <span className="text-pink-400 font-semibold">
                  {t.split(" ")[0]}
                </span>{" "}
                {t.split(" ").slice(1).join(" ")}
              </p>
            </FadeRise>
          ))}
          <Image
            src="/security.png"
            width={400}
            height={400}
            alt="security"
            className="mt-6"
          />
        </div>
      </section>
      <TestimonialsSection />
      <div id="faq">
        <FAQ></FAQ>
      </div>
    </section>
  );
}
