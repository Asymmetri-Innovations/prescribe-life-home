"use client";

import { Newsletter } from "@/components/Newsletter";
import Image from "next/image";
import { FadeRise } from "@/components/FadeRise";
import { motion } from "motion/react";
import { MagicCard } from "@/components/MagicCard";
import GradientCard from "@/components/GradientCard";
import { User, Eye, Dna, Sparkles } from "lucide-react";
import { AvatarStack } from "@/components/ui/avatar-stack";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function BookingPage() {
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
      {/* Background */}
      <Image
        className="w-[150vw] h-[150vh] absolute rotate-30 rotate-animation-slow scale-110 z-[-1] overflow-x-hidden max-w-full"
        src="/bggradient.png"
        width={300}
        height={300}
        alt="bg"
      />

      {/* Founding Story */}
      <section className="flex flex-col justify-center items-center min-h-[80vh] space-y-4 max-md:space-y-3 pt-6 max-md:pt-6 px-4 max-md:px-2 mx-4">
        <FadeRise delay={0.05}>
          <div className="text-6xl max-md:text-4xl font-semibold flex flex-col items-center mb-4 mt-10 max-md:text-center">
            The Founding Story of <br />{" "}
            <span className="text-theme">PrescribeLife.AI</span>
          </div>
          <p className="text-zinc-300 mt-2 max-w-4xl mx-auto text-center text-lg max-md:text-base leading-relaxed px-4 max-md:px-2 mb-3">
            How burnout, a broken system, and a bold vision sparked a new era in
            coaching. High performers are burning out. The systems meant to
            support them are broken. We saw the cost in lost productivity, in
            strained health, and in lives running on fumes.
          </p>
        </FadeRise>

        <FadeRise className="flex justify-center items-stretch gap-4 max-md:flex-col mx-3">
          <MagicCard>
            <div className="rounded-2xl p-6 max-md:p-4 bg-gradient-to-b from-zinc-900/70 to-black/80 border border-white/10 ring-1 ring-white/10 shadow-[0_8px_32px_-16px_rgba(0,0,0,0.6)] flex flex-col space-y-3 max-w-xl w-auto h-full">
              <div className="flex items-center space-x-4">
                <Image
                  src="/oli-johnson.jpg"
                  alt="Oli Johnson"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover rounded-full"
                />
                <h3 className="text-white text-2xl max-md:text-xl font-semibold leading-snug">
                  A Founder's Burnout
                </h3>
              </div>
              <p
                className="text-zinc-300 mt-2 leading-relaxed text-sm inter"
                dangerouslySetInnerHTML={{
                  __html: `
                    <span class="text-theme">Oli Johnson</span>, our Co-founder & CEO, was a high-performing entrepreneur who hit a wall. Even with a business coach and a therapist, burnout took him down. He realised the missing ingredient was clear, real-time data about his body — a signal that could have made the danger impossible to ignore.
                  `,
                }}
              />
            </div>
          </MagicCard>

          <MagicCard>
            <div className="rounded-2xl p-6 max-md:p-4 bg-gradient-to-b from-zinc-900/70 to-black/80 border border-white/10 ring-1 ring-white/10 shadow-[0_8px_32px_-16px_rgba(0,0,0,0.6)] flex flex-col space-y-3 max-w-xl w-auto h-full">
              <div className="flex items-center space-x-4">
                <Image
                  src="/neetu-johnson.jpg"
                  alt="Dr. Neetu Johnson"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover rounded-full"
                />
                <h3 className="text-white text-2xl max-md:text-xl font-semibold leading-snug">
                  A Doctor's Frustration
                </h3>
              </div>
              <p
                className="text-zinc-300 mt-2 leading-relaxed text-sm inter"
                dangerouslySetInnerHTML={{
                  __html: `
                    <span class="text-theme">Dr. Neetu Johnson</span>, our Co-founder & Chief Medical Officer, saw patients receiving prescriptions for symptoms rooted in stress and lifestyle. What they truly needed wasn't another pill — they needed a prescription for life.
                  `,
                }}
              />
            </div>
          </MagicCard>
        </FadeRise>
      </section>

      {/* The Question */}
      <section className="relative py-14 max-md:py-10 px-6 max-md:px-3 flex flex-col items-center justify-center space-y-6 bg-white overflow-hidden">
        <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[1800px] h-[100px] bg-theme opacity-50 blur-3xl" />
        <FadeRise>
          <h2 className="text-4xl max-md:text-3xl font-semibold text-black text-center">
            The question that changed everything
          </h2>
        </FadeRise>

        <FadeRise className="flex items-center gap-10 max-md:flex-col">
          <Image
            src="/coach-thinking.png"
            alt="Coach Thinking"
            width={450}
            height={380}
            className="rounded-2xl shadow-lg"
          />
          <div className="flex flex-col space-y-8 max-md:space-y-6">
            <p className="text-theme font-semibold text-2xl max-md:text-xl leading-relaxed">
              What if we could help people avoid burnout by coaching resilience
              with a system that captures the full picture—mental, emotional,
              and physiological?
            </p>
            <p className="text-black font-semibold text-2xl max-md:text-xl leading-relaxed">
              What if the right system could help millions sustain their
              performance without sacrificing their health?
            </p>
            <p className="text-theme font-semibold text-2xl max-md:text-xl leading-relaxed">
              Who could we partner with to make this vision a reality?
            </p>
          </div>
        </FadeRise>
      </section>

      {/* Adaptive Platform */}
      <section className="flex flex-col items-center justify-center py-5 max-md:py-10 px-6 max-md:px-3 gap-8 bg-black mx-5">
        <FadeRise>
          <section className="flex flex-col justify-center items-center">
            <FadeRise>
              <div className="max-w-5xl mx-auto text-center px-6 py-10">
                <h2 className="text-4xl max-md:text-3xl font-semibold text-white leading-tight">
                  For Coaches Who Help{" "}
                  <span className="text-theme">High Performers </span> <br />
                  Thrive
                </h2>
                <p className="text-zinc-300 text-lg mt-3 leading-relaxed">
                  Coaches are the key to solving the burnout crisis. You are on
                  the frontlines of human performance, yet you often lack the
                  visibility into what’s happening between sessions.
                  PrescribeLife.AI was built for you.
                </p>
              </div>
            </FadeRise>
          </section>
          <h2 className="text-3xl font-semibold text-white text-center">
            The First Adaptive Performance Coaching{" "}
            <span className="text-theme">Platform</span>
          </h2>
        </FadeRise>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl w-full">
          {steps.map((step, i) => (
            <FadeRise key={step.id} delay={i * 0.08}>
              <MagicCard>
                <div className="rounded-2xl p-5 bg-white/10 shadow-lg border border-white/10 space-y-4 h-52 flex flex-col">
                  <div className="flex justify-between items-center">
                    <step.icon size={48} className="text-theme" />
                    <div className="text-4xl font-semibold text-white/40">
                      {step.id}
                    </div>
                  </div>
                  <div className="flex flex-col justify-end h-full space-y-2">
                    <h3 className="text-xl font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="text-zinc-300 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </MagicCard>
            </FadeRise>
          ))}
        </div>
      </section>

      {/* Future of Coaching */}
      <section className="relative py-14 max-md:py-10 px-6 flex flex-col items-center justify-center space-y-10 min-h-[500px] overflow-hidden bg-cover bg-center">
        <div
          className="absolute inset-0 z-[-1] bg-cover bg-center"
          style={{
            backgroundImage: `url('/future-performance-coaching.png')`,
          }}
        />
        <div className="absolute inset-0 z-[-1] bg-black opacity-75" />
        <FadeRise className="flex flex-col items-center justify-center space-y-10">
          <h2 className="text-4xl font-semibold text-white text-center leading-tight">
            This Is the Future of <br />
            <span className="text-theme">Performance Coaching</span>
          </h2>
          <div className="flex flex-col items-center space-y-4 text-center max-w-4xl">
            <p className="text-white/80 text-lg leading-relaxed">
              The future of coaching is adaptive, data-informed, and deeply
              human. You, the coach, are at the center of that transformation.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
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
      </section>

      {/* Expert Section */}
      <section className="py-8 px-6 bg-black text-center">
        <FadeRise>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-semibold text-white leading-tight">
              Built with <span className="text-theme">Coaches</span>, Shaped by{" "}
              <span className="text-theme">Experts</span>
            </h2>
            <p className="text-zinc-300 text-lg mt-3 leading-relaxed">
              PrescribeLife.AI was built in collaboration with medical doctors,
              neuroscientists, and experienced coaches. Designed by Jessica
              Malach, a resilience coach with 20+ years of experience, our
              platform speaks to both the science and soul of sustainable
              performance.
            </p>
          </div>
        </FadeRise>
      </section>

      {/* Jessica Section */}
      <section className="py-3 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <FadeRise>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
              <div className="flex justify-center md:justify-start">
                <Image
                  src="/jessica-malach.jpg"
                  alt="Jessica Malach"
                  width={180}
                  height={180}
                  className="w-48 h-48 object-cover object-top rounded-full border-2 border-theme/20 shadow-xl"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    Jessica Malach
                  </h3>
                  <p className="text-theme text-base font-medium">
                    - Head of Product & Commercialization, Certified Resilience
                    Coach
                  </p>
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Our system was designed by Jessica Malach, a resilience coach
                  with 20+ years of experience building human-centered
                  performance systems.
                </p>
                <div className="bg-gradient-to-r from-theme/10 to-pink-500/10 rounded-xl p-2 border border-theme/20">
                  <p className="text-white text-sm italic leading-relaxed">
                    "The future of coaching isn't about replacing human
                    intuition—it's about amplifying it with data that matters."
                  </p>
                </div>
              </div>
            </div>
          </FadeRise>
        </div>
      </section>

      {/* Avatar Stack */}
      <section className="py-2 px-6 bg-black">
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
                <Avatar key={fallback} className="w-16 h-16">
                  <AvatarImage src={`/${src}`} className="object-cover" />
                  <AvatarFallback className="text-lg">
                    {fallback}
                  </AvatarFallback>
                </Avatar>
              ))}
            </AvatarStack>
          </FadeRise>
        </div>
      </section>
    </main>
  );
}
