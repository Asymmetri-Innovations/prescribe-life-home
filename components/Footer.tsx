import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16 px-4 md:px-16 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Logo and tagline */}
          <div className="flex justify-center items-center gap-3">
            <img className="w-10 rounded-md" src="/logo.jpg" alt="" />
            <div>PrescribeLife.AI</div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-zinc-400 font-semibold text-sm">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-theme transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-theme transition-colors"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-theme transition-colors"
                >
                  The Science
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-theme transition-colors"
                >
                  Our Team
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-zinc-400 font-semibold text-sm">Solutions</h3>
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
            <h3 className="text-zinc-400 font-semibold text-sm">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-theme transition-colors"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
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
            <h3 className="text-zinc-400 font-semibold text-sm">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a
                  target="_blank"
                  href="https://sites.google.com/asymmetri.in/prescribe-life-policies/home"
                  className="text-white hover:text-theme transition-colors"
                >
                  Policies and Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4 mb-8">
          <a
            href="#"
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
            className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors"
          >
            <Instagram className="w-6 h-6 text-white" />
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors"
          >
            <Facebook className="w-6 h-6 text-white" />
          </a>
        </div>

        {/* Bottom section */}
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
        </div>
      </div>
    </footer>
  );
}
