import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import TopicButtons from "./TopicButtons";
import { MessageCircle } from "lucide-react"; 

export default function ChatSection({ selectedCountry, messages, input, setInput, onSendMessage }) {
  return (
    <section className="rounded-3xl bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <MessageCircle className="text-blue-600" /> AI Chat
          </h2>
          <p className="text-sm text-slate-500">
            Talk with {selectedCountry.student} from {selectedCountry.city}
          </p>
        </div>
        <div className="rounded-2xl bg-blue-50 px-4 py-2 text-3xl">
          {selectedCountry.flag}
        </div>
      </div>

      <MessageList messages={messages} />

      <ChatInput
        input={input}
        setInput={setInput}
        onSendMessage={onSendMessage}
      />

      <TopicButtons selectedCountry={selectedCountry} setInput={setInput} />
    </section>
  );
}