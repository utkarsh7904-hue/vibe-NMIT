import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Badge, Button } from '../components/UI'
import { quizQuestions } from '../data/data'

const diffBadge = { Hard: 'red', Medium: 'amber', Easy: 'green' }
const letters = ['A', 'B', 'C', 'D']

export default function Quiz() {
  const navigate = useNavigate()
  const [idx, setIdx]         = useState(0)
  const [selected, setSelected] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [score, setScore]       = useState(0)
  const [results, setResults]   = useState([])   // {correct: bool}
  const [done, setDone]         = useState(false)

  const q   = quizQuestions[idx]
  const pct = Math.round((idx / quizQuestions.length) * 100)

  function handleSelect(i) {
    if (answered) return
    setSelected(i)
  }

  function handleCheck() {
    if (selected === null || answered) return
    setAnswered(true)
    const correct = selected === q.answer
    if (correct) setScore((s) => s + 1)
    setResults((r) => [...r, { correct, topic: q.topic }])
  }

  function handleNext() {
    const nextIdx = idx + 1
    if (nextIdx >= quizQuestions.length) {
      setDone(true)
    } else {
      setIdx(nextIdx)
      setSelected(null)
      setAnswered(false)
    }
  }

  function handleSkip() {
    setResults((r) => [...r, { correct: false, topic: q.topic }])
    handleNext()
    setSelected(null)
    setAnswered(false)
    if (idx + 1 >= quizQuestions.length) setDone(true)
    else setIdx((i) => i + 1)
  }

  function restart() {
    setIdx(0); setSelected(null); setAnswered(false)
    setScore(0); setResults([]); setDone(false)
  }

  if (done) {
    const pctScore = Math.round((score / quizQuestions.length) * 100)
    const weakTopics = [...new Set(results.filter((r) => !r.correct).map((r) => r.topic))]
    return (
      <div className="p-6 animate-fade-in">
        <div className="max-w-[680px] mx-auto">
          <Card className="text-center p-9">
            <div className="text-sm text-[var(--text2)] mb-2">Quiz Complete!</div>
            <div className="text-[64px] font-bold text-[var(--accent)] leading-none">{pctScore}%</div>
            <div className="text-[15px] text-[var(--text2)] mt-[6px] mb-6">
              {score} / {quizQuestions.length} correct
            </div>

            <div className="flex gap-3 justify-center flex-wrap mb-6">
              <ResultBox value={score}                              label="Correct"   color="var(--accent2)" />
              <ResultBox value={quizQuestions.length - score}       label="Incorrect" color="var(--accent3)" />
              <ResultBox value={`+${score * 10} XP`}               label="Earned"    color="var(--amber)"   />
            </div>

            {weakTopics.length > 0 && (
              <div className="text-left bg-[var(--surface2)] rounded-lg p-4 mt-4">
                <div className="text-[13px] font-semibold text-[#ff9a9a] mb-2">
                  AI identified weak areas:
                </div>
                {weakTopics.map((t) => (
                  <div key={t} className="flex items-center gap-2 py-[6px] text-[13px] text-[var(--text2)]">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent3)] shrink-0" />
                    {t}
                  </div>
                ))}
                <div className="text-xs text-[var(--text3)] mt-2">
                  These topics have been added to your spaced repetition schedule.
                </div>
              </div>
            )}

            <div className="flex gap-3 justify-center mt-6">
              <Button onClick={restart}>Retry Quiz</Button>
              <Button variant="outline" onClick={() => navigate('/')}>Back to Dashboard</Button>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 animate-fade-in">
      <div className="max-w-[680px] mx-auto">
        {/* Progress header */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 mb-4 flex items-center gap-4">
          <span className="text-[13px] text-[var(--text2)] shrink-0">
            Question {idx + 1} / {quizQuestions.length}
          </span>
          <div className="flex-1 h-2 bg-[var(--surface3)] rounded overflow-hidden">
            <div
              className="h-full bg-[var(--accent)] rounded transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="text-[13px] font-semibold text-[var(--accent)] shrink-0">
            Score: {score}
          </span>
        </div>

        {/* Question */}
        <Card className="mb-4">
          <div className="flex gap-2 mb-3">
            <Badge variant="blue">{q.subject}</Badge>
            <Badge variant={diffBadge[q.difficulty]}>{q.difficulty}</Badge>
            <span className="text-[12px] text-[var(--text3)] self-center">{q.topic}</span>
          </div>

          <p className="text-[17px] font-medium leading-relaxed mb-6">{q.question}</p>

          <div className="flex flex-col gap-[10px]">
            {q.options.map((opt, i) => (
              <Option
                key={i}
                letter={letters[i]}
                text={opt}
                state={
                  !answered
                    ? i === selected
                      ? 'selected'
                      : 'idle'
                    : i === q.answer
                    ? 'correct'
                    : i === selected && selected !== q.answer
                    ? 'wrong'
                    : 'idle'
                }
                onClick={() => handleSelect(i)}
              />
            ))}
          </div>

          {answered && (
            <div className="mt-4 bg-[var(--surface2)] rounded-lg p-[14px] text-[13px] text-[var(--text2)] leading-relaxed">
              <span className="font-semibold text-[var(--accent2)]">Explanation: </span>
              {q.explanation}
            </div>
          )}
        </Card>

        <div className="flex gap-[10px] justify-end">
          {!answered && (
            <Button variant="outline" onClick={handleSkip}>Skip</Button>
          )}
          <Button
            onClick={answered ? handleNext : handleCheck}
            disabled={!answered && selected === null}
          >
            {answered ? 'Next →' : 'Check Answer'}
          </Button>
        </div>
      </div>
    </div>
  )
}

function Option({ letter, text, state, onClick }) {
  const styles = {
    idle:     'border-[var(--border)] hover:border-[var(--accent)] hover:bg-[rgba(108,99,255,.08)]',
    selected: 'border-[var(--accent)] bg-[rgba(108,99,255,.15)] text-[var(--accent)]',
    correct:  'border-[var(--accent2)] bg-[rgba(0,212,170,.12)] text-[var(--accent2)]',
    wrong:    'border-[var(--accent3)] bg-[rgba(255,107,107,.12)] text-[#ff9a9a]',
  }
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-[10px] border-[1.5px] rounded-lg p-[13px_16px] cursor-pointer text-sm transition-all duration-150 ${styles[state]}`}
    >
      <div className="w-[26px] h-[26px] rounded-md bg-[var(--surface3)] flex items-center justify-center text-xs font-semibold shrink-0">
        {letter}
      </div>
      {text}
    </div>
  )
}

function ResultBox({ value, label, color }) {
  return (
    <div className="bg-[var(--surface2)] rounded-lg px-5 py-3 text-center">
      <div className="text-[22px] font-bold" style={{ color }}>{value}</div>
      <div className="text-[11px] text-[var(--text2)]">{label}</div>
    </div>
  )
}
