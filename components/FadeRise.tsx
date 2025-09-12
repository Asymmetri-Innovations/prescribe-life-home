import { motion } from "motion/react";
const baseMotion = {
  initial: { y: 18, filter: "blur(2px)", opacity: 0 },
  whileInView: { y: 0, filter: "blur(0px)", opacity: 1 },
  viewport: { once: true, amount: 0.35 },
};

export const FadeRise = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    {...baseMotion}
    transition={{ duration: 0.55, ease: "easeOut", delay }}
    className={className}
  >
    {children}
  </motion.div>
);
