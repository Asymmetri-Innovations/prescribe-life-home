"use client";

import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";
export default function Explain() {
  const textRef = useRef(null);

  const { scrollYProgress: textProgress } = useScroll({
    target: textRef,
    offset: ["start start", "end center"],
  });
  const { scrollYProgress: textProgressMobile } = useScroll({
    target: textRef,
    offset: ["start start", "end end"],
  });
  const list = [
    "Let's be honest.",
    "The rise of AI has many coaches wondering about their future.",
    "But most tech solutions are designed to remove the human element, not enhance it.",
    "We believe that’s a flawed approach.",
    "Your intuition, empathy, and connection are the most powerful assets in coaching and technology should serve them, not sideline them.",
    "PrescribeLife.ai is the first platform designed not as a replacement, but as an amplifier for your humanity.",
    "It gives you the insights to make your connections deeper and your impact undeniable.",
  ];
  return (
    <section ref={textRef}>
      <div className="text-3xl text-center">
        They’re <span className="text-theme">Building AI</span> to Replace
        Coaches. <br /> We’re Building It to{" "}
        <span className="text-theme">Make You More Human</span>.
      </div>

      <div className="sticky top-0 w-full flex flex-col justify-center items-center max-md:hidden min-h-screen">
        <img
          className="rotate-90 w-full -left-3/5  absolute breathing-animation"
          src="/bggradient2.png"
          alt=""
        />
        <img
          className="rotate-90 w-full -right-3/5  absolute breathing-animation"
          src="/bggradient2.png"
          alt=""
        />
        <motion.div
          style={{
            animation: `rotateBG ${5}s linear infinite`,
            animationDelay: 6 + "s",
            zIndex: 4,
            opacity: useTransform(
              textProgress,
              [0, 0.01, 0.13, 0.14],
              [0, 1, 1, 0]
            ),
          }}
          className="floating text-white w-full  absolute text-center text-4xl font-medium"
        >
          Let's be honest.
        </motion.div>

        <motion.div
          style={{
            animation: `rotateBG ${5}s linear infinite`,
            animationDelay: 6 + "s",
            zIndex: 4,
            opacity: useTransform(textProgress, [0.14, 0.15, 0.28], [0, 1, 0]),
          }}
          className="floating text-white w-full  absolute text-center text-4xl font-medium"
        >
          The rise of AI has many coaches wondering about their future.
        </motion.div>

        <motion.div
          style={{
            animation: `rotateBG ${5}s linear infinite`,
            animationDelay: 6 + "s",
            zIndex: 4,
            opacity: useTransform(textProgress, [0.28, 0.29, 0.42], [0, 1, 0]),
          }}
          className="floating text-white w-full  absolute text-center text-4xl font-medium"
        >
          But most tech solutions are designed to remove the human element, not
          enhance it.
        </motion.div>

        <motion.div
          style={{
            animation: `rotateBG ${5}s linear infinite`,
            animationDelay: 6 + "s",
            zIndex: 4,
            opacity: useTransform(textProgress, [0.42, 0.43, 0.56], [0, 1, 0]),
          }}
          className="floating text-white w-full  absolute text-center text-4xl font-medium"
        >
          We believe that's a flawed approach.
        </motion.div>

        <motion.div
          style={{
            animation: `rotateBG ${5}s linear infinite`,
            animationDelay: 6 + "s",
            zIndex: 4,
            opacity: useTransform(textProgress, [0.56, 0.57, 0.7], [0, 1, 0]),
          }}
          className="floating text-white w-full  absolute text-center text-4xl font-medium"
        >
          Your intuition, empathy, and connection are the most powerful assets
          in coaching and technology should serve them, not sideline them.
        </motion.div>

        <motion.div
          style={{
            animation: `rotateBG ${5}s linear infinite`,
            animationDelay: 6 + "s",
            zIndex: 4,
            opacity: useTransform(textProgress, [0.7, 0.71, 0.84], [0, 1, 0]),
          }}
          className="floating text-white w-full  absolute text-center text-4xl font-medium"
        >
          PrescribeLife.ai is the first platform designed not as a replacement,
          but as an amplifier for your humanity.
        </motion.div>

        <motion.div
          style={{
            animation: `rotateBG ${5}s linear infinite`,
            animationDelay: 6 + "s",
            zIndex: 4,
            opacity: useTransform(textProgress, [0.84, 0.85, 1], [0, 1, 1]),
          }}
          className="floating text-white w-full  absolute text-center text-4xl font-medium"
        >
          It gives you the insights to make your connections deeper and your
          impact undeniable.
        </motion.div>
      </div>
      <div className="min-h-[500vh]"></div>
    </section>
  );
}
