import { Trophy } from "lucide-react";
import QuizQuestion from "./QuizQuestion";

export default function QuizSection({ selectedCountry, answers, score, onCheckAnswer }) {
  return (
    <div className="rounded-3xl bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <Trophy className="text-amber-500" /> Culture Quiz
        </h2>
        <span className="rounded-full bg-amber-50 px-4 py-2 font-bold text-amber-700">
          Score: {score}/{selectedCountry.quiz.length}
        </span>
      </div>

      <div className="space-y-5">
        {selectedCountry.quiz.map((quizItem, questionIndex) => (
          <QuizQuestion
            key={questionIndex}
            quizItem={quizItem}
            questionIndex={questionIndex}
            selectedAnswer={answers[questionIndex]}
            onCheckAnswer={onCheckAnswer}
          />
        ))}
      </div>
    </div>
  );
}