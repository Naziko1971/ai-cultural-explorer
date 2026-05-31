import { Languages } from "lucide-react";
import { countries } from "../data/countries";
import CountryCard from "./CountryCard";

export default function CountrySelector({ selectedId, onSelectCountry }) {
  return (
    <section className="mb-8">
      <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
        <Languages className="text-blue-600" /> Choose a country
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {countries.map((country) => (
          <CountryCard
            key={country.id}
            country={country}
            isSelected={selectedId === country.id}
            onClick={() => onSelectCountry(country)}
          />
        ))}
      </div>
    </section>
  );
}