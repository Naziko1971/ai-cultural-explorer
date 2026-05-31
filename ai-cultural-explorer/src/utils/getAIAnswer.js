export function getAIAnswer(country, text) {
  const message = text.toLowerCase();

  if (message.includes("food") || message.includes("eat") || message.includes("dish")) {
    return country.facts.food;
  }

  if (message.includes("holiday") || message.includes("celebrate") || message.includes("festival")) {
    return country.facts.holidays;
  }

  if (message.includes("school") || message.includes("study") || message.includes("student")) {
    return country.facts.school;
  }

  if (message.includes("tradition") || message.includes("culture") || message.includes("custom")) {
    return country.facts.traditions;
  }

  if (message.includes("hello") || message.includes("greet") || message.includes("greeting")) {
    return country.facts.greeting;
  }

  if (message.includes("language") || message.includes("speak")) {
  return country.facts.language;
}

  if (message.includes("sport")) {
    return country.facts.sports;
  }

  if (message.includes("music")) {
    return country.facts.music;
  }

  if (message.includes("family")) {
    return country.facts.family;
  }

  if (message.includes("geography") || message.includes("location")) {
    return country.facts.geography;
  }

  if (message.includes("place") || message.includes("attraction")) {
    return country.facts.famous_places;
  }

  if (message.includes("transport") || message.includes("travel")) {
    return country.facts.transportation;
  }

  if (message.includes("weather") || message.includes("climate")) {
    return country.facts.weather;
  }

  if (message.includes("fact")) {
    return country.facts.fun_fact;
  }

  if (message.includes("currency") || message.includes("money")) {
    return `The currency is ${country.facts.currency}.`;
  }

  if (message.includes("capital")) {
    return `The capital city is ${country.facts.capital}.`;
  }

  if (message.includes("population")) {
    return `The population is approximately ${country.facts.population}.`;
  }

  if (message.includes("flag")) {
    return country.facts.flag_fact;
  }

  if (message.includes("animal") || message.includes("symbol")) {
    return country.facts.animal_symbol;
  }

  return `That is an interesting question! In ${country.name}, culture is connected with family, food, traditions, language, music, sports, and daily life. Try asking about food, holidays, language, music, sports, weather, capital city, or famous places.`;
}