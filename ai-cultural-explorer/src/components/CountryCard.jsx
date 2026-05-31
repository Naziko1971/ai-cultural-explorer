export default function CountryCard({ country, isSelected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-3xl border p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
        isSelected ? "border-blue-500 bg-white" : "border-transparent bg-white"
      }`}
    >
      <div className="mb-4 overflow-hidden rounded-3xl">
        <img
          src={country.image}
          alt={country.name}
          className="h-40 w-full object-cover"
        />
      </div>
      <p className="font-bold">{country.name}</p>
      <p className="text-sm text-slate-500">AI student: {country.student}</p>
    </button>
  );
}