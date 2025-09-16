"use client";

import { Newsletter } from "@/components/Newsletter";
import Image from "next/image";
import { FadeRise } from "@/components/FadeRise";
import { motion } from "motion/react";
export default function BookingPage() {
  return (
    <main className="space-y-32 relative pt-16 overflow-x-hidden max-w-full">
      <Image
        className="w-[150vw] h-[150vh] absolute rotate-30 rotate-animation-slow scale-110 z-[-1] overflow-x-hidden max-w-full"
        src="/bggradient.png"
        width={300}
        height={300}
        alt="bg"
      />
      <section className="flex flex-col justify-center items-center min-h-screen space-y-6 max-md:space-y-4 pt-16 max-md:pt-8 px-4 max-md:px-2">
        <FadeRise>
          <div className="text-base max-md:text-sm">Best Part..</div>
        </FadeRise>
        <FadeRise delay={0.05}>
          <div className="text-6xl max-md:text-4xl font-medium">
            This isn't a New System. <br /> It's an{" "}
            <span className="text-theme">Extension of You</span>
          </div>
        </FadeRise>
        <FadeRise className="flex justify-center items-center mb-6">
          <img
            className="w-2/5 max-md:w-4/5 rounded-3xl"
            src="/book.png"
            alt=""
          />
        </FadeRise>

        <FadeRise delay={0.15}>
          <button className="cursor-pointer bg-white/16 backdrop-blur-lg px-6 max-md:px-4 py-3 max-md:py-2 rounded-full border border-white/30 text-sm max-md:text-xs hover:scale-110 hover:bg-theme hover:text-white duration-200 ">
            See Your 5x Revenue Path
          </button>
        </FadeRise>

        <FadeRise delay={0.25}>
          <div className="relative flex flex-col justify-center items-center  space-y-10 max-md:space-y-6 text-center px-4 max-md:px-2">
            <div className="absolute inset-0 pointer-events-none  " />
            <div className="relative max-w-5xl space-y-8">
              <FadeRise>
                <p className="text-white/90 text-lg max-md:text-base leading-relaxed">
                  The fear with any new tech is that it will force you into a
                  box. That it will dilute your unique methodology and replace
                  your human touch with cold, generic algorithms.
                </p>
              </FadeRise>
              <FadeRise delay={0.05}>
                <p className="text-white text-lg max-md:text-base font-medium">
                  We believe the{" "}
                  <span className="text-theme font-semibold">opposite</span>.
                </p>
              </FadeRise>
              <FadeRise delay={0.1}>
                <p className="text-white/90 text-lg max-md:text-base leading-relaxed">
                  The right technology shouldn’t replace you,{" "}
                  <span className="text-theme font-semibold">
                    it should amplify you
                  </span>
                  . It should take your unique genius and scale it, making you
                  more present and more powerful for every single client.
                </p>
              </FadeRise>
            </div>
          </div>
        </FadeRise>
      </section>
      <section className="relative mx-auto max-w-7xl px-8 max-md:mx-5 py-24 max-md:py-16 rounded-3xl overflow-hidden text-center bg-gradient-to-b from-zinc-950 to-black border border-white/10">
        {/* Ambient glow accents */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-[420px] h-[420px] bg-gradient-to-br from-theme/25 to-pink-500/25 blur-3xl opacity-50" />
        <div className="pointer-events-none absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-gradient-to-br from-pink-400/20 to-blue-400/20 blur-3xl opacity-50" />

        <div className="relative max-w-4xl mx-auto space-y-6 ">
          <FadeRise>
            <h2 className="text-5xl max-md:text-4xl font-bold leading-tight text-white">
              Turn Every Client Engagement Into a
              <br className="hidden sm:block" /> Revenue Force Multiplier
            </h2>
          </FadeRise>
          <FadeRise delay={0.08}>
            <p className="text-zinc-300 text-xl max-md:text-base leading-relaxed px-2">
              PrescribeLife.AI helps you transform each coaching package into a
              high‑value, premium offer with the{" "}
              <span className="text-theme font-semibold">
                potential for a 5×–10× return.
              </span>
            </p>
          </FadeRise>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center">
        {/* background images remain static */}
        <FadeRise>
          <div className="max-w-5xl mx-auto text-center px-8 max-md:px-4 py-16 max-md:py-10">
            <h2 className="text-5xl max-md:text-4xl font-bold text-white leading-tight">
              Book Your <span className="text-theme">Personalized</span>{" "}
              30‑Minute Demo
            </h2>
            <p className="text-zinc-300 text-xl max-md:text-base mt-4 max-md:mt-2 leading-relaxed">
              Join us for a session where we’ll show you how{" "}
              <span className="text-white font-semibold">Prescribe Life</span>{" "}
              becomes a seamless extension of your coaching philosophy
            </p>
          </div>
        </FadeRise>
        <FadeRise className="flex justify-center items-center">
          <img
            className="rounded-3xl w-3/5 max-md:w-4/5"
            src="/book2.png"
            alt=""
          />
        </FadeRise>
      </section>
      <section>
        <div className="relative mx-auto max-w-7xl px-8 max-md:px-4 py-16 max-md:py-10 md:pb-0">
          <FadeRise>
            <h2 className="text-4xl max-md:text-3xl font-bold text-center text-white">
              In Your Personalized Demo,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme to-pink-500">
                You Will Discover
              </span>
            </h2>
          </FadeRise>

          <div className="mt-10 max-md:mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-md:gap-4 md:gap-8">
            {[
              {
                title: "The Irreplaceable Coach Setup",
                body: "See how to combine your human insight with real-time biometric data to create a coaching experience AI can never replicate.",
              },
              {
                title: "How to Scale Without Diluting Impact",
                body: "Learn how our adaptive system allows you to serve more high-performers effectively, increasing your revenue without sacrificing the quality of your connection.",
              },
              {
                title: "A New Kind of Client Conversation",
                body: "Witness how having the right data transforms your sessions, allowing you to bypass surface-level issues and facilitate deeper, faster breakthroughs.",
              },
            ].map((card, i) => (
              <FadeRise key={i} delay={i * 0.08}>
                <div className="rounded-2xl p-8 max-md:p-6 bg-gradient-to-b from-zinc-900/70 to-black/80 border border-white/10 ring-1 ring-white/10 shadow-[0_16px_48px_-20px_rgba(0,0,0,0.6)]">
                  <div className="w-10 h-[3px] bg-gradient-to-r from-theme to-pink-500 rounded-full mb-4" />
                  <h3 className="text-white text-2xl max-md:text-xl font-semibold leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-zinc-300 mt-4 leading-relaxed text-base max-md:text-sm">
                    {card.body}
                  </p>
                </div>
              </FadeRise>
            ))}
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center">
        <div className="relative max-w-4xl mx-auto text-center px-8 max-md:px-4 py-16 max-md:py-10">
          <FadeRise>
            <h2 className="text-5xl max-md:text-4xl font-bold text-white leading-tight">
              The Future of coaching is here.
              <br className="hidden sm:block" />
              <span className="text-theme"> See it for yourself.</span>
            </h2>
          </FadeRise>
          <FadeRise delay={0.08}>
            <div className="mt-8 max-md:mt-4 sm:mt-10 flex justify-center">
              <a
                href="https://calendly.com/d/cswq-pmr-xzn/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-10 max-md:px-8 py-4 max-md:py-3 rounded-full font-semibold text-white text-lg max-md:text-base shadow-[0_10px_30px_-10px_rgba(236,72,153,0.6)]"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-theme to-pink-600 opacity-95 group-hover:opacity-100 transition-opacity" />
                <span className="absolute inset-0 rounded-full ring-2 ring-white/80" />
                <span className="relative z-10">
                  Book a Personalized Demo Call
                </span>
              </a>
            </div>
          </FadeRise>
          <FadeRise delay={0.16}>
            <p className="mt-10 max-md:mt-6 text-zinc-300 text-lg max-md:text-base">
              Let us show you how to multiply your revenue, not your workload.
            </p>
          </FadeRise>
          <FadeRise delay={0.24}>
            <p className="mt-4 max-md:mt-2 text-zinc-300 text-lg max-md:text-base">
              Take your sneek peek into the{" "}
              <span className="text-theme">FUTURE</span>
            </p>
          </FadeRise>
        </div>
        <FadeRise delay={0.3}>
          <Image src="/security.png" width={400} height={400} alt="security" />
        </FadeRise>
      </section>
      <section>
        <FadeRise>
          <Newsletter />
        </FadeRise>
      </section>
      <section></section>
    </main>
  );
}
