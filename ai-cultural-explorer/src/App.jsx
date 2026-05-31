// import { useMemo, useState } from "react";

// import { countries } from "./data/countries";
// import { getAIAnswer } from "./utils/getAIAnswer";

// import HeroSection from "./components/HeroSection";
// import CountrySelector from "./components/CountrySelector";
// import ChatSection from "./components/ChatSection";
// import QuizSection from "./components/QuizSection";
// import CultureInfoCard from "./components/CultureInfoCard";
// import CompareCulturesTable from "./components/CompareCulturesTable";


// export default function App() {  
//   const [selectedId, setSelectedId] = useState("japan");
//   const [input, setInput] = useState("");
//   const [answers, setAnswers] = useState({});
//   const [score, setScore] = useState(0);
//   const [messages, setMessages] = useState([
//     { role: "ai", text: countries.find((item) => item.id === "japan").greeting },
//   ]);

//   const selectedCountry = useMemo(
//     () => countries.find((item) => item.id === selectedId),
//     [selectedId]
//   );

//   const chooseCountry = (country) => {
//     setSelectedId(country.id);
//     setMessages([{ role: "ai", text: country.greeting }]);
//     setAnswers({});
//     setScore(0);
//   };

//   const sendMessage = () => {
//     if (!input.trim()) return;

//     const userMessage = { role: "user", text: input.trim() };
//     const aiMessage = {
//       role: "ai",
//       text: getAIAnswer(selectedCountry, input.trim()),
//     };

//     setMessages((prev) => [...prev, userMessage, aiMessage]);
//     setInput("");
//   };

//   const checkAnswer = (questionIndex, option) => {
//     if (answers[questionIndex]) return;

//     const isCorrect = option === selectedCountry.quiz[questionIndex].answer;

//     setAnswers((prev) => ({ ...prev, [questionIndex]: option }));

//     if (isCorrect) {
//       setScore((prev) => prev + 1);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-900">
//       <HeroSection />

//       <main className="w-full px-6 py-8">
//         <CountrySelector selectedId={selectedId} onSelectCountry={chooseCountry} />

//         <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
//           <ChatSection
//             selectedCountry={selectedCountry}
//             messages={messages}
//             input={input}
//             setInput={setInput}
//             onSendMessage={sendMessage}
//           />

//           <section className="space-y-8">
//             <QuizSection
//               selectedCountry={selectedCountry}
//               answers={answers}
//               score={score}
//               onCheckAnswer={checkAnswer}
//             />

//             <CultureInfoCard selectedCountry={selectedCountry} />
//           </section>
//         </div>

//         <CompareCulturesTable />
//       </main>
//     </div>
//   );
// }
import { useMemo, useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import { countries } from "./data/countries";
import { getAIAnswer } from "./utils/getAIAnswer";

import HeroSection from "./components/HeroSection";
import CountrySelector from "./components/CountrySelector";
import ChatSection from "./components/ChatSection";
import QuizSection from "./components/QuizSection";
import CultureInfoCard from "./components/CultureInfoCard";
import CompareCulturesTable from "./components/CompareCulturesTable";

export default function App() {
  const [selectedId, setSelectedId] = useState("japan");
  const [input, setInput] = useState("");
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [messages, setMessages] = useState([
    { role: "ai", text: countries.find((item) => item.id === "japan").greeting },
  ]);

  const selectedCountry = useMemo(
    () => countries.find((item) => item.id === selectedId),
    [selectedId]
  );

  const chooseCountry = (country) => {
    setSelectedId(country.id);
    setMessages([{ role: "ai", text: country.greeting }]);
    setAnswers({});
    setScore(0);
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: input.trim() },
      { role: "ai", text: getAIAnswer(selectedCountry, input.trim()) },
    ]);

    setInput("");
  };

  const checkAnswer = (questionIndex, option) => {
    if (answers[questionIndex]) return;

    const isCorrect = option === selectedCountry.quiz[questionIndex].answer;

    setAnswers((prev) => ({ ...prev, [questionIndex]: option }));

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  return (
    <BrowserRouter basename="/ai-cultural-explorer">
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <HeroSection />
        

        <main className="w-full px-6 py-8">
          <section className="mb-4" id="explore"><CountrySelector selectedId={selectedId} onSelectCountry={chooseCountry} /></section>
          <section className="mb-4" id="learn"><nav className="flex flex-wrap justify-center gap-4 bg-gradient-to-r from-blue-600 to-cyan-400 py-6">
          <NavLink
            to="/chat"
            className="rounded-full bg-white px-6 py-3 font-bold text-blue-700 shadow-lg"
          >
            💬 AI Chat
          </NavLink>

          <NavLink
            to="/quiz"
            className="rounded-full bg-yellow-300 px-6 py-3 font-bold text-yellow-900 shadow-lg"
          >
            🧩 Culture Quiz
          </NavLink>

          <NavLink
            to="/compare"
            className="rounded-full bg-pink-300 px-6 py-3 font-bold text-pink-900 shadow-lg"
          >
            🌍 Compare Cultures
          </NavLink>
        </nav></section>

        <section className="mb-4" id="chat">
          <Routes>
            <Route
              path="/"
              element={
                <ChatSection
                  selectedCountry={selectedCountry}
                  messages={messages}
                  input={input}
                  setInput={setInput}
                  onSendMessage={sendMessage}
                />
              }
            />

            <Route
              path="/chat"
              element={
                <ChatSection
                  selectedCountry={selectedCountry}
                  messages={messages}
                  input={input}
                  setInput={setInput}
                  onSendMessage={sendMessage}
                />
              }
            />

            <Route
              path="/quiz"
              element={
                <div className="space-y-8">
                  <QuizSection
                    selectedCountry={selectedCountry}
                    answers={answers}
                    score={score}
                    onCheckAnswer={checkAnswer}
                  />

                  <CultureInfoCard selectedCountry={selectedCountry} />
                </div>
              }
            />

            <Route path="/compare" element={<CompareCulturesTable />} />
          </Routes>
        </section>
          
          

          
        </main>
      </div>
    </BrowserRouter>
  );
}