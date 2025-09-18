"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  isWhite?: boolean;
}

const faqData: FAQItem[] = [
  {
    question:
      "There are so many platforms out there. What makes PrescribeLife.AI different, and how do I know it’s for real?",
    answer:
      "We get it. In a world full of \"game-changing\" tech, skepticism is smart. The difference is, we’re not just another data tracker. We are the only platform that connects your client's real-time biometrics, personalized DNA insights, and their daily behaviors into one adaptive system.\n\nIt’s built on a foundation of 8 million+ days of data and 50,000+ clinical assessments, so the insights aren't guesswork; they're science-backed and ready for you to use in your very next session.",
  },
  {
    question:
      "My clients are incredibly busy executives. Will they actually use this?",
    answer:
      "This is a critical question. The last thing high-performers need is another item on their to-do list. That’s why we designed PrescribeLife.AI to deliver value even with minimal effort.\n\nJust by having their phone, your clients provide passive data that gives you immediate insight into their sleep, readiness, and activity levels.\n\nWhen they choose to engage more deeply with their habits, the insights become even more powerful. Either way, you get the data you need to spot patterns and start conversations that matter.",
  },
  {
    question:
      "What if my client doesn’t have an Apple Watch, or Oura ring, or other wearables?",
    answer:
      "No device? No problem. While we integrate with top wearables, they are not required. The platform can gather essential data from the smartphone they already carry with them every day and facial scan technology, ensuring you can bring this level of insight to every single client, no extra hardware needed.",
  },
  {
    question:
      "I’m a performance coach, not a data scientist. Will I be able to understand this?",
    answer:
      "Absolutely. Your genius is in coaching, not crunching numbers. We built this platform to honor that.\n\nWe handle all the complex science behind the scenes so you don’t have to be a health expert or data scientist.\n\nOur AI co-pilot, Preslie™, translates biometric and behavioral data into simple, coach-ready insights and topics for your next session. You get to focus on what you do best, guiding your clients with a new layer of precision.",
  },
  {
    question: "Is this just for resilience or wellness?",
    answer:
      "No. This is about performance under pressure, recovery strategy, and decision-making capacity built for coaches who go far beyond basic wellbeing.",
  },
  {
    question:
      "I’ve spent years perfecting my coaching framework. Will this try to replace it?",
    answer:
      "Not at all. It’s designed to do the exact opposite. Your framework is your unique advantage, and our platform is built to amplify it.\n\nThink of PrescribeLife.AI as a high-precision lens for the powerful camera you already have. It provides real-time, objective data to validate your intuition and tailor your existing methods to what your client needs right now, making your unique process even more impactful.",
  },
  {
    question: "What kind of coaches can benefit from your platform?",
    answer:
      "Performance coaches to Founders, executives, leaders, and professionals under pressure.\nIf they perform at a high level and you coach them, PrescribeLife.AI gives you both the edge.",
  },
  {
    question: "Can I use this for my group coaching programs?",
    answer:
      'Yes, it’s incredibly powerful for group coaching. It allows you to maintain a cohesive program for the group while still providing hyper-personalized support to each individual. You can spot collective trends (e.g., "readiness scores dipped for everyone after the quarterly review") while also seeing which person might need a private check-in. It helps you scale your impact without losing the personal touch.',
  },
  {
    question: "How does the AI co-pilot, Preslie™, actually work?",
    answer:
      "Think of Preslie™ as your associate coach, working 24/7 to support your clients between sessions. For your client, it helps them build self-awareness and unblock challenges with their habits in real-time.\n\nFor you, it analyzes all that data and surfaces the most important, coachable moments. It flags early signs of burnout and suggests topics for your next session, so you walk in already knowing where to focus to make the biggest impact.",
  },
  {
    question: "Is my client's data secure on your platform?",
    answer:
      "Absolutely. Trust and confidentiality are the bedrock of coaching, and we treat your client's data with the highest level of security and privacy. All information is encrypted, and only you and your client have access to their personal data. You can coach with complete peace of mind.",
  },
  {
    question: "What kind of data do you track?",
    answer:
      "We track validated wellness scores across four key areas: wellbeing, sleep, activity, and readiness without requiring clients to buy new hardware.",
  },
];

export default function FAQ() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const midIndex = Math.ceil(faqData.length / 2);
  const leftColumnItems = faqData.slice(0, midIndex);
  const rightColumnItems = faqData.slice(midIndex);

  return (
    <section className="flex flex-col justify-center items-center gap-12 px-4 md:px-16">
      <div className="text-3xl font-medium">FAQs</div>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {leftColumnItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col bg-[#1a1a1a] text-white border-white/20 rounded-3xl border overflow-hidden cursor-pointer"
              initial={false}
              onClick={() => toggleItem(index)}
            >
              <div className="p-8 flex flex-col flex-1 min-h-[150px]">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium pr-4">{item.question}</h3>
                  <motion.div
                    animate={{
                      rotate: expandedItems.includes(index) ? 180 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-6 h-6 text-zinc-400 flex-shrink-0" />
                  </motion.div>
                </div>

                <AnimatePresence initial={false}>
                  {expandedItems.includes(index) && (
                    <motion.div
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      transition={{
                        duration: 0.3,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                    >
                      <div className="pt-4 text-zinc-300 leading-relaxed ">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {rightColumnItems.map((item, index) => {
            const actualIndex = index + midIndex;
            return (
              <motion.div
                key={actualIndex}
                className="flex flex-col bg-[#1a1a1a] text-white border-white/20 rounded-3xl border overflow-hidden cursor-pointer"
                initial={false}
                onClick={() => toggleItem(actualIndex)}
              >
                <div className="p-8 flex flex-col flex-1 min-h-[150px]">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium pr-4">
                      {item.question}
                    </h3>
                    <motion.div
                      animate={{
                        rotate: expandedItems.includes(actualIndex) ? 180 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-6 h-6 text-zinc-400 flex-shrink-0" />
                    </motion.div>
                  </div>

                  <AnimatePresence initial={false}>
                    {expandedItems.includes(actualIndex) && (
                      <motion.div
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: "auto" },
                          collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                      >
                        <div className="pt-4 text-zinc-300 leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
