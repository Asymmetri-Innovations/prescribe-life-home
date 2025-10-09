"use client";

import { useEffect } from "react";

export default function RedirectPage() {
  useEffect(() => {
    window.location.href =
      "https://sites.google.com/asymmetri.in/prescribe-life-policies/home";
  }, []);

  return (
    <p className="min-h-screen flex items-center justify-center">
      Redirecting...
    </p>
  );
}
