"use client";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import CTA from "@/components/CTA";
import Image from "next/image";
import React, { useRef, useState, useEffect, useMemo } from "react";
import { GlassmorphicCard, WholeTextCard } from "@/components/Glowcard";
import {
  ArrowDown,
  Brain,
  ChevronDown,
  Crown,
  Dna,
  Eye,
  Sparkle,
  User,
} from "lucide-react";
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
import HoverGlowContainer from "@/components/HoverGlowContainer";

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
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150); // Adjust delay as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const ref = useRef(null);
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 10000], ["-360deg", "360deg"]);

  // Generate random blob properties
  const blobs = useMemo(() => {
    const animations = [
      "animate",
      "animate2",
      "animate3",
      "animate4",
      "animate5",
      "animate6",
    ];
    return Array.from({ length: 0 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100 + 0}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 250 + 100,
      duration: Math.random() * 10 + 6,
      opacity: Math.random() * 0.2 + 0.1,
      animationName: animations[Math.floor(Math.random() * animations.length)],
    }));
  }, []);

  return (
    <section
      ref={ref}
      className="flex flex-col gap-20 max-md:gap-6 relative overflow-x-hidden overflow-y-hidden   max-md:px-0 "
    >
      {/* Multiple Blobs */}

      <motion.div
        style={{
          top: "3%",
          left: "50%",
          width: "50rem",
          aspectRatio: "1/1",
          animation: true
            ? `animateCore 6s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite alternate-reverse forwards`
            : "none",
        }}
        className="blob rounded-full  absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none "
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
      />

      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          style={{
            top: blob.top,
            left: blob.left,
            width: `${blob.size / 16}rem`,
            aspectRatio: "1/1",
            animation: true
              ? `${blob.animationName} ${blob.duration}s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite alternate-reverse forwards`
              : "none",
          }}
          className="blob absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: blob.opacity }}
          transition={{ duration: 2 }}
        />
      ))}

      {/* Hero Section */}
      <section
        id="hero"
        className="flex flex-col pt-8 sm:pt-12 md:pt-16 lg:pt-6 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-10 max-w-[90rem] mx-auto w-full relative  min-h-screen "
      >
        {/* Concentric Ripple Circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden z-0 opacity-60 md:opacity-100">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <div
              key={index}
              className="ripple-circle"
              style={{
                width: `${200 + index * 80}px`,
                height: `${200 + index * 80}px`,
                top: "50%",
                left: "50%",
                // animationDelay: `${index * 0.8}s`,
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ y: 32, filter: "blur(6px)", opacity: 0 }}
          animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="w-full flex justify-center items-center relative z-10 flex-1 max-md:flex-col max-md:gap-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 w-full">
            {/* Left Text */}
            <div className="flex w-full md:w-1/2 flex-col md:items-start gap-5 sm:gap-6 md:gap-7 md:text-left text-center items-center order-1 md:order-1 ">
              <motion.h1
                className="font-semibold text-[2rem]  md:text-4xl lg:text-5xl xl:text-6xl md:leading-tight lg:leading-tight whitespace-nowrap"
                initial={{ y: 30, filter: "blur(4px)", opacity: 0 }}
                animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <span className="max-md:text-[1.5rem]">
                  Set the new standard in
                </span>
                <br className="" />
                <span className="text-gradient capitalize">
                  performance coaching
                </span>
              </motion.h1>

              <motion.p
                className="inter text-[0.9rem] leading-relaxed sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl md:max-w-full"
                initial={{ y: 24, filter: "blur(4px)", opacity: 0 }}
                animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
              >
                Resilience coaching that adapts in real time to evolving client
                needs, powered by behavioral science and biometric
                precision—because burnout should not be the cost of performance.
              </motion.p>

              <motion.div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center md:justify-start mt-2 max-md:hidden">
                <CTA />
              </motion.div>
            </div>

            {/* Right Image */}
            <div className="flex w-full md:w-1/2 items-center justify-center order-2 md:order-2">
              <Image
                src="/result.png"
                width={900}
                height={900}
                alt="platform"
                className="w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-none h-auto"
                sizes="(max-width: 640px) 280px, (max-width: 768px) 400px, 50vw"
                priority
              />
            </div>
          </div>
          <motion.div className="flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center md:justify-start mt-2 hidden max-md:flex">
            <CTA />
          </motion.div>
        </motion.div>
      </section>

      {/* Burnout + Thesis Section */}
      <motion.section
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-12 md:gap-16 px-4 md:px-6 lg:px-8 max-w-[90rem] mx-auto w-full"
      >
        {/* Burnout */}
        <section className="flex flex-col gap-8 md:gap-10 justify-center items-center">
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide font-semibold text-center px-4">
            <span className="text-white relative after:left-0 after:content-[] after:absolute after:bottom-0 after:w-full after:bg-theme after:h-[3px] after:rounded-lg mr-2">
              Burnout
            </span>
            <span>
              is one the most Defining <br />
              Challenges of our Time
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 text-base sm:text-lg md:text-xl lg:text-2xl align-start gap-4 md:gap-6 font-semibold w-full">
            <div className="flex tracking-wide justify-center md:justify-start items-center text-center md:text-left border-1 border-white/50 px-6 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 md:py-10 rounded-3xl">
              <div className="space-y-6 sm:space-y-8 md:space-y-10">
                <p className="">
                  <span className="text-theme">
                    85% of coaches <br />
                  </span>{" "}
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal mt-2">
                    say clients are seeking more support for well-being.
                  </p>
                </p>
                <p>
                  <span className="text-theme">
                    80% of professionals <br />
                  </span>{" "}
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal mt-2">
                    are at risk of burnout.
                  </p>
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center border-1 border-white/50 rounded-3xl bg-gradient-to-b from-black to-theme/50">
              <div className="p-8 sm:p-12 md:p-16 space-y-4 md:space-y-6">
                <div className="text-center text-lg sm:text-xl md:text-2xl">
                  PrescribeLife.AI
                </div>
                <div className="text-center text-sm sm:text-base">
                  was built to help you meet this urgent need head-on
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Thesis */}
        <section className="flex flex-col gap-8 md:gap-10 px-4">
          <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl tracking-wide font-semibold text-center">
            Our Founding&nbsp;
            <span className="text-white relative after:left-0 after:content-[] after:absolute after:bottom-0 after:w-full after:bg-theme after:h-[3px] after:rounded-lg">
              Thesis
            </span>
          </h1>

          <div className="flex justify-center items-center w-full">
            <div className="flex tracking-wide justify-center md:justify-center items-center text-center">
              <p className="w-full text-sm sm:text-base md:text-lg max-w-[95%] md:max-w-full">
                Built by a team of doctors, neuroscientists, and ICF-accredited
                <br className="hidden md:block" />
                resilience coaches, we believe the future of coaching is
                adaptive,
                <br className="hidden md:block" />
                personalized, and always-on.
              </p>
            </div>
          </div>
          <div className="flex justify-center md:justify-center items-center">
            <span className="border-1 border-white px-4 sm:px-6 py-2 rounded-3xl tracking-wide text-xs sm:text-sm md:text-base">
              Here's what we mean
            </span>
          </div>
        </section>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="px-4 md:px-6 lg:px-8 max-w-[90rem] mx-auto w-full"
      >
        <HolisticGrid />
      </motion.section>

      {/* 360 View */}
      <motion.section
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 px-4 md:px-6 lg:px-8 max-w-[90rem] mx-auto w-full"
      >
        <div className="flex flex-col gap-4 md:gap-6 justify-center text-center md:text-left items-center md:items-start px-2">
          <h1 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-4xl tracking-wide leading-tight">
            The{" "}
            <span className="text-white relative after:left-0 after:content-[] after:absolute after:bottom-0 after:w-full after:bg-theme after:h-[3px] after:rounded-lg">
              PrescribeLife.AI
            </span>
            <br />
            Platform
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl tracking-wide max-w-[95%] md:max-w-full">
            Resilience coaching that adapts in real time to evolving
            <br className="hidden md:block" />
            client needs, powered by{" "}
            <span className="text-theme">
              behavioral science and
              <br className="hidden md:block" /> biometric precision,&nbsp;
            </span>
            because burnout should not be the
            <br className="hidden md:block" /> cost of performance.
          </p>
        </div>
        <div className="flex justify-center md:justify-between items-center">
          <Image
            src={"/360view.png"}
            height={800}
            width={800}
            alt="360View"
            className="w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-none h-auto"
            sizes="(max-width: 768px) 90vw, 50vw"
          />
        </div>
      </motion.section>

      {/* How It Works */}

      <motion.section
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-8 md:gap-12 pt-6 md:pt-10 px-4 md:px-6 lg:px-8 max-w-[90rem] mx-auto w-full"
      >
        <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl tracking-wide text-center font-semibold px-2">
          How <span className="text-white text-gradient">PrescribeLife.AI</span>{" "}
          Works
        </div>

        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-full items-stretch">
            {steps.map((step, i) => (
              <FadeRise key={step.id} delay={i * 0.1}>
                <HoverGlowContainer className="rounded-2xl h-full flex flex-col">
                  <div className="">
                    <div className="flex justify-between items-start mb-4">
                      {step.image ? (
                        <Image
                          src={step.image}
                          alt={step.title}
                          width={56}
                          height={56}
                          className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
                        />
                      ) : step.icon ? (
                        React.createElement(step.icon, {
                          size:
                            typeof window !== "undefined" &&
                            window.innerWidth < 640
                              ? 40
                              : 56,
                          className: "text-theme flex-shrink-0",
                        })
                      ) : null}
                      <div className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white/30">
                        {step.id}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">
                        {step.title}
                      </h3>
                      <p className="text-zinc-300 text-xs sm:text-sm md:text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </HoverGlowContainer>
              </FadeRise>
            ))}
          </div>
        </div>

        <div className="flex gap-6 md:gap-8 lg:gap-12 h-full items-stretch max-md:flex-col">
          <FadeRise delay={0.2} className="w-full md:w-1/2">
            <HoverGlowContainer className="h-full rounded-2xl flex flex-col p-4 sm:p-6 md:p-8 shadow-lg">
              <div className="h-full">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" />
                <div className="flex justify-between items-start mb-4 md:mb-6 relative z-10">
                  <Sparkle
                    size={
                      typeof window !== "undefined" && window.innerWidth < 640
                        ? 40
                        : 56
                    }
                    className="text-theme flex-shrink-0"
                  />
                  <div className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white/30">
                    03
                  </div>
                </div>

                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-4 md:mb-6 relative z-10">
                  24/7 Adaptive Coaching Support (Preslie.AI™)
                </h3>

                <div className="bg-[#FFFFFF1A] border border-white/10 rounded-xl p-4 sm:p-6 mb-4 md:mb-6 relative z-10">
                  <h4 className="text-theme font-semibold mb-2 md:mb-3 text-sm sm:text-base md:text-lg">
                    Who is Preslie.AI™?
                  </h4>
                  <p className="text-zinc-300 text-xs sm:text-sm md:text-base leading-relaxed">
                    Preslie™ is our mobile app & your AI co-pilot—making complex
                    data simple and actionable. It quietly tracks resilience
                    patterns, flags early warning signs, and suggests
                    micro-strategies between sessions.
                  </p>
                </div>

                <p className="text-white font-medium mb-4 md:mb-6 leading-relaxed relative z-10 text-xs sm:text-sm md:text-base">
                  This evidence-based system gives you continuous visibility
                  into a client's mental, physical, and emotional resilience
                  profile.
                </p>
              </div>
            </HoverGlowContainer>
          </FadeRise>

          <div className="space-y-3 md:space-y-4 lg:space-y-6 w-full md:w-1/2">
            <div className="text-sm sm:text-base md:text-lg px-2">
              With this clarity, you can
            </div>
            <FadeRise delay={0.2}>
              <div className="space-y-3 md:space-y-4 relative grid grid-rows-3 gap-3 md:gap-4 lg:gap-6">
                {[
                  "Spot stress and recovery patterns before they escalate.",
                  "Adapt strategies to each client's current resilience stage.",
                  "Scale personalization without adding manual workload.",
                ].map((text, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 md:gap-4 flex-col p-4 sm:p-6 md:p-8 rounded-3xl relative border-2 border-white/20 overflow-hidden h-full"
                  >
                    {[1, 2, 3, 4].map((x) => (
                      <div
                        key={x}
                        style={{
                          top: `${x * idx * 10}%`,
                          left: `${x * idx * 20}%`,
                          width: "16rem",
                          aspectRatio: "1/1",
                          // animationDuration: Math.random() * 10 + 6 + "s",
                          animation:
                            "animateCore 3s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite alternate-reverse forwards",
                        }}
                        className="sblob rounded-full  absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-10"
                      />
                    ))}

                    <div>
                      <Brain
                        size={
                          typeof window !== "undefined" &&
                          window.innerWidth < 640
                            ? 20
                            : 24
                        }
                      ></Brain>
                    </div>
                    <p className="text-zinc-300 text-xs sm:text-sm md:text-base leading-relaxed">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </FadeRise>
          </div>
        </div>
      </motion.section>

      {/* Personalized daily support */}

      <motion.section
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col space-y-8 md:space-y-10 px-4 md:px-6 lg:px-8 max-w-[90rem] mx-auto w-full relative"
      >
        <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl tracking-wide max-w-6xl mx-auto leading-tight text-center font-semibold px-2">
          <span className="text-white text-gradient">
            Personalized daily support{" "}
          </span>
          that keeps clients engaged and making progress.
        </div>
        <div className="w-full h-96 bg-gradient-to-b from-transparent via-black to-black absolute left-0 bottom-0 z-[999] max-md:hidden"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="flex flex-col relative justify-between items-center space-y-4 md:space-y-5">
            <div>
              <Image
                src={"/phone4.png"}
                height={50}
                width={250}
                alt="phone-screenshot"
                className="w-full max-w-[200px] sm:max-w-xs h-auto"
                sizes="(max-width: 768px) 70vw, 25vw"
              />
            </div>
            <div className="flex flex-col text-center min-h-24 md:min-h-36 justify-start items-center gap-3 md:gap-4 z-[9999] px-2">
              <div className="text-base sm:text-lg md:text-xl font-semibold">
                Build awareness
              </div>
              <div className="text-sm sm:text-base">
                Self-Assess Resillience Drivers
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center space-y-4 md:space-y-5">
            <div>
              <Image
                src={"/phone5.png"}
                height={50}
                width={250}
                alt="phone-screenshot"
                className="w-full max-w-[200px] sm:max-w-xs h-auto"
                sizes="(max-width: 768px) 70vw, 25vw"
              />
            </div>
            <div className="flex flex-col text-center min-h-24 md:min-h-36 justify-start items-center gap-3 md:gap-4 z-[9999] px-2">
              <div className="text-base sm:text-lg md:text-xl font-semibold">
                Commit to action
              </div>
              <div className="text-sm sm:text-base">
                Track & unblock follow through
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center space-y-4 md:space-y-5">
            <div>
              <Image
                src={"/phone4.png"}
                height={50}
                width={250}
                alt="phone-screenshot"
                className="w-full max-w-[200px] sm:max-w-xs h-auto"
                sizes="(max-width: 768px) 70vw, 25vw"
              />
            </div>
            <div className="flex flex-col text-center min-h-24 md:min-h-36 justify-start items-center gap-3 md:gap-4 z-[9999] px-2">
              <div className="text-base sm:text-lg md:text-xl font-semibold">
                Stay Engaged
              </div>
              <div className="text-sm sm:text-base">
                Share reflections & get personalized performance tips
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Biometric Insights */}
      <motion.section
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col items-center justify-start gap-8 md:gap-10 px-4 md:px-6 lg:px-8 max-w-[90rem] mx-auto w-full"
      >
        <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl tracking-wide max-w-6xl leading-tight text-center font-semibold px-2">
          Mobile App captures <br />
          <span className="relative text-gradient">Biometric Insights</span> &
          <span className="relative text-gradient">
            Key Resilience Indicators
          </span>
        </div>
        <div className="flex items-center justify-center gap-6 md:gap-8 lg:gap-10 max-md:flex-col">
          <section className="flex-1 tracking-wide flex flex-col gap-4 sm:gap-6 md:gap-10 lg:gap-16 text-sm sm:text-base md:text-lg items-center md:items-start mb-6 md:mb-0 text-center md:text-left w-full md:w-1/2">
            <div className="md:max-w-xl text-base sm:text-lg md:text-lg lg:text-xl px-2">
              No extra hardware needed-
              <br />
              <p className="relative after:left-0 after:content-[] after:absolute after:bottom-0 after:w-full after:bg-theme after:h-[3px] after:rounded-lg">
                integrates with major wearables
              </p>
            </div>
            <div className="text-xs sm:text-sm md:text-base text-white/80 px-2">
              Resilience coaching that adapts in real time to evolving client
              needs, powered by behavioral science and biometric
              precision—because burnout should not be the cost of performance.
            </div>
            <CTA classname="text-sm sm:text-base" />
          </section>
          <div className="flex justify-center md:justify-center w-full md:w-1/2 items-center overflow-hidden relative rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 border-2 border-white/40">
            <div className="z-[99] absolute left-0 top-0 w-full h-full bg-black/50 backdrop-blur-xl"></div>
            {new Array(10).fill("").map((x, idx) => (
              <div
                key={idx}
                style={{
                  left: idx * 10 + "%",
                  width: "36rem",
                  aspectRatio: "3/5",
                  // animationDuration: Math.random() * 10 + 6 + "s",
                  animation:
                    "animateCore 10s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite alternate-reverse forwards",
                }}
                className="nblob rounded-full  absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 left-0 "
              />
            ))}
            <img
              src={"/biometric-insight.png"}
              className="h-auto w-full max-w-[200px] sm:max-w-xs z-[999]"
              alt="phone"
            />
          </div>
        </div>
      </motion.section>

      {/* Your coaching portal */}
      <motion.section
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="px-4 md:px-6 lg:px-8 max-w-[90rem] mx-auto w-full"
      >
        <div className="py-12 md:py-16">
          {/* Header */}
          <div className="text-center mb-10 md:mb-12 lg:mb-20 px-2">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl tracking-wide font-bold mb-4 md:mb-6 lg:mb-8">
              <span className="text-white text-gradient"> Your </span>
              <span>Coaching Portal</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide font-medium">
              A 360° view of every client's resilience and communication in one
              place.
            </p>
          </div>

          {/* Content Section */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center px-2 md:px-4">
            {/* Left side - Text content with animated cards */}
            <div className="space-y-3 md:space-y-4 relative">
              {[
                "AI-powered insights help you spark deeper coaching conversations.",
                "Send client updates, assignments, and messages directly inside the portal.",
                "Walk into every session with real-time insights on your client's goals, habitual insights, and biometric data",
              ].map((text, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 md:gap-4 flex-col p-4 py-6 sm:p-6 sm:py-8 md:p-8 md:py-10 lg:py-12 rounded-3xl relative border-2 border-white/30 overflow-hidden"
                >
                  {[1, 2, 3, 4].map((x) => (
                    <div
                      key={x}
                      style={{
                        top: `${x * idx * 10}%`,
                        left: `${x * idx * 2 * 10}%`,
                        width: "16rem",
                        aspectRatio: "1/1",
                        animation:
                          "animateCore 3s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite alternate-reverse forwards",
                      }}
                      className="sblob rounded-full  absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-10"
                    />
                  ))}

                  <p className="text-zinc-300 text-xs sm:text-sm md:text-base leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* Right side - Dashboard mockup */}
            <div className="relative flex justify-center md:justify-start">
              <img
                src="/computer.png"
                alt="Coaching Portal Dashboard"
                className="w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-none h-auto"
              />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-12 md:gap-16 lg:gap-20 px-4 md:px-6 lg:px-8 max-w-[90rem] mx-auto w-full"
      >
        <div className="flex items-center justify-center px-2">
          <div className="text-center text-lg sm:text-xl md:text-2xl lg:text-4xl tracking-wide font-semibold max-w-5xl">
            Trusted by Performance Coaches Behind Today's{" "}
            <span className="text-white text-gradient">
              Most Influential Leaders{" "}
            </span>
          </div>
        </div>
        <TestimonialsCarousel />
        <div className="flex items-center justify-center w-full">
          <CTA classname="" />
        </div>
      </motion.section>

      {/* Powerful Insights */}

      <motion.section
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col items-center space-y-6 md:space-y-8 px-4 md:px-6 lg:px-8 max-w-[90rem] mx-auto w-full"
      >
        <div className="text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl tracking-wide font-semibold max-w-5xl px-2">
          <span className="text-white text-gradient">PrescribeLife.AI </span>
          is simple to set up for 1-1, group or team coaching.
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 md:gap-6 w-full">
          {steps2.map((step, i) => (
            <FadeRise key={step.id} delay={i * 0.12}>
              {i !== 0 && (
                <ChevronDown
                  className="absolute left-1/2 -translate-x-1/2 -top-6 md:-top-8"
                  size={
                    typeof window !== "undefined" && window.innerWidth < 640
                      ? 32
                      : 40
                  }
                ></ChevronDown>
              )}
              <HoverGlowContainer className="rounded-2xl p-4 sm:p-6 md:p-8 border relative overflow-hidden space-y-3 sm:space-y-4 md:space-y-6">
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white/30 opacity-50">
                  {step.id}
                </div>
                <step.icon
                  size={
                    typeof window !== "undefined"
                      ? window.innerWidth < 640
                        ? 40
                        : window.innerWidth < 768
                        ? 50
                        : 60
                      : 60
                  }
                  className="text-theme"
                />
                <h3 className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg tracking-wide inter">
                  {step.description}
                </p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg tracking-wide font-medium inter">
                  {step.subtitle}
                </p>
              </HoverGlowContainer>
            </FadeRise>
          ))}
        </div>
      </motion.section>

      {/* Build on 8M+/ metrics section */}
      <motion.section
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col items-center gap-10 md:gap-12 lg:gap-16 px-4 md:px-6 lg:px-8 max-w-[90rem] mx-auto w-full"
      >
        <FadeRise>
          <div className="max-w-5xl space-y-6 md:space-y-8 lg:space-y-10 px-2">
            <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl tracking-wide text-center leading-tight">
              Built on <span className="text-white text-gradient"> 8M+ </span>
              days of behavioral data and
              <span className="text-white relative after:left-0 after:content-[] after:absolute after:bottom-0 after:w-full after:bg-theme after:h-[3px] after:rounded-lg">
                {" "}
                50K+{" "}
              </span>
              validated assessment models.
            </div>
            <div className="text-sm sm:text-base md:text-lg tracking-wide text-center">
              We combine behavioral science and biometric data to measure what
              truly drives resilience and performance — powered by trusted
              integrations like Garmin, Apple Health, Google Fit, and more.
            </div>
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide font-semibold text-center">
              Powered by
            </h1>
          </div>
        </FadeRise>
        {/* Desktop Grid View */}
        <div className="hidden md:flex flex-row justify-center items-stretch w-full max-w-6xl divide-x divide-white/20">
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
              className="flex-1 flex flex-col items-center py-6 px-4 gap-4"
            >
              <div className="text-4xl md:text-5xl font-semibold">
                <NumberTicker value={m.v} />
                {m.suffix}
              </div>
              <p className="text-white/60 text-center max-w-xs text-sm md:text-base tracking-wide inter">
                {m.label}
              </p>
            </FadeRise>
          ))}
        </div>

        {/* Mobile Marquee View */}
        <div className="md:hidden w-full overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {[
              {
                v: 8,
                label: "Days of real-world behavioral data",
                suffix: "M+",
              },
              { v: 500, label: "User profiles analyzed", suffix: "K+" },
              {
                v: 50,
                label: "Clinical assessments training models",
                suffix: "K+",
              },
            ].map((m, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl p-6 mx-2 min-w-[280px] gap-3"
              >
                <div className="text-3xl sm:text-4xl font-semibold">
                  <NumberTicker value={m.v} />
                  {m.suffix}
                </div>
                <p className="text-white/60 text-center text-xs sm:text-sm tracking-wide inter">
                  {m.label}
                </p>
              </div>
            ))}
          </Marquee>
        </div>
      </motion.section>
      {/* SIMPLE MARQUEE (placeholder) */}
      <motion.section
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="overflow-x-hidden w-full min-w-0"
      >
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
                  className="bg-white/24 w-48 sm:w-56 md:w-64 p-5 sm:p-6 md:p-7 rounded-2xl border-2 border-white/20 flex flex-col items-center gap-2 sm:gap-3 shrink-0 shadow-md"
                >
                  <img
                    src={app.src}
                    alt={app.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full object-contain"
                  />
                  <div className="text-xs sm:text-sm md:text-base text-white">
                    {app.name}
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </FadeRise>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex items-center justify-center px-4 md:px-6 lg:px-8 max-w-[90rem] mx-auto w-full"
      >
        <div className="text-center text-lg sm:text-xl md:text-2xl lg:text-4xl tracking-wide font-semibold max-w-6xl px-2">
          Meet the rising demand for{" "}
          <span className="text-white relative after:left-0 after:content-[] after:absolute after:bottom-0 after:w-full after:bg-theme after:h-[3px] after:rounded-lg">
            resilience-focused
          </span>{" "}
          coaching and expand your impact.
        </div>
      </motion.div>

      {/* CTA CUrve */}
      <motion.section
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative flex flex-col md:flex-row lg:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-16 px-4 md:px-6 lg:px-8 max-w-[90rem] mx-auto w-full"
      >
        {/* White Curve Card */}
        <FadeRise className="bg-white text-black rounded-full p-6 sm:p-8 flex flex-col items-center justify-center relative overflow-hidden w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] shrink-0">
          <h2 className="text-base sm:text-lg md:text-xl tracking-wide font-semibold text-center leading-tight mb-3 sm:mb-4 px-2">
            Amplify your Impact & Grow Your Practice.
          </h2>
          <a
            href="/booking"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-theme to-pink-600 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm md:text-base shadow-xl hover:shadow-2xl transition-all mb-3 sm:mb-4 text-center"
          >
            Book a Personalized Demo Call
          </a>
          <p className="text-[10px] sm:text-xs md:text-sm text-zinc-600 text-center tracking-wide inter px-2">
            Projected potential ROI of 5x to 10x minimum
          </p>
        </FadeRise>

        {/* Right-side column */}
        <div className="flex flex-col gap-4 md:gap-5 items-center md:items-start w-full md:w-auto">
          {[
            "Instantly add high-value, data-driven programs.",
            "Confidently introduce premium revenue streams.",
          ].map((t, i) => (
            <FadeRise
              delay={0.15 + i * 0.1}
              key={i}
              className="bg-gradient-to-b from-zinc-950 to-black border border-white/20 rounded-3xl px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8 relative w-full max-w-sm md:max-w-md lg:max-w-lg transition-all"
            >
              <p className="text-sm sm:text-base md:text-lg text-center tracking-wide leading-relaxed text-white">
                <span className="relative after:left-0 after:content-[] after:absolute after:-bottom-1 after:w-full after:bg-theme after:h-[2px] after:rounded-lg">
                  {t.split(" ")[0]}
                </span>{" "}
                {t.split(" ").slice(1).join(" ")}
              </p>
            </FadeRise>
          ))}
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="px-4 md:px-6 lg:px-8 max-w-[90rem] mx-auto w-full"
      >
        <Image
          src="/security.png"
          width={400}
          height={400}
          alt="security"
          className="mx-auto w-full max-w-[250px] sm:max-w-xs md:max-w-lg lg:max-w-2xl h-auto"
          sizes="(max-width: 640px) 60vw, (max-width: 768px) 70vw, 33vw"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-full mx-auto w-full"
      >
        <TestimonialsSection />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        id="faq"
        className="px-4 md:px-6 lg:px-8 max-w-[90rem] mx-auto w-full mb-12 md:mb-16"
      >
        <FAQ></FAQ>
      </motion.div>
    </section>
  );
}
