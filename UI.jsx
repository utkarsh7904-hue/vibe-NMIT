// Reusable low-level UI primitives

export function Badge({ variant = 'blue', children }) {
  const variants = {
    blue:   'bg-[rgba(108,99,255,.2)]  text-[#a5a0ff]',
    green:  'bg-[rgba(0,212,170,.15)]  text-[#00d4aa]',
    red:    'bg-[rgba(255,107,107,.15)] text-[#ff9a9a]',
    amber:  'bg-[rgba(245,158,11,.15)] text-[#f59e0b]',
    purple: 'bg-[rgba(167,139,250,.15)] text-[#a78bfa]',
  }
  return (
    <span className={`inline-block text-[11px] font-semibold px-2 py-[3px] rounded ${variants[variant]}`}>
      {children}
    </span>
  )
}

export function Card({ children, className = '', style = {} }) {
  return (
    <div
      className={`bg-[var(--surface)] border border-[var(--border)] rounded-xl p-[18px] ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}

export function CardTitle({ children }) {
  return (
    <h3 className="text-sm font-semibold text-[var(--text)] mb-3 flex items-center gap-2">
      {children}
    </h3>
  )
}

export function Button({ variant = 'primary', onClick, disabled, className = '', children }) {
  const base =
    'inline-flex items-center justify-center gap-2 px-[22px] py-[11px] rounded-lg text-sm font-medium cursor-pointer border-none transition-all duration-150 disabled:opacity-45 disabled:cursor-not-allowed'
  const variants = {
    primary: 'bg-[var(--accent)] text-white hover:bg-[#5a52e0]',
    outline: 'bg-transparent text-[var(--text2)] border border-[var(--border)] hover:bg-[var(--surface2)] hover:text-[var(--text)]',
    success: 'bg-[var(--accent2)] text-[#0a1a15]',
    sm:      'bg-[var(--accent)] text-white hover:bg-[#5a52e0] !px-[14px] !py-[6px] !text-xs',
    'sm-outline': 'bg-transparent text-[var(--text2)] border border-[var(--border)] hover:bg-[var(--surface2)] !px-[14px] !py-[6px] !text-xs',
  }
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant] || variants.primary} ${className}`}
    >
      {children}
    </button>
  )
}

export function ProgressBar({ value, color = 'var(--accent)', height = 7 }) {
  return (
    <div
      className="flex-1 rounded bg-[var(--surface3)] overflow-hidden"
      style={{ height }}
    >
      <div
        className="h-full rounded transition-all duration-700"
        style={{ width: `${value}%`, background: color }}
      />
    </div>
  )
}

export function StatCard({ icon, value, label, delta, deltaColor }) {
  return (
    <Card>
      <div className="text-xl mb-2">{icon}</div>
      <div className="text-2xl font-bold text-[var(--text)]">{value}</div>
      <div className="text-xs text-[var(--text2)] mt-1">{label}</div>
      {delta && (
        <div className="text-[11px] mt-1" style={{ color: deltaColor || 'var(--accent2)' }}>
          {delta}
        </div>
      )}
    </Card>
  )
}
