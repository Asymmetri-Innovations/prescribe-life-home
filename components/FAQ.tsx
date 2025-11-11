"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question:
      "There are so many platforms out there. What makes PrescribeLife.AI different, and how do I know it’s for real?",
    answer:
      "We get it. In a world full of 'game-changing' tech, skepticism is smart. The difference is, we’re not just another data tracker. We are the only platform that connects your client's real-time biometrics, personalized DNA insights, and their daily behaviors into one adaptive system.",
  },
  {
    question:
      "My clients are incredibly busy executives. Will they actually use this?",
    answer:
      "That’s why we designed PrescribeLife.AI to deliver value even with minimal effort. Passive data from their phone gives you insights into sleep, readiness, and activity levels — no extra work for them.",
  },
  {
    question: "What if my client doesn’t have an Apple Watch or Oura ring?",
    answer:
      "No device? No problem. The platform gathers essential data via smartphones and facial scan tech — no hardware required.",
  },
  {
    question:
      "I’m a performance coach, not a data scientist. Will I be able to understand this?",
    answer:
      "Absolutely. Preslie™ (our AI co-pilot) translates data into simple, coach-ready insights so you can focus on guiding clients — not crunching numbers.",
  },
  {
    question: "Is this just for resilience or wellness?",
    answer:
      "No. This is about performance under pressure, recovery strategy, and decision-making capacity — far beyond basic wellbeing.",
  },
  {
    question: "Will this replace my coaching framework?",
    answer:
      "Not at all. PrescribeLife.AI amplifies your framework, providing real-time data to tailor your methods — not replace them.",
  },
  {
    question: "What kind of coaches can benefit?",
    answer:
      "Performance coaches to founders, executives, and leaders — anyone coaching high-performers benefits from PrescribeLife.AI.",
  },
  {
    question: "Can I use this for group coaching programs?",
    answer:
      'Yes, it’s powerful for group coaching — spot collective trends (e.g., "readiness dipped after review") while supporting individuals personally.',
  },
  {
    question: "How does Preslie™ actually work?",
    answer:
      "Preslie™ acts like your assistant coach — tracking and surfacing key coachable moments, suggesting topics, and flagging burnout early.",
  },
  {
    question: "Is my client's data secure?",
    answer:
      "Absolutely. All client data is encrypted and private — only you and your client have access.",
  },
  {
    question: "What kind of data do you track?",
    answer:
      "We track validated wellness scores across wellbeing, sleep, activity, and readiness — no new hardware needed.",
  },
];

export default function FAQ({ classname }: { classname?: string }) {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const [showAll, setShowAll] = useState(true);

  const toggleItem = (index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const midIndex = Math.ceil(faqData.length / 2);
  const leftColumnItems = faqData.slice(0, midIndex);
  const rightColumnItems = faqData.slice(midIndex);

  const visibleLeft = showAll ? leftColumnItems : leftColumnItems.slice(0, 3);
  const visibleRight = showAll
    ? rightColumnItems
    : rightColumnItems.slice(0, 3);

  return (
    <section
      id="faq"
      className={`flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-10 px-4 md:px-6 lg:px-10 ${classname}`}
    >
      <div className="font-section-title">FAQs</div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {[visibleLeft, visibleRight].map((col, colIndex) => (
          <div key={colIndex} className="space-y-4 md:space-y-5">
            {col.map((item, index) => {
              const actualIndex = colIndex === 0 ? index : index + midIndex;
              const isExpanded = expandedItems.includes(actualIndex);

              return (
                <motion.div
                  key={actualIndex}
                  className={`flex flex-col bg-[#1a1a1a] text-white border border-white/20 rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                    isExpanded ? "h-auto" : "h-20 sm:h-24"
                  }`}
                  onClick={() => toggleItem(actualIndex)}
                  initial={false}
                >
                  <div className="p-3 sm:p-4 md:p-5 flex flex-col justify-center flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-card-desc pr-2 sm:pr-3">
                        {item.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400 flex-shrink-0" />
                      </motion.div>
                    </div>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
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
                          <div className="font-card-desc pt-2 sm:pt-3 text-zinc-300">
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
        ))}
      </div>

      <button
        onClick={() => setShowAll(!showAll)}
        className="font-cta px-4 sm:px-6 py-1.5 sm:py-2 text-white border border-white/30 rounded-full hover:bg-white/10 transition-all hidden"
      >
        {showAll ? "View Less" : "View More"}
      </button>
    </section>
  );
}
