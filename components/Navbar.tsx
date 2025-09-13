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
      className={`fixed top-3 left-1/2 -translate-x-1/2 w-[96%] max-w-6xl rounded-2xl p-3 px-6  bg-gradient-to-r from-white/16 via-white/10 to-white/20 border-[0.5px] border-white/30  backdrop-blur-lg flex items-center justify-between text-sm font-semibold z-[99999] duration-300 ${
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
      {/* Desktop Navigation */}
      <motion.div
        className="hidden md:flex space-x-6"
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
          <Link href={"/"}>
            <motion.span className="inline-block cursor-pointer">
              Our Team
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
      {/* Desktop Request a Demo */}
      <motion.div
        initial={{ y: -10, filter: "blur(6px)", opacity: 0 }}
        animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        className="hidden md:block"
      >
        <motion.a
          href="https://calendly.com/d/cswq-pmr-xzn/discovery-call"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-full p-2 px-4 text-black text-sm cursor-pointer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Request a Demo
        </motion.a>
      </motion.div>
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[96%] max-w-6xl rounded-2xl p-3 px-6 bg-black border-[0.5px] border-white/30 backdrop-blur-lg flex flex-col items-center space-y-4 text-sm font-semibold z-[99998]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <Link href={"/"} onClick={() => setMobileMenuOpen(false)}>
            Our Story
          </Link>
          <Link href={"/"} onClick={() => setMobileMenuOpen(false)}>
            The Science
          </Link>
          <Link href={"/booking"} onClick={() => setMobileMenuOpen(false)}>
            Book a demo
          </Link>
          <Link href={"/"} onClick={() => setMobileMenuOpen(false)}>
            Our Team
          </Link>
          <motion.a
            href="https://calendly.com/d/cswq-pmr-xzn/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-full p-2 px-4 text-black text-sm cursor-pointer w-full text-center"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Request a Demo
          </motion.a>
        </motion.div>
      )}
    </motion.div>
  );
}
