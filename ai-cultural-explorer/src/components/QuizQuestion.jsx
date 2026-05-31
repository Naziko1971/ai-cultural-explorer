export default function QuizQuestion({ quizItem, questionIndex, selectedAnswer, onCheckAnswer }) {
  return (
    <div className="rounded-3xl bg-slate-50 p-4">
      <p className="mb-3 font-semibold">
        {questionIndex + 1}. {quizItem.question}
      </p>

      <div className="grid gap-2">
        {quizItem.options.map((option) => {
          const selected = selectedAnswer === option;
          const correct = option === quizItem.answer;
          const showResult = Boolean(selectedAnswer);

          return (
            <button
              key={option}
              onClick={() => onCheckAnswer(questionIndex, option)}
              className={`rounded-2xl border px-4 py-2 text-left transition ${
                showResult && correct
                  ? "border-green-400 bg-green-50 text-green-700"
                  : selected
                    ? "border-red-300 bg-red-50 text-red-700"
                    : "border-slate-200 bg-white hover:border-blue-300"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}