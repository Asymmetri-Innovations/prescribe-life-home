"use client";
// import Image from "next/image";
// import { FadeRise } from "@/components/FadeRise";
// import { MagicCard } from "@/components/MagicCard";
// import { Title } from "@/components/Title";

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

// export default function OurTeamPage() {
//   return (
//     <main className="space-y-32 relative pt-16 overflow-x-hidden max-w-full">
//       <section className="flex flex-col items-center justify-center space-y-10 max-md:space-y-6 pt-16 max-md:pt-8 px-4 max-md:px-2">
//         <FadeRise delay={0.05}>
//           <Title text="Meet the Team" />
//           <p className="text-zinc-300 mt-4 max-w-4xl mx-auto text-center text-lg max-md:text-base leading-relaxed px-4 max-md:px-2 mb-5">
//             The experts and innovators behind PrescribeLife.AI, bringing
//             together neuroscience, technology, and coaching expertise to help
//             you perform better and lead with resilience.
//           </p>
//         </FadeRise>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl w-full">
//           {teamMembers.map((member, i) => (
//             <FadeRise key={i} delay={i * 0.1}>
//               <MagicCard>
//                 <div className="rounded-2xl p-8 max-md:p-6 bg-gradient-to-b from-zinc-900/70 to-black/80 border border-white/10 ring-1 ring-white/10 shadow-[0_16px_48px_-20px_rgba(0,0,0,0.6)] flex flex-col items-center text-center space-y-4 h-full">
//                   <Image
//                     src={member.image}
//                     alt={member.name}
//                     width={96}
//                     height={96}
//                     className="w-24 h-24 object-cover rounded-full"
//                   />
//                   <h3 className="text-white text-2xl max-md:text-xl font-semibold leading-snug">
//                     {member.name}
//                   </h3>
//                   <p className="text-theme text-sm max-md:text-xs font-medium">
//                     {member.title}
//                   </p>
//                   <p className="text-zinc-300 text-base max-md:text-sm leading-relaxed mt-4">
//                     {member.description}
//                   </p>
//                 </div>
//               </MagicCard>
//             </FadeRise>
//           ))}
//         </div>
//       </section>

//       <section className="flex flex-col items-center justify-center space-y-10 max-md:space-y-6 pt-16 max-md:pt-8 px-4 max-md:px-2">
//         <FadeRise delay={0.05}>
//           <Title text="Advisors" />
//           <p className="text-zinc-300 mt-4 max-w-4xl mx-auto text-center text-lg max-md:text-base leading-relaxed px-4 max-md:px-2 mb-5">
//             World-class experts in neuroscience, coaching, and behavioral change
//             guiding our mission
//           </p>
//         </FadeRise>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl w-full">
//           {advisors.map((advisor, i) => (
//             <FadeRise key={i} delay={i * 0.1}>
//               <MagicCard>
//                 <div className="rounded-2xl p-8 max-md:p-6 bg-gradient-to-b from-zinc-900/70 to-black/80 border border-white/10 ring-1 ring-white/10 shadow-[0_16px_48px_-20px_rgba(0,0,0,0.6)] flex flex-col items-center text-center space-y-4 h-full">
//                   <Image
//                     src={advisor.image}
//                     alt={advisor.name}
//                     width={96}
//                     height={96}
//                     className="w-24 h-24 object-cover rounded-full"
//                   />
//                   <h3 className="text-white text-2xl max-md:text-xl font-semibold leading-snug">
//                     {advisor.name}
//                   </h3>
//                   <p className="text-theme text-sm max-md:text-xs font-medium">
//                     {advisor.title}
//                   </p>
//                   <p className="text-zinc-300 text-base max-md:text-sm leading-relaxed mt-4">
//                     {advisor.description}
//                   </p>
//                 </div>
//               </MagicCard>
//             </FadeRise>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }

import { Newsletter } from "@/components/Newsletter";
import Image from "next/image";
import { FadeRise } from "@/components/FadeRise";
import { motion } from "motion/react";
import { MagicCard } from "@/components/MagicCard";
export default function TeamPage() {
  return (
    <main className="space-y-32 relative pt-16 overflow-x-hidden max-w-full">
      <Image
        className="w-[150vw] h-[150vh] absolute rotate-30 rotate-animation-slow scale-110 z-[-1] overflow-x-hidden max-w-full"
        src="/bggradient.png"
        width={300}
        height={300}
        alt="bg"
      />
      <section className="flex flex-col items-center justify-center space-y-10 max-md:space-y-6 pt-16 max-md:pt-8 px-4 max-md:px-2">
        <FadeRise delay={0.05}>
          <div className="text-6xl max-md:text-4xl font-medium flex flex-col items-center mb-6">
            Meet the <span className="text-theme">Team!</span>
          </div>
          <p className="text-zinc-300 mt-4 max-w-4xl mx-auto text-center text-lg max-md:text-base leading-relaxed px-4 max-md:px-2 mb-5">
            The experts and innovators behind PrescribeLife.ai, bringing
            together neuroscience, technology, and coaching expertise to help
            you perform better and lead with resilience.
          </p>
        </FadeRise>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl w-full items-stretch">
          {teamMembers.map((member, i) => (
            <FadeRise key={i} delay={i * 0.1}>
              <MagicCard>
                <div
                  className="rounded-2xl p-8 max-md:p-6 bg-gradient-to-b from-zinc-900/70 to-black/80 border border-white/10 ring-1 ring-white/10 shadow-[0_16px_48px_-20px_rgba(0,0,0,0.6)] 
                        flex flex-col items-center text-center space-y-4 h-full min-h-[420px] max-h-[420px]"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-24 h-24 object-cover rounded-full"
                  />
                  <h3 className="text-white text-2xl max-md:text-xl font-semibold leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-theme text-sm max-md:text-xs font-medium">
                    {member.title}
                  </p>
                  <p className="text-zinc-300 text-base max-md:text-sm leading-relaxed mt-4 line-clamp-5">
                    {member.description}
                  </p>
                </div>
              </MagicCard>
            </FadeRise>
          ))}
        </div>
      </section>
      <section className="flex flex-col items-center justify-center space-y-10 max-md:space-y-6 pt-16 max-md:pt-8 px-4 max-md:px-2">
        <FadeRise delay={0.05}>
          <div className="text-6xl max-md:text-4xl font-medium flex flex-col items-center mb-6">
            <span className="text-theme">Advisors</span>
          </div>
          <p className="text-zinc-300 mt-4 max-w-4xl mx-auto text-center text-lg max-md:text-base leading-relaxed px-4 max-md:px-2 mb-5">
            The experts and innovators behind PrescribeLife.ai, bringing
            together neuroscience, technology, and coaching expertise to help
            you perform better and lead with resilience.
          </p>
        </FadeRise>
        <div className="flex flex-wrap justify-center gap-6 max-w-7xl w-full">
          {advisors.map((advisor, i) => (
            <FadeRise key={i} delay={i * 0.1} className="w-full max-w-sm">
              <MagicCard>
                <div className="rounded-2xl p-8 max-md:p-6 bg-gradient-to-b from-zinc-900/70 to-black/80 border border-white/10 ring-1 ring-white/10 shadow-[0_16px_48px_-20px_rgba(0,0,0,0.6)] flex flex-col items-center text-center space-y-4 h-full">
                  <Image
                    src={advisor.image}
                    alt={advisor.name}
                    width={96}
                    height={96}
                    className="w-24 h-24 object-cover rounded-full"
                  />
                  <h3 className="text-white text-2xl max-md:text-xl font-semibold leading-snug">
                    {advisor.name}
                  </h3>
                  <p className="text-theme text-sm max-md:text-xs font-medium">
                    {advisor.title}
                  </p>
                  <p className="text-zinc-300 text-base max-md:text-sm leading-relaxed mt-4">
                    {advisor.description}
                  </p>
                </div>
              </MagicCard>
            </FadeRise>
          ))}
        </div>
      </section>

      <section>
        <FadeRise>
          <Newsletter />
        </FadeRise>
      </section>
      <section></section>
    </main>
  );
}
