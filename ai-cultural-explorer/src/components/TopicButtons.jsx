import { topics } from "../data/topics";

export default function TopicButtons({ selectedCountry, setInput }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {topics.map((topic) => (
        <button
          key={topic.key}
          onClick={() => setInput(`Tell me about ${topic.label.toLowerCase()} in ${selectedCountry.name}`)}
          className="rounded-full bg-slate-100 px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700"
        >
          {topic.label}
        </button>
      ))}
    </div>
  );
}