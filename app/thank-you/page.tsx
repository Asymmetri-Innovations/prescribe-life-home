"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { Newsletter } from "@/components/Newsletter";

export default function ConfirmationPage() {
  return (
    <main className="relative overflow-hidden max-w-full min-w-0 px-4 max-md:px-2">
      {/* Background */}
      <Image
        className="w-full h-full absolute inset-0 object-cover rotate-30 rotate-animation-slow scale-110 z-[-1]"
        src="/bggradient.png"
        width={1920}
        height={1080}
        alt="bg"
        priority
      />

      {/* HERO (Confirmation) */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center px-6 max-md:px-4"
      >
        <motion.div
          initial={{ y: 32, filter: "blur(6px)", opacity: 0 }}
          animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="w-full"
        >
          <div className="flex flex-col items-center text-center space-y-6 max-md:space-y-4">
            <motion.h1
              className="text-6xl max-md:text-4xl font-medium text-white"
              initial={{ y: 30, filter: "blur(4px)", opacity: 0 }}
              animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-gradient">Thanks for confirming!</span>
            </motion.h1>

            <motion.p
              className="text-lg max-md:text-base text-zinc-300 max-w-2xl leading-relaxed"
              initial={{ y: 24, filter: "blur(4px)", opacity: 0 }}
              animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
            >
              Your Platform preview call is all set. Keep an eye on your inbox
              for the confirmation and details about the meeting. We’ll send you
              some reminders as the date gets closer. <br />
              <br />
              If you have any questions before then, just shoot an email to{" "}
              <a
                href="mailto:team@prescribelife.ai"
                className="text-theme underline"
              >
                team@prescribelife.ai
              </a>
              .
            </motion.p>

            <motion.p
              className="text-theme font-semibold text-xl"
              initial={{ y: 20, filter: "blur(4px)", opacity: 0 }}
              animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Looking forward to chatting with you!
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-16">
        <Newsletter />
      </section>
    </main>
  );
}
