import { useState, useRef, useEffect } from 'react'
import { Button } from '../components/UI'
import { getAIResponse } from '../data/data'

const quickChips = [
  { label: "Newton's Laws",   msg: "Explain Newton's laws with examples" },
  { label: 'Spaced Repetition', msg: 'How does spaced repetition work?' },
  { label: 'Integration',     msg: 'Help me with integration by parts'  },
  { label: 'My Weak Topics',  msg: 'What are my weakest topics?'        },
  { label: 'Study Tips',      msg: "Give me a study tip for tomorrow's exam" },
]

const initialMessages = [
  {
    id: 0,
    role: 'ai',
    text: "Hi Divyansh! 👋 I'm your AI tutor. Based on your recent quiz performance, I've noticed you're struggling with **Thermodynamics** and **Organic Mechanisms**. Want to work through those, or do you have another topic in mind?",
  },
]

let responseIdx = 0

export default function Chatbot() {
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput]       = useState('')
  const [loading, setLoading]   = useState(false)
  const bottomRef               = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  function send(text) {
    const msg = text.trim()
    if (!msg || loading) return
    setInput('')

    const userMsg = { id: Date.now(), role: 'user', text: msg }
    setMessages((m) => [...m, userMsg])
    setLoading(true)

    setTimeout(() => {
      const reply = getAIResponse(msg, responseIdx++)
      setMessages((m) => [...m, { id: Date.now() + 1, role: 'ai', text: reply }])
      setLoading(false)
    }, 900 + Math.random() * 600)
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send(input)
    }
  }

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] p-6 pb-4 animate-fade-in">
      {/* Quick chips */}
      <div className="flex flex-wrap gap-2 mb-3">
        {quickChips.map((c) => (
          <button
            key={c.label}
            onClick={() => send(c.msg)}
            className="bg-[var(--surface)] border border-[var(--border)] rounded-full px-3 py-[6px] text-xs text-[var(--text2)] cursor-pointer hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-150"
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto pr-1">
        {messages.map((msg) => (
          <Message key={msg.id} msg={msg} />
        ))}
        {loading && (
          <div className="flex gap-[10px] mb-[14px]">
            <Avatar role="ai" />
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl px-[15px] py-3">
              <div className="flex gap-1 items-center">
                <span className="typing-dot" />
                <span className="typing-dot" />
                <span className="typing-dot" />
              </div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="flex gap-[10px] items-end pt-3 border-t border-[var(--border)]">
        <textarea
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Ask anything — formulas, concepts, problems..."
          className="flex-1 bg-[var(--surface)] border border-[var(--border)] rounded-lg px-[14px] py-3 text-sm text-[var(--text)] placeholder-[var(--text3)] outline-none resize-none focus:border-[var(--accent)] transition-colors"
          style={{ fontFamily: 'inherit' }}
        />
        <Button onClick={() => send(input)} disabled={!input.trim() || loading}>
          Send
        </Button>
      </div>
    </div>
  )
}

function Avatar({ role }) {
  return (
    <div
      className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-[13px] font-semibold ${
        role === 'ai' ? 'bg-[var(--accent)] text-white' : 'bg-[var(--surface3)] text-[var(--text2)]'
      }`}
    >
      {role === 'ai' ? 'AI' : 'DR'}
    </div>
  )
}

function Message({ msg }) {
  const isUser = msg.role === 'user'
  const formatted = msg.text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '<br/><br/>')
    .replace(/\n/g, '<br/>')

  return (
    <div className={`flex gap-[10px] mb-[14px] ${isUser ? 'flex-row-reverse' : ''}`}>
      <Avatar role={msg.role} />
      <div
        className={`max-w-[72%] border rounded-xl px-[15px] py-3 text-[13.5px] leading-relaxed ${
          isUser
            ? 'bg-[rgba(108,99,255,.15)] border-[rgba(108,99,255,.3)] text-[var(--text)]'
            : 'bg-[var(--surface)] border-[var(--border)] text-[var(--text)]'
        }`}
        dangerouslySetInnerHTML={{ __html: formatted }}
      />
    </div>
  )
}
