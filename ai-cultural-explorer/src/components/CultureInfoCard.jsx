import { BookOpen } from "lucide-react";

export default function CultureInfoCard({ selectedCountry }) {
  return (
    <div className="rounded-3xl bg-white p-5 shadow-sm">
      <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
        <BookOpen className="text-green-600" /> Culture Card
      </h2>

      <div className={`rounded-3xl bg-gradient-to-br ${selectedCountry.color} p-5`}>
        <div className="mb-3 text-5xl">{selectedCountry.flag}</div>
        <p className="text-xl font-bold">{selectedCountry.name}</p>
        <p className="text-slate-600">AI student: {selectedCountry.student}</p>

        <div className="mt-4 space-y-2 text-sm">
          <p>
            <b>Food:</b> {selectedCountry.facts.food}
          </p>
          <p>
            <b>Greeting:</b> {selectedCountry.facts.greeting}
          </p>
        </div>
      </div>
    </div>
  );
}