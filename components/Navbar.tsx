"use client";

import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [lastScrollY, setLastScrollY] = useState(0);
  const path = usePathname();
  useMotionValueEvent(scrollY, "change", (latest) => {
    // Hide header when scrolling down, show when scrolling up
    const diff = latest - lastScrollY;
    if (diff > 0) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setLastScrollY(latest);
    // Update background color state
    setIsScrolled(latest > 200);
  });

  return (
    <motion.div
      className={`fixed top-3 left-1/2 -translate-x-1/2 w-4/5 rounded-2xl p-3 px-6  bg-gradient-to-r from-white/16 via-white/10 to-white/20 border-[0.5px] border-white/30  backdrop-blur-lg flex items-center justify-between text-sm font-semibold z-[99999] duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
      initial={{ y: -20, filter: "blur(8px)", opacity: 0 }}
      animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        initial={{ y: -10, filter: "blur(6px)", opacity: 0 }}
        animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      >
        <img src="/logo.svg" alt="" />
      </motion.div>
      <motion.div
        className="space-x-6"
        initial={{ y: -15, filter: "blur(8px)", opacity: 0 }}
        animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <motion.div
          className="inline"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          <Link href={"/"}>
            <motion.span className="inline-block cursor-pointer">
              Our Story
            </motion.span>
          </Link>
        </motion.div>
        <motion.div
          className="inline"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          <Link href={"/"}>
            <motion.span className="inline-block cursor-pointer">
              The Science
            </motion.span>
          </Link>
        </motion.div>
        <motion.div
          className="inline"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          <Link href={"/"}>
            <motion.span className="inline-block cursor-pointer">
              Our Team
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ y: -10, filter: "blur(6px)", opacity: 0 }}
        animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
      >
        <motion.button
          className="bg-white rounded-full p-2 px-4 text-black text-sm cursor-pointer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Request a Demo
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
