"use client";

import type React from "react";
import { useState } from "react";
import { FadeRise } from "./FadeRise";

export function Newsletter() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", consent: false }); // <-- add state object

  return (
    // <section className="bg-gradient-to-br from-pink-300 to-theme rounded-3xl p-12 mx-4 md:mx-16 overflow-x-hidden">
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    //     <FadeRise>
    //       <div className="space-y-8">
    //         <div className="space-y-4">
    //           <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
    //             The Future of Performance Coaching, Delivered Weekly
    //           </h2>
    //           <p className="text-black/80 text-lg leading-relaxed">
    //             Join elite coaches. Get insight, strategy, and data-driven
    //             breakthroughs in your inbox.
    //           </p>
    //         </div>

    //         <div className="space-y-6">
    //           <div className="space-y-2">
    //             <label className="text-black font-medium text-sm">
    //               Your Name
    //             </label>
    //             <input
    //               type="text"
    //               name="name"
    //               placeholder="What should we call you..."
    //               required
    //               value={form.name}
    //               onChange={(e) =>
    //                 setForm((f) => ({ ...f, name: e.target.value }))
    //               }
    //               className="w-full p-4 rounded-xl bg-white/90 text-black placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-black/20"
    //             />
    //           </div>
    //           <div className="space-y-2">
    //             <label className="text-black font-medium text-sm">Email</label>
    //             <input
    //               type="email"
    //               name="email"
    //               placeholder="Your best email"
    //               required
    //               value={form.email}
    //               onChange={(e) =>
    //                 setForm((f) => ({ ...f, email: e.target.value }))
    //               }
    //               className="w-full p-4 rounded-xl bg-white/90 text-black placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-black/20"
    //             />
    //           </div>
    //           <div className="flex items-center gap-3">
    //             <input
    //               type="checkbox"
    //               id="newsletter-consent"
    //               name="consent"
    //               value="yes"
    //               required
    //               checked={form.consent}
    //               onChange={(e) =>
    //                 setForm((f) => ({ ...f, consent: e.target.checked }))
    //               }
    //               className="w-4 h-4 rounded border-2 border-black/30"
    //             />
    //             <label
    //               htmlFor="newsletter-consent"
    //               className="text-black text-sm"
    //             >
    //               I agree to receive updates and promotions from
    //               prescribelife.ai
    //             </label>
    //           </div>

    //           {error && (
    //             <p className="text-sm text-black/80 bg-white/60 rounded-lg px-3 py-2">
    //               {error}
    //             </p>
    //           )}

    //           <button
    //             onClick={async () => {
    //               async function onSubmit() {
    //                 setError(null);
    //                 setStatus("loading");

    //                 if (!form.name || !form.email || !form.consent) {
    //                   setError("Please provide your name, email, and consent.");
    //                   setStatus("error");
    //                   return;
    //                 }
    //                 const id =
    //                   "AKfycbylm69uDRgTfueVkNRsYBA5tk9HEu8Nt35gUaJz_iIVObavJtoALVRGa0MxuKyXRM3iZw";
    //                 const url = `https://script.google.com/macros/s/${id}/exec`;

    //                 const payload = {
    //                   name: form.name,
    //                   email: form.email,
    //                   consent: form.consent ? "yes" : "no",
    //                 };

    //                 console.log(payload);

    //                 try {
    //                   await fetch(url, {
    //                     method: "POST",
    //                     mode: "no-cors",
    //                     headers: { "Content-Type": "application/json" },
    //                     body: JSON.stringify(payload),
    //                   }).then((res) => {
    //                     console.log("ungabungasmash");
    //                   });
    //                   setStatus("success");
    //                 } catch (err) {
    //                   console.log(err);
    //                 }
    //                 // try {
    //                 //   console.log(JSON.stringify(payload));
    //                 //   setStatus("success");
    //                 // } catch (err) {
    //                 //   console.log(err);
    //                 //   setStatus("error");
    //                 // }
    //               }
    //               await onSubmit();
    //             }}
    //             // type="submit"
    //             // disabled={status === "loading" || status === "success"}
    //             className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-zinc-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
    //           >
    //             {status === "loading"
    //               ? "Submitting..."
    //               : status === "success"
    //               ? "You're in! ✅"
    //               : "Sign Up for the Newsletter"}
    //           </button>

    //           <p className="text-xs text-black/70">
    //             We respect your privacy. Unsubscribe anytime.
    //           </p>
    //         </div>
    //       </div>
    //     </FadeRise>

    //     <FadeRise delay={0.15}>
    //       <div className="bg-zinc-800 rounded-3xl h-80 md:h-96" />
    //     </FadeRise>
    //   </div>
    // </section>
    <></>
  );
}
