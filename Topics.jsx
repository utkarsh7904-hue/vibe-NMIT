import { useNavigate } from 'react-router-dom'
import { Card, Badge, Button, ProgressBar } from '../components/UI'
import { weakTopics } from '../data/data'

const severityConfig = {
  critical:  { variant: 'red',   label: 'Critical',  bar: '#ff6b6b', btn: 'primary' },
  warning:   { variant: 'amber', label: 'Needs Work', bar: '#f59e0b', btn: 'sm-outline' },
  improving: { variant: 'green', label: 'Improving',  bar: '#00d4aa', btn: 'sm-outline' },
}

export default function Topics() {
  const navigate = useNavigate()

  return (
    <div className="p-6 animate-fade-in">
      <p className="text-sm text-[var(--text2)] mb-4">
        AI-detected areas needing focus based on quiz performance and error patterns.
      </p>

      <div className="flex flex-col gap-[10px]">
        {weakTopics.map((item) => {
          const cfg = severityConfig[item.severity]
          return (
            <Card
              key={item.id}
              style={{ borderLeft: `4px solid ${cfg.bar}` }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="text-[15px] font-semibold">{item.topic}</div>
                <Badge variant={cfg.variant}>{cfg.label}</Badge>
              </div>
              <div className="text-[13px] text-[var(--text2)] mb-[10px]">{item.detail}</div>
              <ProgressBar value={item.score} color={cfg.bar} height={6} />
              <div className="mt-3">
                <Button
                  variant={item.severity === 'critical' ? 'sm' : 'sm-outline'}
                  onClick={() => navigate('/quiz')}
                >
                  {item.severity === 'improving' ? 'Keep Going →' : 'Start Targeted Practice →'}
                </Button>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
