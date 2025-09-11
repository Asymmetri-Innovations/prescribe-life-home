import Explain from "@/components/Explain";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { MagicCard } from "@/components/MagicCard";
import { Marquee } from "@/components/Marquee";
import { NumberTicker } from "@/components/NumberTicker";
import { Crown, Eye, User, Timer, Lightbulb, Target } from "lucide-react";
import Image from "next/image";
export default function Home() {
  const steps = [
    {
      id: "01",
      title: "Invite Your Client",
      description:
        "They download the PrescribeLife.ai app and connect their existing wearables in minutes.",
      subtitle: "No extra hardware, no tech headaches.",
      icon: User, // Pink user with plus icon
    },
    {
      id: "02",
      title: "Coach with Confidence",
      description: "Walk into every session already knowing where to focus.",
      subtitle:
        "Use data-informed topics to guide powerful conversations, prevent burnout before it hits, and lead your clients to breakthroughs they never thought possible.",
      icon: Eye, // Pink eye with rays icon
    },
    {
      id: "03",
      title: "Uncover Hidden Patterns",
      description:
        "Our platform starts translating their real-time biometric and behavioral data into simple, actionable insights.",
      subtitle:
        "You'll instantly see their readiness, recovery, and resilience patterns on your private coaching portal.",
      icon: Crown, // Pink crown/brain icon
    },
  ];

  return (
    <main className="space-y-32  relative">
      <Image
        className="w-[150vw] h-[150vh] absolute rotate-30 rotate-animation-slow scale-110 z-[-1]"
        src={"/bggradient.png"}
        width={300}
        height={300}
        alt=""
      ></Image>
      <section
        id="hero"
        className="min-h-screen flex justify-center items-center flex-col space-y-6 pt-32"
      >
        <div className="text-6xl font-medium">
          Amplify Your <span className="text-gradient">Coaching Genius.</span>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          You provide the genius. We provide the real-time data and behavioral
          analysis tools. Together, we'll scale your unique method for deeper,
          more lasting client transformations.
        </div>
        <button className="bg-white/16 backdrop-blur-lg p-3 rounded-full border-[0.5px] border-white/30 cursor-pointer">
          Request a Demo Call
        </button>
        <div className="flex flex-col justify-center items-center">
          <Image src={"/hero.png"} width={700} height={700} alt=""></Image>
          <Image src={"/security.png"} width={500} height={500} alt=""></Image>
        </div>
      </section>
      <section className="flex justify-center items-center flex-col space-y-8">
        <Title text="Powerful Insights, Radically Simple to Use" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {steps.map((step) => (
            <MagicCard key={step.id}>
              <div className="h-full rounded-2xl p-8 border border-white/10 relative overflow-hidden space-y-6">
                <div className="absolute top-6 right-6 text-6xl font-bold text-white/30 opacity-50">
                  {step.id}
                </div>

                <step.icon size={64} className="text-theme"></step.icon>

                <h3 className="text-2xl font-semibold text-white mb-4">
                  {step.title}
                </h3>

                <p className="text-zinc-400 mb-4 leading-relaxed">
                  {step.description}
                </p>
                <p className="text-white font-medium">{step.subtitle}</p>
              </div>
            </MagicCard>
          ))}
        </div>
      </section>
      <section className="space-y-6 flex flex-col justify-center items-center relative">
        <Image
          className="w-screen h-screen absolute scale-110 z-[-1]"
          src={"/bggradient2.png"}
          width={300}
          height={300}
          alt=""
        ></Image>
        <Title text="Your Impact is Capped by Your Calendar. Until Now." />
        <div>Next Generation Performance Coaching Dashboard</div>
        <div className="flex">
          <img className="w-84 translate-x-32" src={"/phone.png"}></img>
          <img className="w-84 z-[88]" src={"/phone.png"}></img>
          <img className="w-84 z-[90] -translate-x-32" src={"/phone.png"}></img>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-16">
        <div className="w-full flex justify-end">
          <div className="rounded-3xl p-8 border-2 border-white/20 relative overflow-hidden max-w-lg font ">
            {/* Curved design element */}
            <div className="absolute top-0 right-0 ">
              <img className="w-40" src="/carddesgn.png" alt="" />
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-6">
              <div className="">
                <h2 className="text-4xl font-bold text-white mb-2">Before</h2>
                <p className="text-4xl text-zinc-400">
                  The Manual, <br />
                  Reactive Grind
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-10 bg-theme rounded-full mt-1"></div>
                  <p className="text-white leading-relaxed">
                    You have a great session based on what the client tells you
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-1 h-10 bg-theme rounded-full mt-1"></div>
                  <p className="text-white leading-relaxed">
                    You assign practices, hoping they remember to do them
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-1 h-10 bg-theme rounded-full mt-1"></div>
                  <p className="text-white leading-relaxed">
                    You wait two weeks, completely blind to their daily
                    struggles
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-1 h-10 bg-theme rounded-full mt-1"></div>
                  <p className="text-white leading-relaxed">
                    You manually chase them for updates or ask them to export
                    messy data
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-1 h-10 bg-theme rounded-full mt-1"></div>
                  <p className="text-white leading-relaxed">
                    You spend hours trying to piece together spreadsheets and
                    notes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-white/15 to-white/20 rounded-3xl p-8 border-2 border-white/20 relative overflow-hidden max-w-lg font h-full">
          {/* Curved design element */}
          <div className="absolute bottom-0 right-0 ">
            <img className="w-40" src="/carddesign2.png" alt="" />
          </div>

          {/* Content */}
          <div className="relative z-10 space-y-6">
            <div className="">
              <h2 className="text-4xl font-bold text-white mb-2">After</h2>
              <p className="text-4xl text-zinc-400">
                The Automatic, <br />
                Proactive System
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-1 h-10 bg-theme rounded-full mt-1"></div>
                <p className="text-white leading-relaxed">
                  Client’s biometric data streams directly to your dashboard
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-1 h-10 bg-theme rounded-full mt-1"></div>
                <p className="text-white leading-relaxed">
                  The adaptive system supports their behavioral change 24/7
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-1 h-10 bg-theme rounded-full mt-1"></div>
                <p className="text-white leading-relaxed">
                  Receive AI-Surfaced insights on what to focus
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-1 h-10 bg-theme rounded-full mt-1"></div>
                <p className="text-white leading-relaxed">
                  You coach with undeniable precision and foresight
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center gap-16">
        <Title text="Powered By" />
        <div className="flex justify-center items-center font divide-x-2 divide-white w-full">
          <div className="flex justify-center items-center flex-col w-1/3">
            <div className="text-6xl font-semibold">
              <NumberTicker className="" value={8}></NumberTicker>+
            </div>
            <div className="w-3/4 text-center text-white/50">
              Days of real-world behavioral data
            </div>
          </div>
          <div className="flex justify-center items-center flex-col w-1/3">
            <div className="text-6xl font-semibold">
              <NumberTicker className="" value={500}></NumberTicker>K+
            </div>
            <div className="w-3/4 text-center text-white/50">
              User profiles analyzed
            </div>
          </div>
          <div className="flex justify-center items-center flex-col w-1/3">
            <div className="text-6xl font-semibold">
              <NumberTicker className="" value={50}></NumberTicker>K+
            </div>
            <div className="w-3/4 text-center text-white/50">
              Clinical assesments training models across, stress, mood, sleep,
              and recovery
            </div>
          </div>
        </div>
      </section>
      <section>
        <Marquee className="[--duration:20s]">
          {[1, 2, 3, 4, 5].map((review) => (
            <div className=" bg-gradient-to-r from-white/15 to-white/20 w-64 p-7 rounded-xl border-2 border-white/20 flex flex-col justify-center items-center gap-3">
              <div className="w-15 h-15 rounded-full bg-white"></div>
              <div>Name</div>
            </div>
          ))}
        </Marquee>
      </section>
      <section className="flex flex-col justify-center items-center">
        <Title text="Your Next Coaching Session Could Be Your Best Ever." />
        <Title text="Here's How" className="text-theme" />
        <div className="grid grid-cols-2">
          <div className="max-w-xl  xl mx-auto mt-12 space-y-8 text-left relative">
            <img
              src="/qt.png"
              className="absolute top-0 left-0 -translate-x-16 -translate-y-16"
              alt=""
            />
            <img
              src="/qt.png"
              className="absolute bottom-0 right-0 translate-x-16 translate-y-16 rotate-180"
              alt=""
            />
            <div className="text-2xl font-medium text-white">
              How many sessions start the same way?
            </div>

            <div className="text-xl text-zinc-300 leading-relaxed">
              Your client shows up, exhausted, and you ask, "So, what should we
              focus on today?"
            </div>

            <div className="text-2xl font-medium text-theme my-8">
              They say, "I don't know, I'm tired."
            </div>

            <div className="text-xl text-zinc-300 leading-relaxed">
              And the first 20 minutes are spent just trying to uncover a
              starting point.
            </div>

            <div className="text-xl text-zinc-300 leading-relaxed mt-8">
              Valuable time is lost trying to navigate a client who is too "in
              it" to even know what they need.
            </div>
          </div>
          <div></div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-2">
          <div></div>
          <div className="max-w-xl mx-auto mt-12 space-y-8 text-left">
            <div className="text-3xl font-medium text-white mb-8">
              The PrescribeLife Way - Imagine this instead
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-1 h-16 bg-theme rounded-full mt-1 flex-shrink-0"></div>
                <p className="text-white leading-relaxed text-lg">
                  Ten days from now, before your next call, you open your
                  PrescribeLife.ai dashboard.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-1 h-12 bg-theme rounded-full mt-1 flex-shrink-0"></div>
                <p className="text-white leading-relaxed text-lg">
                  You instantly see your client's readiness scores have dipped.
                </p>
              </div>
            </div>

            <div className="text-white leading-relaxed text-lg mt-8">
              You see their sleep has been disrupted. And you see a note,
              surfaced by our AI, that they've been struggling with "all or
              nothing thinking" at work.
            </div>

            <div className="space-y-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="w-1 h-8 bg-theme rounded-full mt-1 flex-shrink-0"></div>
                <p className="text-white leading-relaxed text-lg">
                  You start the session with,
                </p>
              </div>

              <div className="text-2xl font-medium text-theme leading-relaxed ml-8 my-8">
                "I saw your readiness has been low this week, and a theme of
                'all or nothing' came up. Let's talk about that."
              </div>
            </div>

            <div className="text-white leading-relaxed text-lg mt-8">
              Suddenly, you've bypassed the fog and gone straight to the core
              issue.
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center flex-col">
        <div className="flex justify-start w-full px-16">
          <Title text="In Your First 10-14 Days, You Will" />
        </div>
        <div className="w-full px-4 md:px-16 mt-8">
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="flex-1 rounded-xl md:rounded-2xl border border-white/30 bg-gradient-to-b from-white/10 to-black/80 p-8">
              <Timer className="w-12 h-12 text-theme mb-6" />
              <h3 className="text-white font-semibold text-lg md:text-xl mb-4">
                Eliminate Wasted Time
              </h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Go from “What’s on your mind?” to “Here’s what the data is
                showing me”
              </p>
            </div>
            <div className="flex-1 rounded-xl md:rounded-2xl border border-white/30 bg-gradient-to-b from-white/10 to-black/80 p-8">
              <Lightbulb className="w-12 h-12 text-theme mb-6" />
              <h3 className="text-white font-semibold text-lg md:text-xl mb-4">
                Unlock Deeper Insights
              </h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Surface the real challenges that happen between sessions,
                turning every call into a breakthrough opportunity
              </p>
            </div>
            <div className="flex-1 rounded-xl md:rounded-2xl border border-white/30 bg-gradient-to-b from-white/10 to-black/80 p-8">
              <Target className="w-12 h-12 text-theme mb-6" />
              <h3 className="text-white font-semibold text-lg md:text-xl mb-4">
                Lead With Precision
              </h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Use objective insights to guide the conversation, even when your
                client is too exhausted to lead themselves
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex items-center justify-start gap-16">
        <div className="bg-white text-black rounded-none md:rounded-r-[300px] p-16 md:p-16 flex flex-col items-center justify-center relative overflow-hidden min-h-[400px] max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center leading-tight mb-6 max-w-2xl">
            Turn Your Expertise into a 5x to 10x Return
          </h2>
          <button className="bg-gradient-to-r from-theme to-pink-600 text-white font-semibold px-12 py-5 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 mb-8">
            Book a Personalized Demo Call
          </button>
          <p className="text-base text-zinc-600 text-center max-w-lg">
            Let us show you how to multiply your revenue, not your workload.
          </p>
        </div>

        {/* Right side cards positioned absolutely */}
        <div className=" flex flex-col gap-6 w-96">
          <div className="bg-[#1a1a1a] border border-white/20 rounded-3xl px-8 py-6 relative">
            <div className="absolute left-6 top-6 w-[3px] h-20 bg-theme rounded-full" />
            <p className="pl-10 text-lg leading-relaxed text-white">
              <span className="text-pink-400 font-semibold">Instantly add</span>{" "}
              high-value, datadriven programs clients love.
            </p>
          </div>
          <div className="bg-[#1a1a1a] border border-white/20 rounded-3xl px-8 py-6 relative">
            <div className="absolute left-6 top-6 w-[3px] h-20 bg-theme rounded-full" />
            <p className="pl-10 text-lg leading-relaxed text-white">
              <span className="text-pink-400 font-semibold">Confidently</span>{" "}
              introduce premium packages and new revenue streams.
            </p>
          </div>
        </div>
      </section>
      <Explain />
      <section className="flex flex-col justify-center items-center">
        <Title text="Trusted by Performance Coaches Behind Today's Most Influential Leaders" />
        <Marquee className="[--duration:20s]">
          {new Array(7).fill("x").map((_, index) => (
            <div
              key={index}
              className=" w-64 p-8 rounded-3xl  flex flex-col justify-center items-center gap-2 "
            >
              <div className="relative">
                <div className="w-36 h-36 rounded-full">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <img
                      src="/pfp.png"
                      alt="Jessica Malach"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white text-center">
                Jessica Malach
              </h3>

              <p className="text-zinc-400 text-center font-medium">
                Resilience Coach
              </p>

              <p className="text-zinc-500 text-sm text-center">14+ Years</p>
            </div>
          ))}
        </Marquee>
      </section>
      <section className="flex flex-col justify-center items-center gap-10">
        <div className="text-3xl text-center">
          What Other <span className="text-theme">Coaches</span> Are Saying
          about the New Way
        </div>
        <div>
          <Marquee pauseOnHover className="[--duration:20s]">
            {new Array(6).fill("x").map((_, index) => {
              return (
                <div
                  key={index}
                  className="bg-gradient-to-b from-zinc-800 to-zinc-900 w-96 p-6 rounded-2xl border border-white/10 flex flex-col gap-4 mx-4"
                >
                  {/* Quote */}
                  <p className="text-white text-base leading-relaxed ">
                    "This platform has completely transformed how I work with my
                    clients. The data insights have helped me create more
                    personalized coaching plans and track progress more
                    effectively."
                  </p>

                  {/* Profile section */}
                  <div className="flex items-center gap-3 mt-4">
                    {/* Profile Image */}
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src="/pfp.png"
                        alt="Morgan Lobb"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Name and Title */}
                    <div>
                      <h4 className="text-white font-semibold text-sm">
                        Morgan Lobb
                      </h4>
                      <p className="text-zinc-400 text-xs">
                        Executive Coach, New York
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Marquee>
        </div>
        <div>
          Let us show you how to multiply your revenue, not your workload.
        </div>
      </section>
      <FAQ />
      <section className="flex flex-col justify-center items-center">
        <Title
          text="Your Proven Framework + Adaptive Intelligence"
          className="text-5xl"
        />
        <Title className="text-theme text-5xl" text="= Unstoppable Results" />
        <img className="w-2/3 mt-16 -translate-x-16" src="/result.png" alt="" />
      </section>
      <section className="flex flex-col justify-center items-center space-y-10">
        <div className="max-w-7xl text-2xl text-center">
          You're in this to create lasting change. But true transformation
          happens in the day-to-day, not just in breakthrough sessions. To guide
          that journey, you need to see what's really going on. You need to move
          from a static framework to an adaptive one. This is the future of
          coaching a practice that is:
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 mt-12">
          <div className="bg-gradient-to-b from-zinc-900 to-black rounded-3xl p-8 border border-white/20">
            <div className="w-12 h-12 bg-zinc-600 rounded-lg mb-6"></div>
            <h3 className="text-white text-2xl font-semibold mb-4">
              Evidence-Based
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Informed by real-time data on your client's physiology and
              mindset.
            </p>
          </div>

          <div className="bg-gradient-to-b from-zinc-900 to-black rounded-3xl p-8 border border-white/20">
            <div className="w-12 h-12 bg-zinc-600 rounded-lg mb-6"></div>
            <h3 className="text-white text-2xl font-semibold mb-4">
              Systematized
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Supported by a behavioral change engine that ensures
              follow-through.
            </p>
          </div>

          <div className="bg-gradient-to-b from-zinc-900 to-black rounded-3xl p-8 border border-white/20">
            <div className="w-12 h-12 bg-zinc-600 rounded-lg mb-6"></div>
            <h3 className="text-white text-2xl font-semibold mb-4">
              Deeply Human
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Freeing you to focus on the transformational work only you can do.
            </p>
          </div>
        </div>
        <div className="max-w-7xl text-2xl text-center">
          This isn't about replacing your method. It's about amplifying it. Join
          us in leading a movement toward coaching that is adaptive, precise,
          and profoundly effective.
        </div>
        <button className="text-center bg-theme text-white p-4 rounded-full border-4 border-white font text-xl">
          Book a Personalized Demo Call
        </button>
        <div className="text-xl text-center">
          Let us show you how to multiply your revenue, not your workload.{" "}
          <br />
          Take your sneak peek into the{" "}
          <span className="text-theme">FUTURE</span>
        </div>
      </section>
      <section className="bg-gradient-to-br from-pink-300 to-theme rounded-3xl p-12 mx-4 md:mx-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
                The Future of Performance Coaching, Delivered Weekly
              </h2>
              <p className="text-black/80 text-lg leading-relaxed">
                Join other elite coaches of high-performers. Get exclusive
                insights, expert advice, and the latest on data-driven
                strategies straight in your inbox
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-black font-medium text-sm">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="What should we call you..."
                  className="w-full p-4 rounded-xl border-none bg-white/90 backdrop-blur-sm text-black placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-black font-medium text-sm">Email</label>
                <input
                  type="email"
                  placeholder="Your Best Email"
                  className="w-full p-4 rounded-xl border-none bg-white/90 backdrop-blur-sm text-black placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="newsletter-consent"
                  className="w-4 h-4 rounded border-2 border-black/20"
                />
                <label
                  htmlFor="newsletter-consent"
                  className="text-black text-sm"
                >
                  I agree to receive updates, news and promotions from
                  prescribelife.ai
                </label>
              </div>

              <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-zinc-800 transition-colors">
                Sign Up for the Newsletter
              </button>
            </div>
          </div>

          {/* Right side - Dark placeholder */}
          <div className="bg-zinc-800 rounded-3xl h-80 md:h-96"></div>
        </div>
      </section>
      <section></section>
    </main>
  );
}

function Title({ text, className }: { text: string; className?: string }) {
  return <div className={`text-3xl font-medium ${className}`}>{text}</div>;
}
