"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FadeRise } from "@/components/FadeRise";

const teamMembers = [
  {
    name: "Oli Johnson",
    title: "Founder & CEO",
    description:
      "As Founder and CEO of PrescribeLife.AI, I lead with a clear mission: to help high performers build lasting resilience without sacrificing ambition. My work blends strategic vision, product thinking, and lived experience to shape a company that prioritises impact over noise.",
    image: "/oli-johnson.jpg",
  },
  {
    name: "Dr. Neetu Johnson M.D.",
    title: "Co-Founder & Chief Medical Officer",
    description:
      "As Co-Founder and Chief Medical Officer, I bring two decades of clinical expertise to our mission of redefining how we measure and manage resilience in high-performing individuals.",
    image: "/neetu-johnson.jpg",
  },
  {
    name: "Jessica Malach",
    title: "Head of Product & Commercialization Strategy",
    description:
      "I lead product development and go-to-market strategy, bringing 20 years of experience scaling startups and leading brand turnarounds across wellness and tech.",
    image: "/jessica-malach.jpg",
  },
  {
    name: "Madelein van Zyl",
    title: "Fractional CFO",
    description:
      "As a Fractional CFO, I guide startups and scale-ups toward financial clarity, operational efficiency, and sustainable growth.",
    image: "/Madelein-van-Zyl.jpeg",
  },
  {
    name: "Annè Nortman",
    title: "Operations and Project Lead",
    description:
      "I lead strategic operations and project delivery, with a focus on building scalable systems, aligning cross-functional teams, and driving initiatives.",
    image: "/anne-nortman.JPG",
  },
  {
    name: "Laura Basson",
    title: "Project Coordinator",
    description:
      "As Project Coordinator, I help ensure seamless project execution by facilitating clear communication and managing timelines.",
    image: "/laura-basson.jpeg",
  },
  {
    name: "Marvin Noveda",
    title: "VA & Social Media Manager",
    description:
      "As VA and Social Media Manager, I manage our digital presence across platforms and provide day-to-day support to drive smooth operations and brand consistency.",
    image: "/marvin-noveda.jpg",
  },
  {
    name: "Divij Vidhi Handa",
    title: "Product Advisor",
    description:
      "As a Product Advisor, I support the development of our digital health platform by researching and curating scientific data and contributing to evidence-based datasets.",
    image: "/divij-vidhi-handa.jpg",
  },
  {
    name: "Ujwal Kumar",
    title: "Messaging & Content Lead",
    description:
      "I lead our messaging with a simple goal: to be understood. I create clear, persuasive content that connects with users and drives action.",
    image: "/ujwal-kumar.png",
  },
];

const advisors = [
  {
    name: "Professor Rajat Gupta",
    title: "Clinical Advisor – Paediatric Neurology & Neurorehabilitation",
    description:
      "Consultant Paediatric Neurologist and Lead Consultant for Paediatric Neurorehabilitation Service, with honorary professorships at Aston University and the University of Birmingham.",
    image: "/professor-rajat-gupta.jpg",
  },
];

export default function TeamPage() {
  return (
    <main className="space-y-8 relative pt-8 overflow-hidden max-w-full">
      <motion.div
        style={{
          top: "3%",
          left: "50%",
          width: "50rem",
          aspectRatio: "1/1",
          animation: true
            ? `animateCore 6s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite alternate-reverse forwards`
            : "none",
        }}
        className="blob rounded-full  absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none "
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden z-0">
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <div
            key={index}
            className="ripple-circle"
            style={{
              width: `${300 + index * 100}px`,
              height: `${300 + index * 100}px`,
              top: "50%",
              left: "50%",
              // animationDelay: `${index * 0.8}s`,
            }}
          />
        ))}
      </div>
      {/* Team Section */}
      <section className="flex flex-col justify-center items-center min-h-[80vh] space-y-4 max-md:space-y-3 pt-6 max-md:pt-6 px-4 max-md:px-2 mx-4">
        <FadeRise delay={0.05}>
          <div className="text-6xl max-md:text-4xl font-semibold flex flex-col items-center mb-4 mt-10 max-md:text-center">
            Meet the <span className="text-theme">Team</span>
          </div>
          <p className="text-zinc-300 mt-2 max-w-4xl mx-auto text-center text-lg max-md:text-base leading-relaxed px-4 max-md:px-2 mb-3">
            The experts and innovators behind PrescribeLife.AI, bringing
            together neuroscience, technology, and coaching expertise to help
            you perform better and lead with resilience.
          </p>
        </FadeRise>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl w-full">
          {teamMembers.map((member, i) => (
            <FadeRise key={i} delay={i * 0.08} className="min-h-96">
              <div className="rounded-2xl p-6 max-md:p-4 bg-gradient-to-b from-zinc-900/70 to-black/80 border border-white/10 ring-1 ring-white/10 shadow-[0_8px_32px_-16px_rgba(0,0,0,0.6)] flex flex-col items-center text-center space-y-3 h-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover object-top rounded-full"
                />
                <h3 className="text-white text-2xl max-md:text-xl font-semibold leading-snug">
                  {member.name}
                </h3>
                <p className="text-theme text-sm font-medium">{member.title}</p>
                <p className="text-zinc-300 mt-2 leading-relaxed text-sm inter">
                  {member.description}
                </p>
              </div>
            </FadeRise>
          ))}
        </div>
      </section>

      {/* Advisors Section */}
      <section className="flex flex-col items-center justify-center py-14 max-md:py-10 px-6 max-md:px-3 space-y-6 bg-black">
        <FadeRise>
          <h2 className="text-4xl max-md:text-3xl font-semibold text-white text-center">
            <span className="text-theme">Advisors</span>
          </h2>
          <p className="text-zinc-300 text-lg mt-3 leading-relaxed text-center max-w-4xl">
            World-class experts in neuroscience, coaching, and behavioral change
            guiding our mission.
          </p>
        </FadeRise>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl w-full">
          {advisors.map((advisor, i) => (
            <FadeRise key={i} delay={i * 0.08} className="min-h-96">
              <div className="rounded-2xl p-6 max-md:p-4 bg-gradient-to-b from-zinc-900/70 to-black/80 border border-white/10 ring-1 ring-white/10 shadow-[0_8px_32px_-16px_rgba(0,0,0,0.6)] flex flex-col items-center text-center space-y-3 h-full">
                <Image
                  src={advisor.image}
                  alt={advisor.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover rounded-full"
                />
                <h3 className="text-white text-2xl max-md:text-xl font-semibold leading-snug">
                  {advisor.name}
                </h3>
                <p className="text-theme text-sm font-medium">
                  {advisor.title}
                </p>
                <p className="text-zinc-300 mt-2 leading-relaxed text-sm inter">
                  {advisor.description}
                </p>
              </div>
            </FadeRise>
          ))}
        </div>
      </section>
    </main>
  );
}
