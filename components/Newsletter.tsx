import { FadeRise } from "./FadeRise";

export function Newsletter() {
  return (
    <section className="bg-gradient-to-br from-pink-300 to-theme rounded-3xl p-12 mx-4 md:mx-16 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <FadeRise>
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
                The Future of Performance Coaching, Delivered Weekly
              </h2>
              <p className="text-black/80 text-lg leading-relaxed">
                Join elite coaches. Get insight, strategy, and data-driven
                breakthroughs in your inbox.
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
                  className="w-full p-4 rounded-xl bg-white/90 text-black placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-black/20"
                />
              </div>
              <div className="space-y-2">
                <label className="text-black font-medium text-sm">Email</label>
                <input
                  type="email"
                  placeholder="Your best email"
                  className="w-full p-4 rounded-xl bg-white/90 text-black placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-black/20"
                />
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="newsletter-consent"
                  className="w-4 h-4 rounded border-2 border-black/30"
                />
                <label
                  htmlFor="newsletter-consent"
                  className="text-black text-sm"
                >
                  I agree to receive updates and promotions from
                  prescribelife.ai
                </label>
              </div>
              <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-zinc-800 transition-colors">
                Sign Up for the Newsletter
              </button>
            </div>
          </div>
        </FadeRise>
        <FadeRise delay={0.15}>
          <div className="bg-zinc-800 rounded-3xl h-80 md:h-96" />
        </FadeRise>
      </div>
    </section>
  );
}
