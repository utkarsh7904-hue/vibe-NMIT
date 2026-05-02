import { useLocation } from 'react-router-dom'

const titles = {
  '/':          'Dashboard',
  '/planner':   'Study Planner',
  '/quiz':      'Quiz Engine',
  '/chatbot':   'AI Tutor',
  '/analytics': 'Analytics',
  '/topics':    'Weak Topics',
}

export default function TopBar() {
  const { pathname } = useLocation()
  const title = titles[pathname] || 'StudyMind'

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-[var(--surface)] border-b border-[var(--border)] sticky top-0 z-10">
      <h1 className="text-lg font-semibold text-[var(--text)]">{title}</h1>
      <div className="flex items-center gap-3">
        <span className="bg-[rgba(108,99,255,.2)] text-[var(--accent)] text-xs font-semibold px-[10px] py-1 rounded-full">
          ⚡ 2,340 XP
        </span>
        <div className="w-[34px] h-[34px] rounded-full bg-[var(--accent)] flex items-center justify-center font-semibold text-[13px] text-white cursor-pointer hover:opacity-90 transition-opacity">
          DR
        </div>
      </div>
    </header>
  )
}
