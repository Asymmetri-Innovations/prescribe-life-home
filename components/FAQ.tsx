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
      "There are so many platforms out there. What makes PrescribeLife.AI different?",
    answer:
      "PrescribeLife.AI is not another habit tracker or coaching dashboard. It connects behavioural patterns, recovery signals, and daily actions into a single performance intelligence layer. It gives you clear visibility into what is changing between sessions so you can guide coaching with precision.",
  },
  {
    question: "What kind of coaches can benefit?",
    answer:
      "PrescribeLife.AI is designed for leadership, performance, and resilience focused coaches working with founders, executives, and high performing professionals. It supports 1 to 1, group, and team coaching environments where sustained performance and decision making matter.",
  },
  {
    question:
      "My clients are incredibly busy executives. Will they actually use this?",
    answer:
      "Preslie interprets behavioural signals generated through everyday activity patterns and wearable devices. Most leaders engage briefly, while you retain clear visibility between sessions.",
  },
  {
    question: "Can I use this for group coaching programs?",
    answer:
      "Yes. PrescribeLife.AI allows you to view collective resilience and engagement trends while still supporting individuals privately. This helps you adjust program direction without adding manual reporting or additional admin.",
  },
  {
    question: "What if my client doesn't have an Apple Watch or Oura ring?",
    answer:
      "No additional hardware is required. PrescribeLife.AI works with commonly used devices, allowing you to gather meaningful insights without changing your client's routine.",
  },
  {
    question: "How does Preslie™ actually work?",
    answer:
      "Preslie supports coaching between sessions by interpreting behavioural patterns and surfacing relevant coaching insight. It does not replace the coach. It strengthens your ability to respond with clarity and timing.",
  },
  {
    question:
      "I'm a performance coach, not a data scientist. Will I be able to understand this?",
    answer:
      "PrescribeLife.AI translates complex signals into clear, coach-ready insight. You focus on conversations and outcomes, while the platform brings structure and clarity to what is changing between sessions.",
  },
  {
    question: "Is my client's data secure?",
    answer:
      "Client data is encrypted, private, and controlled. Only you and your client can access individual information, and insights are presented within a secure coaching environment designed with privacy and ethical practice in mind.",
  },
  {
    question: "Is this just for resilience or wellness?",
    answer:
      "While wellbeing and recovery are important signals, PrescribeLife.AI focuses on performance intelligence. It helps you understand capacity, engagement, and resilience so coaching moves beyond surface-level habits into sustained performance.",
  },
  {
    question: "Will this replace my coaching framework?",
    answer:
      "PrescribeLife.AI amplifies your existing methodology rather than replacing it. You remain the strategist and decision maker. The platform simply gives you deeper visibility into evolving client patterns.",
  },
  {
    question: "What kind of data do you track?",
    answer:
      "PrescribeLife.AI interprets behavioural patterns, recovery signals, and engagement trends to surface coaching insight. The focus is not on tracking everything, but on highlighting what is influencing performance and decision-making.",
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
