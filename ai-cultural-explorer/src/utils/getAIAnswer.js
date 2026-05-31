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

  return `That is an interesting question! In ${country.name}, culture is connected with family, school, food, holidays, and polite communication. Try asking me about food, school, holidays, traditions, or greetings.`;
}