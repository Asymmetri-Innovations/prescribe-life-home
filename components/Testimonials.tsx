// Adjust import path as needed
import { User } from "lucide-react";
import { Marquee } from "./Marquee";
import { FadeRise } from "./FadeRise";

const testimonials = [
  {
    quote:
      "It's the missing link in what I'm doing — that biometric feedback loop.",
    name: "Sarah Mitchell",
    title: "Executive Coach",
    location: "UK",
  },
  {
    quote:
      "When we begin receiving this data and understanding ourselves, we can customise the best possible path towards health and well-being.",
    name: "Marcus Johnson",
    title: "Leadership Coach",
    location: "US",
  },
  {
    quote:
      "Technology like this, when used well, can truly help us prevent burnout and sustain resilience.",
    name: "Emily Chen",
    title: "Founder & Coach",
    location: "Canada",
  },
  {
    quote:
      "Sometimes we can do as much as we can with mindset and emotional intelligence, but physiology is the missing piece. This platform bridges that gap.",
    name: "James Robertson",
    title: "Resilience Coach",
    location: "UK",
  },
  {
    quote:
      "This platform is helping us move beyond stress and burnout by using data to truly understand ourselves and our clients.",
    name: "Isabella Rodriguez",
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
    <section className="flex flex-col items-center gap-10 max-md:gap-6">
      <FadeRise>
        <div className="text-3xl max-md:text-2xl text-center">
          What Other <span className="text-theme">Coaches</span> Are Saying
        </div>
      </FadeRise>

      <Marquee pauseOnHover className="[--duration:25s] overflow-x-hidden">
        {testimonials.map((testimonial, i) => (
          <FadeRise key={i} delay={i * 0.05} className="mx-4">
            <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 w-96 h-64 max-md:w-80 max-md:h-60 p-6 max-md:p-4 rounded-2xl border border-white/10 flex flex-col justify-between gap-4 max-md:gap-3">
              <p className="text-white text-base max-md:text-sm leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3 mt-2">
                <div className="w-12 h-12 rounded-full bg-theme/20 flex items-center justify-center">
                  <User className="w-6 h-6 text-theme" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm max-md:text-xs">
                    {testimonial.name}
                  </h4>
                  <p className="text-zinc-400 text-xs max-md:text-2xs">
                    {testimonial.title}, {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          </FadeRise>
        ))}
      </Marquee>

      <FadeRise delay={0.25}>
        <div className="text-lg max-md:text-base text-center">
          Let us show you how to multiply your revenue, not your workload.
        </div>
      </FadeRise>
    </section>
  );
}
