import type { Metadata } from "next";
import { Geist, Geist_Mono, Open_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LS from "@/components/LS";
import Footer from "@/components/Footer";

const geistSans = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "PrescribeLife.AI - Amplify Your Coaching Genius with Data-Driven Insights",
  description:
    "PrescribeLife provides real-time data and behavioral analysis tools for performance coaches. Scale your unique method for deeper, more lasting client transformations with evidence-based coaching intelligence.",
  keywords: [
    "performance coaching",
    "data-driven coaching",
    "behavioral analysis",
    "coaching tools",
    "client transformation",
    "real-time biometric data",
    "AI coaching platform",
    "coaching intelligence",
    "coaching dashboard",
    "prescribe life",
  ],
  authors: [{ name: "PrescribeLife.AI" }],
  creator: "PrescribeLife.AI",
  publisher: "PrescribeLife.AI",
  openGraph: {
    title: "PrescribeLife.AI - Amplify Your Coaching Genius",
    description:
      "Real-time data and behavioral analysis tools for performance coaches. Scale your unique method for deeper, more lasting client transformations.",
    url: "https://prescribelife.ai",
    siteName: "PrescribeLife.AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PrescribeLife.AI - Data-Driven Coaching Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PrescribeLife.AI - Amplify Your Coaching Genius",
    description:
      "Real-time data and behavioral analysis tools for performance coaches. Scale your unique method for deeper, more lasting client transformations.",
    images: ["/og-image.png"],
    creator: "@prescribelifeai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <LS></LS>
        <Navbar></Navbar>
        {children}
        <Footer />
      </body>
    </html>
  );
}
