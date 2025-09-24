"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function Cookie() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("cookie-consent");
      if (!stored) setVisible(true);
    } catch {
      // ignore
    }
  }, []);

  const acceptAll = () => {
    try {
      localStorage.setItem("cookie-consent", "accepted");
    } catch {}
    setVisible(false);
  };

  const rejectAll = () => {
    try {
      localStorage.setItem("cookie-consent", "rejected");
    } catch {}
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-x-0 bottom-4 z-[99998] flex justify-center px-3"
          initial={{ y: 20, opacity: 0, filter: "blur(6px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: 20, opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          role="region"
          aria-label="Cookie consent banner"
        >
          <div className="w-full max-w-3xl rounded-2xl border-[0.5px] border-white/30 bg-gradient-to-r from-white/16 via-white/10 to-white/20 backdrop-blur-lg p-4 md:p-5">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <p className="text-sm text-white/90 leading-relaxed">
                We use cookies to enhance your experience, analyze traffic, and
                improve our services. By clicking “Accept,” you agree to our use
                of cookies. See our{" "}
                <a
                  href="/privacy"
                  className="underline underline-offset-4 hover:text-white"
                >
                  Privacy Policy
                </a>
                .
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:shrink-0">
                <button
                  onClick={rejectAll}
                  className="w-full sm:w-auto rounded-full border border-white/30 px-4 py-2 text-sm text-white/90 hover:bg-white/10 transition"
                >
                  Reject non‑essential
                </button>
                <button
                  onClick={acceptAll}
                  className="w-full sm:w-auto rounded-full px-4 py-2 text-sm text-white bg-gradient-to-r from-theme to-pink-600 hover:brightness-110 transition"
                >
                  Accept all
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
