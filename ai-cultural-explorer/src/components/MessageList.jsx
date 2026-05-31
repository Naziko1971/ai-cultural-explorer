export default function MessageList({ messages }) {
  return (
    <div className="h-80 overflow-y-auto rounded-3xl bg-slate-50 p-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`mb-3 flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-[85%] rounded-3xl px-4 py-3 text-sm leading-relaxed ${
              message.role === "user"
                ? "bg-blue-600 text-white"
                : "bg-white text-slate-800 shadow-sm"
            }`}
          >
            {message.text}
          </div>
        </div>
      ))}
    </div>
  );
}
