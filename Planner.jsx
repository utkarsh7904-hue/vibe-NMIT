import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Badge, Button } from '../components/UI'
import { schedule } from '../data/data'

const today = new Date()
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

// Build a 7-day window ending today+3
function buildWeek() {
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today)
    d.setDate(today.getDate() - 3 + i)
    return {
      name: weekDays[d.getDay()],
      num: d.getDate(),
      isToday: d.toDateString() === today.toDateString(),
      dots: Math.floor(Math.random() * 4) + 1,
    }
  })
}

const week = buildWeek()

const dotColors = ['#6c63ff', '#00d4aa', '#ff6b6b', '#f59e0b', '#a78bfa']

const priorityBadge = {
  critical: { variant: 'red',    label: 'High Priority' },
  review:   { variant: 'amber',  label: 'Review'        },
  practice: { variant: 'blue',   label: 'Practice'      },
  ok:       { variant: 'green',  label: 'On Track'      },
}

export default function Planner() {
  const [selected, setSelected] = useState(
    week.findIndex((d) => d.isToday)
  )
  const navigate = useNavigate()

  return (
    <div className="p-6 animate-fade-in">
      {/* Week strip */}
      <div className="grid grid-cols-7 gap-[10px] mb-5">
        {week.map((day, i) => (
          <div
            key={i}
            onClick={() => setSelected(i)}
            className={`bg-[var(--surface)] border rounded-lg p-3 text-center cursor-pointer transition-all duration-150
              ${selected === i || day.isToday
                ? 'border-[var(--accent)] bg-[rgba(108,99,255,.1)]'
                : 'border-[var(--border)] hover:border-[var(--accent)]'}`}
          >
            <div className="text-[11px] font-semibold uppercase tracking-wide text-[var(--text3)]">
              {day.name}
            </div>
            <div
              className="text-[20px] font-semibold mt-1"
              style={{ color: day.isToday ? 'var(--accent)' : undefined }}
            >
              {day.num}
            </div>
            <div className="flex justify-center gap-[3px] mt-[6px]">
              {Array.from({ length: day.dots }).map((_, j) => (
                <div
                  key={j}
                  className="w-[5px] h-[5px] rounded-full"
                  style={{ background: dotColors[j % dotColors.length] }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Selected day schedule */}
      <div className="text-sm font-semibold mb-3 text-[var(--text)]">
        {week[selected]?.isToday ? "Today's" : `${week[selected]?.name}'s`} Schedule
      </div>

      <div className="flex flex-col gap-[10px]">
        {schedule.map((item, i) => {
          const b = priorityBadge[item.priority] || priorityBadge.ok
          return (
            <div
              key={i}
              className="bg-[var(--surface)] border border-[var(--border)] border-l-[4px] rounded-lg px-4 py-[14px] flex items-center gap-[14px]"
              style={{ borderLeftColor: item.borderColor }}
            >
              <div className="text-xs text-[var(--text3)] w-20 shrink-0">{item.time}</div>
              <div className="flex-1">
                <div className="text-sm font-medium">{item.topic}</div>
                <div className="text-xs text-[var(--text2)] mt-1">{item.sub}</div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={b.variant}>{b.label}</Badge>
                <Button variant="sm" onClick={() => navigate('/quiz')}>Start →</Button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
