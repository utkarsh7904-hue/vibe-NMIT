import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/',          icon: '📊', label: 'Dashboard'    },
  { to: '/planner',   icon: '📅', label: 'Study Planner' },
  { to: '/quiz',      icon: '🎯', label: 'Quiz Engine'   },
  { to: '/chatbot',   icon: '💬', label: 'AI Tutor'      },
  { to: '/analytics', icon: '📈', label: 'Analytics'     },
  { to: '/topics',    icon: '🧠', label: 'Weak Topics'   },
]

export default function Sidebar() {
  return (
    <nav className="flex flex-col w-[220px] min-w-[220px] bg-[var(--surface)] border-r border-[var(--border)] overflow-y-auto">
      {/* Logo */}
      <div className="flex items-center gap-[10px] px-5 py-5 border-b border-[var(--border)]">
        <div className="w-[34px] h-[34px] bg-[var(--accent)] rounded-[9px] flex items-center justify-center font-bold text-sm text-white shrink-0">
          SM
        </div>
        <div>
          <div className="text-[17px] font-semibold text-[var(--text)]">StudyMind</div>
          <div className="text-[10px] text-[var(--text2)] mt-[1px]">Study Smarter. Not Harder.</div>
        </div>
      </div>

      {/* Nav items */}
      <div className="flex-1 px-[10px] py-3">
        <div className="text-[10px] font-semibold uppercase tracking-[.08em] text-[var(--text3)] px-[10px] py-2 pt-3">
          Main
        </div>
        {navItems.slice(0, 4).map((item) => (
          <NavItem key={item.to} {...item} />
        ))}

        <div className="text-[10px] font-semibold uppercase tracking-[.08em] text-[var(--text3)] px-[10px] py-2 pt-4">
          Insights
        </div>
        {navItems.slice(4).map((item) => (
          <NavItem key={item.to} {...item} />
        ))}
      </div>

      {/* Streak card */}
      <div className="m-[10px] rounded-xl border border-[rgba(245,158,11,.3)] bg-gradient-to-br from-[rgba(245,158,11,.15)] to-[rgba(255,107,107,.1)] p-[14px]">
        <div className="text-[28px] font-bold text-[var(--amber)] leading-none">🔥 12</div>
        <div className="text-xs text-[var(--text2)] mt-[6px]">Day streak — keep it up!</div>
      </div>
    </nav>
  )
}

function NavItem({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      className={({ isActive }) =>
        `flex items-center gap-[10px] px-[10px] py-[9px] rounded-lg cursor-pointer text-[13.5px] transition-all duration-150 mb-[2px] no-underline ` +
        (isActive
          ? 'bg-[rgba(108,99,255,.15)] text-[var(--accent)] font-medium'
          : 'text-[var(--text2)] hover:bg-[var(--surface2)] hover:text-[var(--text)]')
      }
    >
      <span className="text-base w-5 text-center">{icon}</span>
      <span>{label}</span>
    </NavLink>
  )
}
