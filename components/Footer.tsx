"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Facebook, Instagram } from "lucide-react";
import { useEffect } from "react";
export default function Footer() {
  const router = useRouter();

  // This runs after route change, checks if we’re on /#faq and scrolls to it
  useEffect(() => {
    if (window.location.hash === "#faq") {
      // wait for the DOM to load
      setTimeout(() => {
        const faqSection = document.getElementById("faq");
        if (faqSection) {
          faqSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 400); // 400ms delay gives enough time for homepage to mount
    }
  }, []);

  const handleFaqClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (window.location.pathname === "/") {
      // Already on home → just scroll
      const faqSection = document.getElementById("faq");
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home with hash
      router.push("/#faq");
    }
  };

  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-6 px-4 md:px-16 mt-20">
      <div className="">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12 mb-10 md:mb-12">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start gap-3 md:gap-4">
            <div className="flex items-center gap-3">
            <img className="w-10 h-10 rounded-md" src="/logo.jpg" alt="Prescribe Life logo" />
              <div className="text-xl font-medium">PrescribeLife.AI</div>
            </div>
            <div className="text-md text-white md:mt-6 tracking-wide">
              Your New Health <span className="text-theme">Coach</span>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-white/40 font-semibold text-lg">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-white hover:text-theme transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/new-standard"
                  className="text-white hover:text-theme transition-colors"
                >
                  New Standard
                </a>
              </li>
              <li>
                <a
                  href="/our-story"
                  className="text-white hover:text-theme transition-colors"
                >
                  Our Story
                </a>
              </li>

              <li>
                <a
                  href="/our-team"
                  className="text-white hover:text-theme transition-colors"
                >
                  Our Team
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-white/40 font-semibold text-lg">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-theme transition-colors"
                >
                  For Coaches
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-theme transition-colors"
                >
                  For Clients
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-theme transition-colors"
                >
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-white/40 font-semibold text-lg">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/#faq"
                  className="text-white hover:text-theme transition-colors"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="/booking"
                  className="text-white hover:text-theme transition-colors"
                >
                  Book a Demo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-theme transition-colors"
                >
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-white/40 font-semibold text-lg">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a
                  target="_blank"
                  href="https://sites.google.com/asymmetri.in/prescribe-life-policies/home"
                  className="text-white hover:text-theme transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://sites.google.com/asymmetri.in/prescribe-life-policies/home"
                  className="text-white hover:text-theme transition-colors"
                >
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social icons row */}
        <div className="pt-2 pb-8">
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="X"
              className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors"
            >
              <div className="w-6 h-6 text-white">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors"
            >
              <Instagram className="w-6 h-6 text-white" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors"
            >
              <Facebook className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full pt-8 border-t border-zinc-800 gap-4">
          <div className="flex items-center gap-3 tracking-wide text-md text-zinc-400">
            <a
              target="_blank"
              href="https://sites.google.com/asymmetri.in/prescribe-life-policies/home"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-zinc-600">|</span>
            <a
              target="_blank"
              href="https://sites.google.com/asymmetri.in/prescribe-life-policies/home"
              className="hover:text-white transition-colors"
            >
              Terms of Use
            </a>
          </div>

          <p className="text-zinc-500 text-md tracking-wide md:text-right w-full md:w-auto">
            © 2025 Prescribe Life. All rights reserved.
          </p>
        </div>

        {/* Bottom section
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-800">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
            <a
              href="#"
              className="text-zinc-400 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <span className="text-zinc-600">|</span>
            <a
              href="#"
              className="text-zinc-400 hover:text-white transition-colors text-sm"
            >
              Terms of Use
            </a>
          </div>
          <p className="text-zinc-500 text-sm">
            © 2025 PrescribeLife.AI. All rights reserved.
          </p>
        </div> */}
      </div>
    </footer>
  );
}
