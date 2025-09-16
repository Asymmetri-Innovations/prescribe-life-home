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
    <main className="space-y-32 relative pt-16 overflow-x-hidden max-w-full">
      <Image
        className="w-[150vw] h-[150vh] absolute rotate-30 rotate-animation-slow scale-110 z-[-1] overflow-x-hidden max-w-full"
        src="/bggradient.png"
        width={300}
        height={300}
        alt="bg"
      />
      <section className="flex flex-col justify-center items-center min-h-screen space-y-6  max-md:space-y-4 pt-16 max-md:pt-8 px-4 max-md:px-2">
        <FadeRise delay={0.05}>
          <div className="text-6xl max-md:text-4xl font-medium flex flex-col items-center mb-6">
            The Founding Story of <br />{" "}
            <span className="text-theme">PrescribeLife.AI</span>
          </div>
          <p className="text-zinc-300 mt-4 max-w-4xl mx-auto text-center text-lg max-md:text-base leading-relaxed px-4 max-md:px-2 mb-5">
            How burnout, a broken system, and a bold vision sparked a new era in
            coaching. High performers are burning out. The systems meant to
            support them are broken. We saw the cost in lost productivity, in
            strained health, and in lives running on fumes.
          </p>
        </FadeRise>
        <FadeRise className="flex justify-center items-center mb-6 gap-6 max-md:flex-col">
          <MagicCard>
            <div className="rounded-2xl p-8 max-md:p-6 bg-gradient-to-b from-zinc-900/70 to-black/80 border border-white/10 ring-1 ring-white/10 shadow-[0_16px_48px_-20px_rgba(0,0,0,0.6)] flex flex-col space-y-4 max-w-xl w-auto h-72">
              <div className="flex items-center space-x-4">
                <Image
                  src="/oli-johnson.jpg"
                  alt="Oli Johnson"
                  width={96}
                  height={96}
                  className="w-24 h-24 object-cover rounded-full"
                />
                <h3 className="text-white text-3xl max-md:text-2xl font-bold leading-snug">
                  A Founder's Burnout
                </h3>
              </div>
              <p
                className="text-zinc-300 mt-4 leading-relaxed text-sm max-md:text-xs"
                dangerouslySetInnerHTML={{
                  __html: `
                    <span class="text-theme">Oli Johnson</span>, our Co‑founder & CEO, was a high-performing entrepreneur who hit a wall. Even with a business coach and a therapist, burnout took him down. He realised the missing ingredient was clear, real-time data about his body — a signal that could have made the danger impossible to ignore.
                    `,
                }}
              />
            </div>
          </MagicCard>
          <MagicCard>
            <div className="rounded-2xl  p-8 max-md:p-6 bg-gradient-to-b from-zinc-900/70 to-black/80 border border-white/10 ring-1 ring-white/10 shadow-[0_16px_48px_-20px_rgba(0,0,0,0.6)] flex flex-col  max-w-xl w-auto h-72">
              <div className="flex items-center space-x-4">
                <Image
                  src="/gavin.jpg"
                  alt="Dr. Neetu Johnson"
                  width={96}
                  height={96}
                  className="w-24 h-24 object-cover rounded-full"
                />
                <h3 className="text-white text-3xl max-md:text-2xl font-bold leading-snug">
                  A Doctor's Frustration
                </h3>
              </div>
              <p
                className="text-zinc-300 mt-4 leading-relaxed text-sm max-md:text-xs"
                dangerouslySetInnerHTML={{
                  __html: `
                    <span class="text-theme">Dr. Neetu Johnson</span>, our Co‑founder & Chief Medical Officer, saw patients receiving prescriptions for symptoms rooted in stress and lifestyle. What they truly needed wasn't another pill — they needed a prescription for life.
                    `,
                }}
              />
            </div>
          </MagicCard>
        </FadeRise>
      </section>

      {/* Question that changed everything */}
      <section className="relative py-24 max-md:py-16 px-8 max-md:px-4 flex flex-col items-center justify-center space-y-10 max-md:space-y-6 bg-white overflow-hidden">
        <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[1800px] h-[100px] bg-theme opacity-50 blur-3xl" />
        <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[1800px] h-[100px] bg-theme opacity-50 blur-3xl" />
        <div className="absolute right-[-396px] top-1/2 -translate-y-1/2 w-[446px] h-[100px] bg-theme opacity-50 blur-3xl rotate-90" />
        <div className="absolute left-[-50px] top-1/2 -translate-y-1/2 w-[446px] h-[100px] bg-theme opacity-50 blur-3xl rotate-90" />

        <FadeRise>
          <h2 className="text-5xl max-md:text-4xl font-bold text-black text-center">
            The question that changed everything
          </h2>
        </FadeRise>
        <FadeRise className="flex items-center gap-20 max-md:flex-col">
          <Image
            src="/coach-thinking.png"
            alt="Coach Thinking"
            width={508}
            height={430}
            className="rounded-2xl shadow-lg"
          />
          <div className="flex flex-col space-y-16 max-md:space-y-10">
            <p className="text-theme font-bold text-3xl max-md:text-2xl leading-relaxed">
              What if we could help people avoid burnout by coaching resilience
              with a system that captures the full picture—mental, emotional,
              and physiological?
            </p>
            <p className="text-black font-bold text-3xl max-md:text-2xl leading-relaxed">
              What if the right system could help millions sustain their
              performance without sacrificing their health?
            </p>
            <p className="text-theme font-bold text-3xl max-md:text-2xl leading-relaxed">
              Who could we partner with to make this vision a reality?
            </p>
          </div>
        </FadeRise>
      </section>

      {/* The First Adaptive Performance Coaching Platform */}
      <section className="flex flex-col items-center justify-center py-24 max-md:py-16 px-8 max-md:px-4 gap-16 max-md:gap-8 bg-black">
        <FadeRise>
          {/* For Coaches Who Help High Performers Thrive */}
          <section className="flex flex-col justify-center items-center">
            <FadeRise>
              <div className="max-w-5xl mx-auto text-center px-8 max-md:px-4 py-16 max-md:py-10">
                <h2 className="text-5xl max-md:text-4xl font-bold text-white leading-tight">
                  For Coaches Who Help{" "}
                  <span className="text-theme">High Performers </span> <br />
                  Thrive
                </h2>
                <p className="text-zinc-300 text-xl max-md:text-base mt-4 max-md:mt-2 leading-relaxed">
                  Coaches are the key to solving the burnout crisis. You are on
                  the frontlines of human performance, yet you often lack the
                  visibility into what’s happening between sessions.
                  PrescribeLife.AI was built for you.
                </p>
              </div>
            </FadeRise>
          </section>{" "}
          <h2 className="text-4xl max-md:text-4xl font-bold text-white text-center">
            The First Adaptive Performance Coaching{" "}
            <span className="text-theme">Platform</span>
          </h2>
        </FadeRise>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
          {steps.map((step, i) => (
            <FadeRise key={step.id} delay={i * 0.1}>
              <MagicCard>
                <div className="rounded-2xl p-6 max-md:p-5 bg-white/10 shadow-lg border border-white/10 space-y-6 max-md:space-y-5 h-60 flex flex-col">
                  <div className="flex justify-between items-center">
                    <step.icon size={56} className="text-theme" />
                    <div className="text-5xl max-md:text-3xl font-bold text-white/40">
                      {step.id}
                    </div>
                  </div>
                  <div className="space-y-3 max-md:space-y-2 flex flex-col justify-end h-full">
                    <h3 className="text-2xl max-md:text-xl font-bold text-white">
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
      </section>

      {/* FUTURE OF COACHING */}
      <section className="relative py-24 max-md:py-16 px-8 max-md:px-4 flex flex-col items-center justify-center space-y-20 max-md:space-y-10 min-h-[683px] overflow-hidden bg-cover bg-center">
        <div
          className="absolute inset-0 z-[-1] bg-cover bg-center"
          style={{
            backgroundImage: `url('/future-performance-coaching.png')`,
          }}
        />
        <div className="absolute inset-0 z-[-1] bg-black opacity-75" />{" "}
        {/* Dark overlay */}
        <FadeRise className="flex flex-col items-center justify-center space-y-20 max-md:space-y-10">
          <h2 className="text-5xl max-md:text-4xl font-bold text-white text-center leading-tight">
            This Is the Future of <br />
            <span className="text-theme">Performance Coaching</span>
          </h2>
          <div className="flex flex-col items-center space-y-6 max-md:space-y-4 max-w-5xl text-center">
            <p className="text-white/80 text-2xl max-md:text-lg leading-relaxed">
              The future of coaching is adaptive, data-informed, and deeply
              human. You, the coach, are at the center of that transformation.
              With the right tools, you can do more than support change—you can
              lead it.
            </p>
            <p className="text-white/80 text-2xl max-md:text-lg leading-relaxed">
              Take your sneek peek into the{" "}
              <span className="text-theme">FUTURE</span>
            </p>
          </div>
          <a
            href="https://calendly.com/d/cswq-pmr-xzn/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group bg-gradient-to-r from-theme to-pink-600 text-white font-medium px-8 py-3 rounded-full shadow-lg hover:shadow-theme/30 transition-all"
          >
            <span className="relative z-10 ">Request a Demo Call</span>
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-white/10" />
          </a>
        </FadeRise>
      </section>

      <section className="mb-15">
        <FadeRise>
          <div className="max-w-5xl mx-auto text-center px-8 max-md:px-4 py-16 max-md:py-10">
            <h2 className="text-5xl max-md:text-4xl font-bold text-white leading-tight">
              Built with <span className="text-theme">Coaches</span>, Shaped by{" "}
              {""}
              <span className="text-theme">Experts</span> <br />
            </h2>
            <p className="text-zinc-300 text-xl max-md:text-base mt-4 max-md:mt-2 leading-relaxed">
              PrescribeLife.AI was built in collaboration with medical doctors,
              neuroscientists, and experienced coaches. Designed by Jessica
              Malach, a resilience coach with 20+ years of experience, our
              platform speaks to both the science and the soul of sustainable
              performance.
            </p>
          </div>
          <AvatarStack className="justify-center mt-10 max-md:mt-6">
            <Avatar className="w-20 h-20 max-md:w-16 max-md:h-16">
              <AvatarImage src="/anne-nortman.JPG" className="object-cover" />
              <AvatarFallback className="text-xl max-md:text-lg">
                AN
              </AvatarFallback>
            </Avatar>
            <Avatar className="w-20 h-20 max-md:w-16 max-md:h-16">
              <AvatarImage
                src="/divij-vidhi-handa.jpg"
                className="object-cover"
              />
              <AvatarFallback className="text-xl max-md:text-lg">
                DH
              </AvatarFallback>
            </Avatar>
            <Avatar className="w-20 h-20 max-md:w-16 max-md:h-16">
              <AvatarImage src="/jessica-malach.jpg" className="object-cover" />
              <AvatarFallback className="text-xl max-md:text-lg">
                JM
              </AvatarFallback>
            </Avatar>
            <Avatar className="w-20 h-20 max-md:w-16 max-md:h-16">
              <AvatarImage src="/laura-basson.jpeg" className="object-cover" />
              <AvatarFallback className="text-xl max-md:text-lg">
                LB
              </AvatarFallback>
            </Avatar>
            <Avatar className="w-20 h-20 max-md:w-16 max-md:h-16">
              <AvatarImage
                src="/Madelein-van-Zyl.jpeg"
                className="object-cover"
              />
              <AvatarFallback className="text-xl max-md:text-lg">
                MZ
              </AvatarFallback>
            </Avatar>
            <Avatar className="w-20 h-20 max-md:w-16 max-md:h-16">
              <AvatarImage src="/marvin-noveda.jpg" className="object-cover" />
              <AvatarFallback className="text-xl max-md:text-lg">
                MN
              </AvatarFallback>
            </Avatar>
            <Avatar className="w-20 h-20 max-md:w-16 max-md:h-16">
              <AvatarImage src="/oli-johnson.jpg" className="object-cover" />
              <AvatarFallback className="text-xl max-md:text-lg">
                OJ
              </AvatarFallback>
            </Avatar>
            <Avatar className="w-20 h-20 max-md:w-16 max-md:h-16">
              <AvatarImage
                src="/professor-rajat-gupta.jpg"
                className="object-cover"
              />
              <AvatarFallback className="text-xl max-md:text-lg">
                RG
              </AvatarFallback>
            </Avatar>
            <Avatar className="w-20 h-20 max-md:w-16 max-md:h-16">
              <AvatarImage src="/ujwal-kumar.png" className="object-cover" />
              <AvatarFallback className="text-xl max-md:text-lg">
                UK
              </AvatarFallback>
            </Avatar>
          </AvatarStack>
        </FadeRise>
      </section>
    </main>
  );
}
