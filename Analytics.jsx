import { Line, Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale, LinearScale, PointElement, LineElement,
  ArcElement, Tooltip, Filler,
} from 'chart.js'
import { Card, CardTitle, StatCard } from '../components/UI'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Filler)

const trendData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8'],
  datasets: [
    {
      label: 'Score %',
      data: [62, 58, 71, 68, 75, 79, 82, 84],
      borderColor: '#6c63ff',
      backgroundColor: 'rgba(108,99,255,0.1)',
      borderWidth: 2,
      pointRadius: 4,
      pointBackgroundColor: '#6c63ff',
      fill: true,
      tension: 0.35,
    },
  ],
}

const trendOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: {
    x: { ticks: { color: '#9aa3c2', font: { size: 11 } }, grid: { display: false }, border: { display: false } },
    y: { ticks: { color: '#9aa3c2', font: { size: 11 } }, grid: { color: 'rgba(255,255,255,0.05)' }, border: { display: false }, min: 50, max: 100 },
  },
}

const pieData = {
  labels: ['Math', 'Physics', 'Chemistry', 'Biology', 'English'],
  datasets: [
    {
      data: [30, 25, 20, 15, 10],
      backgroundColor: ['#6c63ff', '#00d4aa', '#ff6b6b', '#f59e0b', '#a78bfa'],
      borderWidth: 0,
      spacing: 2,
    },
  ],
}

const pieOptions = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '65%',
  plugins: { legend: { display: false } },
}

const pieColors = ['#6c63ff', '#00d4aa', '#ff6b6b', '#f59e0b', '#a78bfa']
const pieLabels = ['Math 30%', 'Physics 25%', 'Chemistry 20%', 'Biology 15%', 'English 10%']

export default function Analytics() {
  return (
    <div className="p-6 animate-fade-in">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-[14px] mb-5">
        <StatCard icon="⏰" value="48h"    label="Total study this month"         delta="" />
        <StatCard icon="✅" value="127"    label="Quizzes completed"              delta="" />
        <StatCard icon="📖" value="32%"    label="Retention gain (spaced rep)"    delta="" />
        <StatCard icon="🏆" value="Level 8" label="Learner rank"                  delta="" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardTitle>📊 Score Trend (Last 8 Quizzes)</CardTitle>
          <div style={{ position: 'relative', height: 200 }}>
            <Line
              data={trendData}
              options={trendOptions}
              aria-label="Line chart showing quiz score improvement over 8 quizzes"
            />
          </div>
        </Card>

        <Card>
          <CardTitle>🎯 Study Time Distribution</CardTitle>
          {/* Legend */}
          <div className="flex flex-wrap gap-3 mb-3">
            {pieLabels.map((l, i) => (
              <div key={l} className="flex items-center gap-[6px] text-xs text-[var(--text2)]">
                <span className="w-[10px] h-[10px] rounded-sm" style={{ background: pieColors[i] }} />
                {l}
              </div>
            ))}
          </div>
          <div style={{ position: 'relative', height: 160 }}>
            <Doughnut
              data={pieData}
              options={pieOptions}
              aria-label="Doughnut chart of study time by subject"
            />
          </div>
        </Card>
      </div>

      {/* Heatmap-style monthly grid */}
      <Card className="mt-4">
        <CardTitle>📅 Study Activity — Last 35 Days</CardTitle>
        <div className="flex flex-wrap gap-[5px]">
          {Array.from({ length: 35 }, (_, i) => {
            const level = Math.random()
            const bg =
              level > 0.8 ? '#6c63ff'
              : level > 0.55 ? 'rgba(108,99,255,.55)'
              : level > 0.3  ? 'rgba(108,99,255,.25)'
              : 'var(--surface3)'
            return (
              <div
                key={i}
                title={`Day ${35 - i}`}
                className="w-[18px] h-[18px] rounded-[3px] cursor-pointer hover:opacity-80 transition-opacity"
                style={{ background: bg }}
              />
            )
          })}
        </div>
        <div className="flex items-center gap-2 mt-3 text-[11px] text-[var(--text3)]">
          <span>Less</span>
          {['var(--surface3)', 'rgba(108,99,255,.25)', 'rgba(108,99,255,.55)', '#6c63ff'].map((c) => (
            <div key={c} className="w-[14px] h-[14px] rounded-[3px]" style={{ background: c }} />
          ))}
          <span>More</span>
        </div>
      </Card>
    </div>
  )
}
