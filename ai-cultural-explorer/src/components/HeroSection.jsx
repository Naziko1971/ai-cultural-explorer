import { motion } from "framer-motion";
import { Globe2, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-blue-700 to-sky-500 px-6 py-10 text-white">
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/10 blur-2xl" />

      <div className="relative w-full px-6">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">
          <Sparkles size={16} />
          English Grade 7 · Intercultural Literacy
        </div>

        <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-center">
          <div>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              AI Cultural Explorer
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-blue-50">
              Learn English through cultures of different countries. Choose a country,
              talk with an AI student, answer quiz questions, and compare traditions.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-2xl bg-white px-4 py-2 font-semibold text-blue-700">
                AI Chat
              </span>
              <span className="rounded-2xl bg-white/15 px-4 py-2">Culture Quiz</span>
              <span className="rounded-2xl bg-white/15 px-4 py-2">Compare Cultures</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl bg-white/15 p-6 shadow-2xl backdrop-blur"
          >
            <Globe2 className="mb-4" size={44} />
            <p className="text-xl font-semibold">Project Goal</p>
            <p className="mt-2 text-blue-50">
              To improve students' English communication and respect for different cultures
              using simple AI tools.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}