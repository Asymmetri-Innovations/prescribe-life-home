"use client";

import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  AnimatePresence,
} from "motion/react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import CTA from "./CTA";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [lastScrollY, setLastScrollY] = useState(0);
  const path = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [path]);

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
      className={`fixed top-3 left-1/2 -translate-x-1/2 w-11/12 md:w-4/5 rounded-2xl p-2 md:p-3 px-4 md:px-6 bg-gradient-to-r from-white/16 via-white/10 to-white/20 border-[0.5px] border-white/30 backdrop-blur-lg flex items-center justify-between text-sm font-semibold z-[99999] duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
      initial={{ y: -20, filter: "blur(8px)", opacity: 0 }}
      animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo */}
      <a href="/">
        <motion.div
          initial={{ y: -10, filter: "blur(6px)", opacity: 0 }}
          animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          <img src="/logo.svg" alt="" />
        </motion.div>
      </a>
      {/* Desktop links */}
      <motion.div
        className="hidden md:flex items-center space-x-6"
        initial={{ y: -15, filter: "blur(8px)", opacity: 0 }}
        animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <motion.div
          className="inline"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          <Link href={"/our-story"}>
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
          <Link href={"/booking"}>
            <motion.span className="inline-block cursor-pointer">
              Book a demo
            </motion.span>
          </Link>
        </motion.div>
        <motion.div
          className="inline"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          <Link href={"/our-team"}>
            <motion.span className="inline-block cursor-pointer">
              Our Team
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Right side: CTA (desktop) + Hamburger (mobile) */}
      <motion.div
        initial={{ y: -10, filter: "blur(6px)", opacity: 0 }}
        animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        className="flex items-center gap-2"
      >
        <motion.div className="max-md:hidden">
          <CTA titleText="Request a Demo" />
        </motion.div>

        {/* Mobile hamburger */}
        <motion.button
          type="button"
          aria-label="Toggle menu"
          aria-controls="mobile-menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-full p-2 border border-white/30 bg-white/10 hover:bg-white/20 transition"
          whileTap={{ scale: 0.95 }}
        >
          {mobileMenuOpen ? (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 18L18 6" />
              <path d="M6 6l12 12" />
            </svg>
          ) : (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M3 6h18" />
              <path d="M3 12h18" />
              <path d="M3 18h18" />
            </svg>
          )}
        </motion.button>
      </motion.div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-[calc(100%+8px)] md:hidden rounded-xl p-3 bg-zinc-800 border-[0.5px] border-white/30 backdrop-blur-xl"
          >
            <nav className="flex flex-col gap-3">
              <Link href="/our-story" onClick={() => setMobileMenuOpen(false)}>
                <span className="inline-block cursor-pointer text-white">
                  Our Story
                </span>
              </Link>
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <span className="inline-block cursor-pointer text-white">
                  The Science
                </span>
              </Link>
              <Link href="/booking" onClick={() => setMobileMenuOpen(false)}>
                <span className="inline-block cursor-pointer text-white">
                  Book a demo
                </span>
              </Link>
              <Link href="/our-team" onClick={() => setMobileMenuOpen(false)}>
                <span className="inline-block cursor-pointer text-white">
                  Our Team
                </span>
              </Link>

              <a
                href="https://calendly.com/d/cswq-pmr-xzn/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 bg-gradient-to-r from-theme to-pink-600 rounded-full py-2 px-4 text-white text-center text-sm"
              >
                Request a Demo
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
