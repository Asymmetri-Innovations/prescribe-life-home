"use client";

import Link from "next/link";
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [lastScrollY, setLastScrollY] = useState(0);
  const path = usePathname();

  const isActive = (href: string) => {
    if (!path) return false;
    if (href === "/") return path === "/";
    return path.startsWith(href);
  };

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [path]);

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    const diff = latest - lastScrollY;
    setHidden(diff > 0);
    setLastScrollY(latest);
    setIsScrolled(latest > 200);
  });

  const navLinks = [
    // { href: "/new-standard", label: "New Standard" },
    { href: "/our-story", label: "Our Story" },
    { href: "/our-team", label: "Our Team" },
  ];

  return (
    <motion.div
      className={`fixed top-3 inset-x-0 mx-auto w-11/12 md:w-[95%] rounded-2xl p-1.5 md:p-3 bg-gradient-to-r from-white/16 via-white/10 to-white/20 border-[0.5px] border-white/30 backdrop-blur-lg flex items-center justify-between text-sm font-semibold z-[99999] duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
      initial={{ y: -20, filter: "blur(8px)", opacity: 0 }}
      animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo + Text */}
      <a href="/" className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
        <motion.img
          src="/logo.jpg"
          alt="logo"
          className="w-6 sm:w-8 md:w-10 rounded-md"
          initial={{ y: -10, filter: "blur(6px)", opacity: 0 }}
          animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        />
        <motion.span
          className="text-white font-medium text-[12px] sm:text-sm whitespace-nowrap"
          initial={{ y: -10, filter: "blur(6px)", opacity: 0 }}
          animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        >
          PrescribeLife.AI
        </motion.span>
      </a>

      {/* Desktop links */}
      <motion.div
        className="hidden md:flex items-center space-x-6"
        initial={{ y: -15, filter: "blur(8px)", opacity: 0 }}
        animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        {navLinks.map(({ href, label }) => (
          <motion.div
            key={href}
            className="inline"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Link href={href} aria-current={isActive(href) ? "page" : undefined}>
              <motion.span
                className={`inline-block cursor-pointer transition-colors duration-200 ${
                  isActive(href) ? "text-theme" : "text-white hover:text-theme"
                }`}
              >
                {label}
              </motion.span>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Right side: CTA + Mobile menu */}
      <motion.div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
        <motion.a
          href="/booking"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex bg-gradient-to-r from-theme to-pink-600 rounded-full py-1 px-2 sm:py-1.5 sm:px-3 text-white text-[10px] sm:text-sm whitespace-nowrap"
          initial={{ y: -10, filter: "blur(6px)", opacity: 0 }}
          animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          Request a Demo
        </motion.a>

        {/* Mobile hamburger */}
        <motion.button
          type="button"
          aria-label="Toggle menu"
          aria-controls="mobile-menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-full p-1.5 border border-white/30 bg-white/10 hover:bg-white/20 transition"
          whileTap={{ scale: 0.95 }}
        >
          {mobileMenuOpen ? (
            <svg
              width="18"
              height="18"
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
              width="18"
              height="18"
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

      {/* Mobile dropdown menu (height animation similar to please-bee) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute left-0 right-0 top-[calc(100%+8px)] md:hidden overflow-hidden overflow-x-hidden rounded-xl bg-zinc-800/95 border-[0.5px] border-white/30 backdrop-blur-xl max-h-[70vh] overflow-y-auto"
          >
            <motion.nav
              className="flex flex-col gap-1 py-2"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={isActive(href) ? "page" : undefined}
                  className="px-4 py-2"
                >
                  <span
                    className={`inline-block cursor-pointer text-sm ${
                      isActive(href) ? "text-white font-semibold" : "text-white/80"
                    }`}
                  >
                    {label}
                  </span>
                </Link>
              ))}
              <div className="px-4 py-2">
                <a
                  href="/booking"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center rounded-full bg-gradient-to-r from-theme to-pink-600 py-2 text-white text-sm"
                >
                  Request a Demo
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
