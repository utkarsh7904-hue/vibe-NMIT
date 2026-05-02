import { useNavigate } from 'react-router-dom'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js'
import { Card, CardTitle, StatCard, ProgressBar, Badge, Button } from '../components/UI'
import { todayPlan } from '../data/data'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip)

const subjectMastery = [
  { label: 'Mathematics', pct: 78,  color: '#6c63ff' },
  { label: 'Physics',     pct: 62,  color: '#00d4aa' },
  { label: 'Chemistry',   pct: 45,  color: '#ff6b6b' },
  { label: 'Biology',     pct: 88,  color: '#f59e0b' },
  { label: 'English',     pct: 91,  color: '#a78bfa' },
]

const weekData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Hours',
      data: [1.2, 0.8, 1.5, 2.0, 0.6, 1.8, 0.3],
      backgroundColor: ['#6c63ff','#6c63ff','#6c63ff','#6c63ff','#a78bfa','#6c63ff','#6c63ff'],
      borderRadius: 4,
      borderSkipped: false,
    },
  ],
}

const weekOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: {
    x: {
      ticks: { color: '#9aa3c2', font: { size: 11 } },
      grid: { display: false },
      border: { display: false },
    },
    y: {
      ticks: { color: '#9aa3c2', font: { size: 11 } },
      grid: { color: 'rgba(255,255,255,0.05)' },
      border: { display: false },
      max: 2.5,
    },
  },
}

const priorityBadge = {
  critical: { variant: 'red',    label: 'Weak'     },
  review:   { variant: 'amber',  label: 'Review'   },
  new:      { variant: 'blue',   label: 'New'      },
  ok:       { variant: 'green',  label: 'On Track' },
}

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="p-6 animate-fade-in">
      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-[14px] mb-5">
        <StatCard icon="📚" value="7h 20m" label="Study time this week"   delta="↑ 18% vs last week" />
        <StatCard icon="🎯" value="84%"    label="Average quiz score"      delta="↑ 6 pts improvement" />
        <StatCard icon="🧩" value="23"     label="Topics mastered"         delta="3 new this week" />
        <StatCard icon="🔁" value="41"     label="Reviews due today"       delta="4 overdue" deltaColor="var(--amber)" />
      </div>

      {/* Mastery + Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
        <Card>
          <CardTitle>📊 Subject Mastery</CardTitle>
          <div className="flex flex-col gap-[10px]">
            {subjectMastery.map((s) => (
              <div key={s.label} className="flex items-center gap-[10px]">
                <span className="text-[13px] text-[var(--text2)] w-[110px] shrink-0">{s.label}</span>
                <ProgressBar value={s.pct} color={s.color} />
                <span className="text-xs text-[var(--text2)] w-[34px] text-right">{s.pct}%</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <CardTitle>📈 Weekly Study Hours</CardTitle>
          <div style={{ position: 'relative', height: 180 }}>
            <Bar
              data={weekData}
              options={weekOptions}
              aria-label="Bar chart of daily study hours this week"
            />
          </div>
        </Card>
      </div>

      {/* Today's plan */}
      <Card>
        <CardTitle>
          📋 Today's AI Study Plan —{' '}
          <span className="text-[var(--text2)] font-normal">
            {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </span>
        </CardTitle>
        <div>
          {todayPlan.map((item, i) => {
            const b = priorityBadge[item.priority]
            return (
              <div
                key={item.id}
                className={`flex items-center gap-3 py-[10px] ${i < todayPlan.length - 1 ? 'border-b border-[var(--border)]' : ''}`}
              >
                <div className="w-[10px] h-[10px] rounded-full shrink-0" style={{ background: item.color }} />
                <div className="flex-1">
                  <div className="text-[13.5px] font-medium">{item.topic}</div>
                  <div className="text-xs text-[var(--text2)] mt-[2px]">{item.subtitle}</div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={b.variant}>{b.label}</Badge>
                  <Button variant="sm" onClick={() => navigate('/quiz')}>
                    Start →
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </Card>
    </div>
  )
}
