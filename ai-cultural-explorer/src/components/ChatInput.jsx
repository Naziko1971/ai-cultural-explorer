export default function ChatInput({ input, setInput, onSendMessage }) {
  return (
    <div className="mt-4 flex gap-2">
      <input
        value={input}
        onChange={(event) => setInput(event.target.value)}
        onKeyDown={(event) => event.key === "Enter" && onSendMessage()}
        placeholder="Ask in English: What food do you eat?"
        className="flex-1 rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
      />
      <button
        onClick={onSendMessage}
        className="rounded-2xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700"
      >
        Send
      </button>
    </div>
  );
}