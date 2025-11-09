"use client";

import { Newsletter } from "@/components/Newsletter";
import Image from "next/image";
import { FadeRise } from "@/components/FadeRise";
import { motion, useScroll, useTransform } from "motion/react";
import { MagicCard } from "@/components/MagicCard";
import GradientCard from "@/components/GradientCard";
import { User, Eye, Dna, Sparkles } from "lucide-react";
import { AvatarStack } from "@/components/ui/avatar-stack";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import HoverGlowContainer from "@/components/HoverGlowContainer";
import { useMemo } from "react";

export default function BookingPage() {
  const { scrollY } = useScroll();

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
  const steps = [
    {
      id: "01",
      title: "Habit Builder",
      description:
        "Personalized behavioral change system to help clients build habits that stick.",
      icon: User,
    },
    {
      id: "02",
      title: "Bio Insights",
      description:
        "Real-time biometric insights into stress, recovery, and resilience.",
      icon: Eye,
    },
    {
      id: "03",
      title: "DNA Data",
      description:
        "Personalized behavioral change system to help clients build habits that stick.",
      icon: Dna,
    },
    {
      id: "04",
      title: "Adaptive AI",
      description: "Adaptive AI that evolves with your client’s needs.",
      icon: Sparkles,
    },
  ];

  return (
    <main className="space-y-8 relative pt-8 overflow-hidden max-w-full">
      {/* Animated Blobs Background */}
      <motion.div
        style={{
          top: "3%",
          left: "50%",
          width: "50rem",
          aspectRatio: "1/1",
          animation: `animateCore 6s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite alternate-reverse forwards`,
        }}
        className="blob rounded-full absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
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
            animation: `${blob.animationName} ${blob.duration}s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite alternate-reverse forwards`,
          }}
          className="blob absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: blob.opacity }}
          transition={{ duration: 2 }}
        />
      ))}

      {/* Founding Story */}
      <section className="flex flex-col justify-center items-center min-h-[80vh] md:min-h-screen space-y-8 md:space-y-10 pt-20 md:pt-12 lg:pt-6 px-4 md:px-6 lg:px-8 max-w-[85rem] mx-auto w-full relative">
        {/* Concentric Ripple Circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden z-0">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <div
              key={index}
              className="ripple-circle"
              style={{
                width: `${300 + index * 100}px`,
                height: `${300 + index * 100}px`,
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
          className="flex flex-col pt-20 md:pt-12 lg:pt-6 px-4 md:px-8 lg:px-10 max-w-[85rem] mx-auto w-full relative"
        >
          <FadeRise
            delay={0.05}
            className="flex flex-col items-center space-y-6 md:space-y-8 mb-8 md:mb-12"
          >
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center leading-tight"
              initial={{ y: 30, filter: "blur(4px)", opacity: 0 }}
              animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              The Founding Story of <br />{" "}
              <span className="text-theme">PrescribeLife.AI</span>
            </motion.h1>
            <motion.p
              className="text-zinc-300 max-w-4xl mx-auto text-center text-base md:text-lg leading-relaxed px-4 md:px-6"
              initial={{ y: 24, filter: "blur(4px)", opacity: 0 }}
              animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
            >
              How burnout, a broken system, and a bold vision sparked a new era
              in coaching. High performers are burning out. The systems meant to
              support them are broken. We saw the cost in lost productivity, in
              strained health, and in lives running on fumes.
            </motion.p>
          </FadeRise>

          <FadeRise className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-6xl">
            <div className="rounded-2xl p-6 md:p-8 bg-gradient-to-b  from-white/10 to-black/80 backdrop-blur-3xl border border-white/10 ring-1 ring-white/10 shadow-[0_8px_32px_-16px_rgba(0,0,0,0.6)] flex flex-col space-y-4 h-full">
              <div className="flex items-center gap-4 md:gap-5">
                <Image
                  src="/oli-johnson.jpg"
                  alt="Oli Johnson"
                  width={80}
                  height={80}
                  className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full flex-shrink-0"
                />
                <h3 className="text-white text-xl md:text-2xl font-semibold leading-tight">
                  A Founder's Burnout
                </h3>
              </div>
              <p className="text-zinc-300 leading-relaxed text-sm md:text-base inter">
                <span className="text-theme">Oli Johnson</span>, our Co-founder
                & CEO, was a high-performing entrepreneur who hit a wall. Even
                with a business coach and a therapist, burnout took him down. He
                realised the missing ingredient was clear, real-time data about
                his body — a signal that could have made the danger impossible
                to ignore.
              </p>
            </div>

            <div className="rounded-2xl p-6 md:p-8 bg-gradient-to-b  from-white/10 to-black/80 backdrop-blur-3xl border border-white/10 ring-1 ring-white/10 shadow-[0_8px_32px_-16px_rgba(0,0,0,0.6)] flex flex-col space-y-4 h-full">
              <div className="flex items-center gap-4 md:gap-5">
                <Image
                  src="/neetu-johnson.jpg"
                  alt="Dr. Neetu Johnson"
                  width={80}
                  height={80}
                  className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full flex-shrink-0"
                />
                <h3 className="text-white text-xl md:text-2xl font-semibold leading-tight">
                  A Doctor's Frustration
                </h3>
              </div>
              <p className="text-zinc-300 leading-relaxed text-sm md:text-base inter">
                <span className="text-theme">Dr. Neetu Johnson</span>, our
                Co-founder & Chief Medical Officer, saw patients receiving
                prescriptions for symptoms rooted in stress and lifestyle. What
                they truly needed wasn't another pill — they needed a
                prescription for life.
              </p>
            </div>
          </FadeRise>
        </motion.div>
      </section>

      {/* The Question */}
      <section className="flex flex-col items-center justify-center py-14 md:py-16 px-4 md:px-6 lg:px-8 bg-black">
        <div className="max-w-[85rem] mx-auto w-full">
          <FadeRise>
            <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10 md:mb-12">
              The question that changed everything
            </h2>
          </FadeRise>

          <FadeRise className="flex items-center gap-8 md:gap-10 lg:gap-12 flex-col lg:flex-row">
            <Image
              src="/coach-thinking.png"
              alt="Coach Thinking"
              width={450}
              height={380}
              className="rounded-2xl shadow-lg w-full max-w-md lg:max-w-lg"
            />
            <div className="flex flex-col space-y-4 md:space-y-5 relative w-full">
              {[
                "What if we could help people avoid burnout by coaching resilience with a system that captures the full picture—mental, emotional, and physiological?",
                "What if the right system could help millions sustain their performance without sacrificing their health?",
                "Who could we partner with to make this vision a reality?",
              ].map((text, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 flex-col p-6 py-6 md:p-8 md:py-8 rounded-3xl relative border-2 border-white/30 overflow-hidden"
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
                      className="sblob rounded-full absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-10"
                    />
                  ))}

                  <p className="text-white text-sm md:text-base leading-relaxed relative z-10">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </FadeRise>
        </div>
      </section>

      {/* Adaptive Platform */}
      <section className="flex flex-col items-center justify-center py-10 md:py-14 px-4 md:px-6 lg:px-8 gap-8 bg-black">
        <div className="max-w-[85rem] mx-auto w-full">
          <FadeRise>
            <section className="flex flex-col justify-center items-center">
              <FadeRise>
                <div className="max-w-5xl mx-auto text-center px-4 md:px-6 py-10">
                  <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
                    For Coaches Who Help{" "}
                    <span className="text-theme">High Performers </span> <br />
                    Thrive
                  </h2>
                  <p className="text-zinc-300 text-base md:text-lg mt-3 leading-relaxed">
                    Coaches are the key to solving the burnout crisis. You are
                    on the frontlines of human performance, yet you often lack
                    the visibility into what's happening between sessions.
                    PrescribeLife.AI was built for you.
                  </p>
                </div>
              </FadeRise>
            </section>
            <h2 className="text-2xl md:text-3xl font-semibold text-white text-center">
              The First Adaptive Performance Coaching{" "}
              <span className="text-theme">Platform</span>
            </h2>
          </FadeRise>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full mt-8">
            {steps.map((step, i) => (
              <FadeRise key={step.id} delay={i * 0.08}>
                <div className="rounded-2xl p-5 md:p-6 bg-white/10 shadow-lg border border-white/10 space-y-4 h-52 md:h-56 flex flex-col">
                  <div className="flex justify-between items-center">
                    <step.icon size={48} className="text-theme" />
                    <div className="text-3xl md:text-4xl font-semibold text-white/40">
                      {step.id}
                    </div>
                  </div>
                  <div className="flex flex-col justify-end h-full space-y-2">
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="text-zinc-300 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeRise>
            ))}
          </div>
        </div>
      </section>

      {/* Future of Coaching */}
      <section className="relative py-14 max-md:py-10 px-4 md:px-6 lg:px-8 flex flex-col items-center justify-center space-y-10 min-h-[500px] overflow-hidden bg-cover bg-center">
        <div
          className="absolute inset-0 z-[-1] bg-cover bg-center"
          style={{
            backgroundImage: `url('/future-performance-coaching.png')`,
          }}
        />
        <div className="absolute inset-0 z-[-1] bg-black opacity-75" />
        <div className="max-w-[85rem] mx-auto w-full">
          <FadeRise className="flex flex-col items-center justify-center space-y-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-white text-center leading-tight">
              This Is the Future of <br />
              <span className="text-theme">Performance Coaching</span>
            </h2>
            <div className="flex flex-col items-center space-y-4 text-center max-w-4xl px-4">
              <p className="text-white/80 text-base md:text-lg leading-relaxed">
                The future of coaching is adaptive, data-informed, and deeply
                human. You, the coach, are at the center of that transformation.
              </p>
              <p className="text-white/80 text-base md:text-lg leading-relaxed">
                Take your sneak peek into the{" "}
                <span className="text-theme">FUTURE</span>
              </p>
            </div>
            <a
              href="/booking"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group bg-gradient-to-r from-theme to-pink-600 text-white font-medium px-6 py-2 rounded-full shadow-lg hover:shadow-theme/30 transition-all"
            >
              <span className="relative z-10">Request a Demo Call</span>
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-white/10" />
            </a>
          </FadeRise>
        </div>
      </section>

      {/* Expert Section */}
      <section className="py-8 md:py-10 px-4 md:px-6 lg:px-8 bg-black text-center">
        <div className="max-w-[85rem] mx-auto w-full">
          <FadeRise>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
                Built with <span className="text-theme">Coaches</span>, Shaped
                by <span className="text-theme">Experts</span>
              </h2>
              <p className="text-zinc-300 text-base md:text-lg mt-3 leading-relaxed">
                PrescribeLife.AI was built in collaboration with medical
                doctors, neuroscientists, and experienced coaches. Designed by
                Jessica Malach, a resilience coach with 20+ years of experience,
                our platform speaks to both the science and soul of sustainable
                performance.
              </p>
            </div>
          </FadeRise>
        </div>
      </section>

      {/* Jessica Section */}
      <section className="py-3 md:py-6 px-4 md:px-6 lg:px-8 bg-black">
        <div className="max-w-[85rem] mx-auto w-full">
          <div className="max-w-4xl mx-auto">
            <FadeRise>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                <div className="flex justify-center md:justify-start">
                  <Image
                    src="/jessica-malach.jpg"
                    alt="Jessica Malach"
                    width={180}
                    height={180}
                    className="w-40 h-40 md:w-48 md:h-48 object-cover object-top rounded-full border-2 border-theme/20 shadow-xl"
                  />
                </div>
                <div className="space-y-4 text-center md:text-left">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white">
                      Jessica Malach
                    </h3>
                    <p className="text-theme text-sm md:text-base font-medium">
                      - Head of Product & Commercialization, Certified
                      Resilience Coach
                    </p>
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    Our system was designed by Jessica Malach, a resilience
                    coach with 20+ years of experience building human-centered
                    performance systems.
                  </p>
                  <div className="bg-gradient-to-r from-theme/10 to-pink-500/10 rounded-xl p-3 md:p-4 border border-theme/20">
                    <p className="text-white text-sm italic leading-relaxed">
                      "The future of coaching isn't about replacing human
                      intuition—it's about amplifying it with data that
                      matters."
                    </p>
                  </div>
                </div>
              </div>
            </FadeRise>
          </div>
        </div>
      </section>

      {/* Avatar Stack */}
      <section className="py-2 md:py-4 px-4 md:px-6 lg:px-8 bg-black">
        <div className="max-w-[85rem] mx-auto w-full">
          <div className="max-w-4xl mx-auto">
            <FadeRise>
              <AvatarStack className="justify-center">
                {[
                  ["anne-nortman.JPG", "AN"],
                  ["divij-vidhi-handa.jpg", "DH"],
                  ["jessica-malach.jpg", "JM"],
                  ["laura-basson.jpeg", "LB"],
                  ["Madelein-van-Zyl.jpeg", "MZ"],
                  ["marvin-noveda.jpg", "MN"],
                  ["oli-johnson.jpg", "OJ"],
                  ["professor-rajat-gupta.jpg", "RG"],
                  ["ujwal-kumar.png", "UK"],
                ].map(([src, fallback]) => (
                  <Avatar key={fallback} className="w-12 h-12 md:w-16 md:h-16">
                    <AvatarImage src={`/${src}`} className="object-cover" />
                    <AvatarFallback className="text-sm md:text-lg">
                      {fallback}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </AvatarStack>
            </FadeRise>
          </div>
        </div>
      </section>
    </main>
  );
}
