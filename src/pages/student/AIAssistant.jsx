import { useState } from 'react';
import { Send, Plus, Trash2, Bot } from 'lucide-react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { studentNav } from '../../data/navConfig';

const history = [
  'Explain Spring Boot in simple terms',
  'Java vs Python for backend',
  'How does JPA relate to Hibernate?',
];

const suggestions = ['Explain this topic', 'Give me an example', 'Create quiz questions', 'Summarize this lesson', 'Explain it simply'];

const initialMessages = [
  { role: 'user', text: 'Explain Spring Boot in simple terms.' },
  { role: 'assistant', text: 'Spring Boot is a Java framework that makes it easier to create production-ready applications. Instead of manually configuring everything, it gives you sensible defaults so you can focus on writing business logic — think of it as Java with the boring setup already handled for you.' },
];

export default function AIAssistant() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');

  const send = (text) => {
    const t = text || input;
    if (!t.trim()) return;
    setMessages((m) => [...m, { role: 'user', text: t }, { role: 'assistant', text: `Here's a simple breakdown of "${t}" based on your current course — happy to go deeper on any part of it.` }]);
    setInput('');
  };

  return (
    <DashboardLayout items={studentNav} roleLabel="Student" userInitials="JD" notifPath="/student/notifications">
      <div className="page-title">SmartLearn AI Assistant 🤖</div>
      <p className="page-sub">Ask questions and get help with your learning.</p>

      <div className="chat-shell mt-24">
        <div className="card" style={{ padding: 16, overflowY: 'auto' }}>
          <button className="btn btn-outline btn-block btn-sm" style={{ marginBottom: 14 }} onClick={() => setMessages([])}>
            <Plus size={14} /> New Conversation
          </button>
          <div className="text-faint" style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.04em', margin: '8px 4px' }}>Chat History</div>
          {history.map((h, i) => (
            <div key={i} className={`chat-history-item ${i === 0 ? 'active' : ''}`}>{h}</div>
          ))}
          <button className="btn btn-ghost btn-sm mt-16" onClick={() => setMessages([])}><Trash2 size={14} /> Clear Chat</button>
        </div>

        <div className="card chat-window" style={{ padding: 20 }}>
          <div className="chat-messages">
            {messages.length === 0 && (
              <div className="flex-col items-center gap-12" style={{ margin: 'auto', textAlign: 'center', color: 'var(--ink-faint)' }}>
                <Bot size={28} />
                <span>Ask me anything about your courses.</span>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`msg-row ${m.role}`}>
                {m.role === 'assistant' && <div className="avatar" style={{ width: 32, height: 32, fontSize: 12 }}><Bot size={15} /></div>}
                <div className="msg-bubble">{m.text}</div>
              </div>
            ))}
          </div>

          <div className="flex gap-8 mt-16" style={{ flexWrap: 'wrap' }}>
            {suggestions.map((s) => (
              <button key={s} className="suggested-chip" onClick={() => send(s)}>{s}</button>
            ))}
          </div>

          <div className="chat-input-bar">
            <input
              placeholder="Ask a question about your course..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
            />
            <button className="btn btn-primary btn-sm" style={{ borderRadius: '50%', width: 38, height: 38, padding: 0 }} onClick={() => send()} aria-label="Send">
              <Send size={15} />
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
