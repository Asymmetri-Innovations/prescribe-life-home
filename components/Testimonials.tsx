// Adjust import path as needed
import { User } from "lucide-react";
import { Marquee } from "./Marquee";
import { FadeRise } from "./FadeRise";

const testimonials = [
  {
    quote:
      "It's the missing link in what I'm doing — that biometric feedback loop.",
    name: "- Sarah Mitchell",
    title: "Executive Coach",
    location: "UK",
  },
  {
    quote:
      "When we begin receiving this data and understanding ourselves, we can customise the best possible path towards health and well-being.",
    name: " - Marcus Johnson",
    title: "Leadership Coach",
    location: "US",
  },
  {
    quote:
      "Technology like this, when used well, can truly help us prevent burnout and sustain resilience.",
    name: " - Emily Chen",
    title: "Founder & Coach",
    location: "Canada",
  },
  {
    quote:
      "Sometimes we can do as much as we can with mindset and emotional intelligence, but physiology is the missing piece. This platform bridges that gap.",
    name: " - James Robertson",
    title: " - Resilience Coach",
    location: "UK",
  },
  {
    quote:
      "This platform is helping us move beyond stress and burnout by using data to truly understand ourselves and our clients.",
    name: " Isabella Rodriguez",
    title: "Well-being Consultant",
    location: "Europe",
  },
  {
    quote:
      "A platform like this proves especially valuable in new markets — for example, supporting my clients in the Middle East.",
    name: "David Thompson",
    title: "Executive Leadership Coach & Founder",
    location: "UK",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="flex flex-col items-center gap-6 md:gap-8 lg:gap-10 overflow-hidden px-4 md:px-6">
      <FadeRise>
        <div className="font-section-title text-center px-2">
          What Other <span className="text-gradient">Coaches</span> Are Saying
        </div>
      </FadeRise>

      <Marquee pauseOnHover className="[--duration:25s] overflow-x-hidden">
        {testimonials.map((testimonial, i) => (
          <div key={i} className="bg-gradient-to-b from-zinc-800 to-zinc-900 w-72 sm:w-80 md:w-96 min-h-[200px] sm:h-56 p-4 sm:p-5 md:p-6 rounded-2xl border border-white/10 flex flex-col justify-between gap-3 md:gap-4">
            <p className="font-card-desc text-white">
              "{testimonial.quote}"
            </p>
            <div className="flex items-center gap-2 sm:gap-3 mt-1 sm:mt-2">
              <div>
                <h4 className="font-card-desc text-white font-semibold">
                  {testimonial.name}
                </h4>
                <p className="font-card-desc text-zinc-400">
                  {testimonial.title}, {testimonial.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Marquee>

      <FadeRise delay={0.25}>
        <div className="font-section-desc text-center px-4">
          Let us show you how to multiply your revenue, not your workload.
        </div>
      </FadeRise>
    </section>
  );
}
