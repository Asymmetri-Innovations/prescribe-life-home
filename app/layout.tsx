import type { Metadata } from "next";
import { Geist, Geist_Mono, Open_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LS from "@/components/LS";
import Footer from "@/components/Footer";
import Cookie from "@/components/Cookie";
import Script from "next/script";

const geistSans = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prescribelife.ai"),
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
    "PrescribeLife.AI",
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
        url: "https://prescribe-life-home.vercel.app/og.png", // fallback if original filename exists
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
    images: ["https://prescribe-life-home.vercel.app/og.png"],
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
      <head>
        {/* Anti-flickering script */}
        <Script id="anti-flicker" strategy="beforeInteractive">
          {`
var timeout = 3000; // Timeout value to remove the flicker (in milliseconds)
!function(h,i,d,e){var t,n=h.createElement("style");n.id=e,n.innerHTML="body{opacity:0}",h.head.appendChild(n),t=d,i.rmfk=function(){var t=h.getElementById(e);t&&t.parentNode.removeChild(t)},setTimeout(i.rmfk,t)}(document,window,timeout,"abhide");
          `}
        </Script>

        {/* A/B Testing Script (Place in <HEAD> for speed & no flicker) */}
        <Script
          id="mida-optimize"
          src="https://cdn.mida.so/js/optimize.js?key=zb2omn9LYoZPJdkpNeDEl8"
          async
          strategy="beforeInteractive"
        />

        {/* Site Behaviour tracking script */}
        <Script id="sitebehaviour" strategy="beforeInteractive">
          {`
(function() {
  try {
    if (window.location && window.location.search && window.location.search.indexOf('capture-sitebehaviour-heatmap') !== -1) {
      sessionStorage.setItem('capture-sitebehaviour-heatmap', '_');
    }
    var sbSiteSecret = '5912162f-f119-4e5a-9882-c507c2758d7b';
    window.sitebehaviourTrackingSecret = sbSiteSecret;
    var scriptElement = document.createElement('script');
    scriptElement.defer = true;
    scriptElement.id = 'site-behaviour-script-v2';
    scriptElement.src = 'https://sitebehaviour-cdn.fra1.cdn.digitaloceanspaces.com/index.min.js?sitebehaviour-secret=' + sbSiteSecret;
    document.head.appendChild(scriptElement);
  } catch (e) { console.error(e); }
})();
          `}
        </Script>
        <Script id="wiser-notify" strategy="afterInteractive">
          {`!function () { if (window.t4hto4) console.log("social proof pixel installed multiple time in this page"); else { window.t4hto4 = !0; var t = document, e = window, n = function () { var e = t.createElement("script"); e.type = "text/javascript", e.async = !0, e.src = "https://pt.wisernotify.com/pixel.js?ti=aavf2ojlav4wzuc", document.body.appendChild(e) }; "complete" === t.readyState ? n() : window.attachEvent ? e.attachEvent("onload", n) : e.addEventListener("load", n, !1) } }();`}
        </Script>
      </head>
      <body className={`${geistSans.className} antialiased`}>
        {/* Start-of-body scripts */}
        <Script id="ehapi" strategy="afterInteractive">
          {`var EhAPI = EhAPI || {}; EhAPI.after_load = function(){EhAPI.set_account('7q5p0l6h5hqp18mlodhhnkqs31', 'prescribelife');EhAPI.execute('rules');};(function(d,s,f) {var sc=document.createElement(s);sc.type='text/javascript';sc.async=true;sc.src=f;var m=document.getElementsByTagName(s)[0];m.parentNode.insertBefore(sc,m);})(document, 'script', '//d2p078bqz5urf7.cloudfront.net/jsapi/ehform.js?v' + new Date().getHours());`}
        </Script>
        <Script id="crisp-chat" strategy="afterInteractive">
          {`window.$crisp=[];window.CRISP_WEBSITE_ID="2fb0716b-033c-4528-95bf-e05815fc9f66";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`}
        </Script>

        <LS></LS>
        <Navbar></Navbar>
        <Cookie></Cookie>
        {children}

        {/* EngageHub form embed */}
        <div
          className="engage-hub-form-embed"
          id="eh_form_5026213480103936"
          data-id="5026213480103936"
        ></div>

        <Footer />
      </body>
    </html>
  );
}
