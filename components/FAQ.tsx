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
    question: "How does the data analysis help my coaching practice?",
    answer:
      "Our AI-powered data analysis transforms raw biometric and behavioral data into actionable insights. You'll get clear readiness scores, sleep quality metrics, stress patterns, and personalized recommendations that help you guide conversations with precision and focus on what matters most for each client.",
    isWhite: true,
  },
  {
    question: "Is my client's data secure on your platform?",
    answer:
      "Absolutely. We use enterprise-grade encryption, comply with HIPAA and GDPR regulations, and store all data on secure, SOC 2 certified servers. Your clients' privacy and data security are our top priorities, with multi-layer protection and regular security audits.",
  },
  {
    question: "How long does it take to get started?",
    answer:
      "Most coaches are up and running within 24-48 hours. The setup involves connecting your clients' existing wearables (no new hardware needed), customizing your dashboard preferences, and completing a brief onboarding session with our team.",
  },
  {
    question: "What kind of coaches can benefit from your platform?",
    answer:
      "The platform supports executive and leadership coaches, burnout and resilience coaches, mental fitness and wellbeing coaches, and any practitioner who wants to add resilience-building and burnout-preventative support to their practice. It can be adapted to fit your coaching methodology.",
  },

  {
    question: "What kind of support do you offer?",
    answer:
      "We provide comprehensive onboarding, 24/7 technical support, regular training webinars, and a dedicated success manager for each coaching practice. You'll also get access to our resource library, best practices guides, and a community of coaches using data-driven methods.",
  },
];

export default function FAQ() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const leftColumnItems = faqData.slice(0, 3);
  const rightColumnItems = faqData.slice(3, 6);

  return (
    <section className="flex flex-col justify-center items-center gap-12 px-4 md:px-16">
      <div className="text-3xl font-medium">FAQs</div>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {leftColumnItems.map((item, index) => (
            <motion.div
              key={index}
              className={`${
                "bg-[#1a1a1a] text-white border-white/20"
                // item.isWhite
                //   ? "bg-white text-black border-zinc-200"
                //   : "bg-[#1a1a1a] text-white border-white/20"
              } rounded-3xl border overflow-hidden cursor-pointer`}
              initial={false}
              onClick={() => toggleItem(index)}
            >
              <div className="p-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium pr-4">{item.question}</h3>
                  <motion.div
                    animate={{
                      rotate: expandedItems.includes(index) ? 180 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown
                      className={`w-6 h-6 ${
                        item.isWhite ? "text-zinc-600" : "text-zinc-400"
                      } flex-shrink-0`}
                    />
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
                      <div
                        className={`pt-4 ${
                          "text-zinc-300"
                          //   item.isWhite ? "text-zinc-700" : "text-zinc-300"
                        } leading-relaxed`}
                      >
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
            const actualIndex = index + 3;
            return (
              <motion.div
                key={actualIndex}
                className="bg-[#1a1a1a] text-white rounded-3xl border border-white/20 overflow-hidden cursor-pointer"
                initial={false}
                onClick={() => toggleItem(actualIndex)}
              >
                <div className="p-8">
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
