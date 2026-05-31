import { countries } from "../data/countries";
import { topics } from "../data/topics"; 

export default function CompareCulturesTable() {
  const kazakhstan = countries.find((item) => item.id === "kazakhstan");
  const japan = countries.find((item) => item.id === "japan");
  const uk = countries.find((item) => item.id === "uk");

  return (
    <section className="mt-8 rounded-3xl bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-2xl font-bold text-slate-900">Compare Cultures</h2>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] border-separate border-spacing-y-2 text-left text-sm">
          <thead>
            <tr className="text-slate-500">
              <th className="px-4 py-2">Topic</th>
              <th className="px-4 py-2">Kazakhstan</th>
              <th className="px-4 py-2">Japan</th>
              <th className="px-4 py-2">United Kingdom</th>
            </tr>
          </thead>

          <tbody>
            {topics.map((topic) => (
              <tr key={topic.key} className="bg-slate-50">
                <td className="rounded-l-2xl px-4 py-3 font-semibold">{topic.label}</td>
                <td className="px-4 py-3">{kazakhstan.facts[topic.key]}</td>
                <td className="px-4 py-3">{japan.facts[topic.key]}</td>
                <td className="rounded-r-2xl px-4 py-3">{uk.facts[topic.key]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}