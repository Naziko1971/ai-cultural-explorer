import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-400 px-6 py-12 text-white">
      <div className="absolute left-10 top-20 text-5xl opacity-30">⭐</div>
      <div className="absolute right-16 top-12 text-6xl opacity-30">🌍</div>
      <div className="absolute bottom-10 left-1/3 text-5xl opacity-30">🎒</div>

      <div className="relative w-full px-6">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <div className="flex justify-center md:justify-start">
              <img
                src="/ai-cultural-explorer/images/logo_adv.png"
                alt="Culture Adventure Time"
                className="w-full max-w-[550px] drop-shadow-2xl"
              />
            </div>

            <p className="mt-6 max-w-3xl text-2xl text-blue-50">
              Travel around the world with friendly AI students. Learn English,
              discover traditions, and collect culture stars!
            </p>

            <div className="mt-8 flex flex-wrap gap-5">
              <a href="#explore">
                <div className="rounded-3xl bg-white/90 px-6 py-4 text-blue-700 shadow-xl">
                  <img
                    src="/ai-cultural-explorer/images/bimo.png"
                    alt="Explore"
                    className="h-24 hover:scale-110 transition"
                  />
                  <div className="font-bold">Explore</div>
                </div>
              </a>
            

              <a href="#learn">
                <div className="rounded-3xl bg-yellow-300 px-6 py-4 text-yellow-900 shadow-xl">
                  <img
                    src="/ai-cultural-explorer/images/lady.png"
                    alt="chat"
                    className="h-24 hover:scale-110 transition"
                  />
                  <div className="font-bold">Learn</div>
                </div>
              </a>

              <a href="#chat">
                <div className="rounded-3xl bg-pink-300 px-6 py-4 text-pink-900 shadow-xl">
                  <img
                    src="/ai-cultural-explorer/images/adventure-time-jake.png"
                    alt="Learn"
                    className="h-24 hover:scale-110 transition"
                  />
                  <div className="font-bold">Talk</div>
                </div>
              </a>

            
          </div>
          </div>

          <div className="relative">
            <motion.img
              src="/ai-cultural-explorer/images/fin.png"
              alt="Finn"
              className="absolute -left-32 -top-16 h-96 z-20 drop-shadow-2xl scale-x-[-1]"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="rounded-[36px] bg-white/20 p-8 pl-28 shadow-2xl backdrop-blur"
            >
              <h2 className="mt-5 text-3xl font-extrabold">
                Meet AI Culture Friends!
              </h2>

              <p className="mt-4 text-xl text-blue-50">
                Choose a country, chat with a student character, learn fun facts,
                and become a culture explorer.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}