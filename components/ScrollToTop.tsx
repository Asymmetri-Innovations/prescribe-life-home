"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const path = usePathname();
  useEffect(() => {
    if (window) {
      window.scrollTo(0, 0);
    }
  }, [path]);
  return <div></div>;
}
