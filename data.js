// ─── Quiz questions ────────────────────────────────────────────────────────
export const quizQuestions = [
  {
    id: 1,
    subject: 'Physics',
    topic: 'Thermodynamics',
    difficulty: 'Hard',
    question: 'Which of the following best describes the Carnot cycle?',
    options: [
      'A reversible cycle between two heat reservoirs giving maximum efficiency',
      'An irreversible process that increases entropy',
      'A cycle used in diesel engines exclusively',
      'A process occurring at constant temperature only',
    ],
    answer: 0,
    explanation:
      'The Carnot cycle is a theoretical reversible thermodynamic cycle operating between two temperatures, delivering the maximum possible efficiency for any heat engine: η = 1 − T_cold/T_hot.',
  },
  {
    id: 2,
    subject: 'Chemistry',
    topic: 'Organic Mechanisms',
    difficulty: 'Medium',
    question: 'In an SN2 reaction, which statement is most accurate?',
    options: [
      'It involves a carbocation intermediate',
      'The reaction rate depends only on the substrate',
      'Backside attack occurs with inversion of configuration',
      'It proceeds faster with tertiary substrates',
    ],
    answer: 2,
    explanation:
      'SN2 involves simultaneous bond-making and bond-breaking. The nucleophile attacks from the back face, causing Walden inversion of stereochemistry. Rate = k[substrate][nucleophile].',
  },
  {
    id: 3,
    subject: 'Mathematics',
    topic: 'Calculus',
    difficulty: 'Medium',
    question: 'What is ∫ x·eˣ dx?',
    options: [
      'eˣ(x − 1) + C',
      'xeˣ + eˣ + C',
      'eˣ(x + 1) + C',
      'x²eˣ / 2 + C',
    ],
    answer: 0,
    explanation:
      'Using integration by parts (u = x, dv = eˣ dx): ∫x·eˣ dx = xeˣ − ∫eˣ dx = xeˣ − eˣ + C = eˣ(x − 1) + C.',
  },
  {
    id: 4,
    subject: 'Physics',
    topic: 'Waves',
    difficulty: 'Easy',
    question:
      'What happens to the observed frequency of sound as the source moves towards the observer?',
    options: [
      'Frequency decreases',
      'Frequency increases',
      'Frequency stays the same',
      'Wavelength increases',
    ],
    answer: 1,
    explanation:
      "The Doppler effect — as the source approaches, wavefronts are compressed, so the observer perceives a higher frequency. f' = f·(v / (v − v_s)).",
  },
  {
    id: 5,
    subject: 'Chemistry',
    topic: 'Periodic Table',
    difficulty: 'Easy',
    question: 'Which element has the highest electronegativity?',
    options: ['Oxygen', 'Chlorine', 'Fluorine', 'Nitrogen'],
    answer: 2,
    explanation:
      'Fluorine (F) has the highest electronegativity of all elements at 3.98 on the Pauling scale, due to its small atomic radius and high nuclear charge.',
  },
  {
    id: 6,
    subject: 'Mathematics',
    topic: 'Algebra',
    difficulty: 'Easy',
    question: 'What are the roots of x² − 5x + 6 = 0?',
    options: ['x = 1, 6', 'x = 2, 3', 'x = −2, −3', 'x = −1, 6'],
    answer: 1,
    explanation:
      'Factoring: (x − 2)(x − 3) = 0 → x = 2 or x = 3. You can verify: 2+3=5, 2×3=6 ✓',
  },
  {
    id: 7,
    subject: 'Biology',
    topic: 'Cell Biology',
    difficulty: 'Medium',
    question: 'Which organelle is responsible for ATP synthesis in eukaryotic cells?',
    options: ['Ribosome', 'Golgi apparatus', 'Mitochondria', 'Endoplasmic reticulum'],
    answer: 2,
    explanation:
      'Mitochondria are the "powerhouses of the cell." They perform oxidative phosphorylation via the electron transport chain to produce ATP from ADP.',
  },
  {
    id: 8,
    subject: 'Physics',
    topic: 'Electricity',
    difficulty: 'Medium',
    question: "According to Ohm's law, if resistance doubles while voltage stays constant, current:",
    options: ['Doubles', 'Stays the same', 'Halves', 'Quadruples'],
    answer: 2,
    explanation:
      "Ohm's law: I = V/R. If R doubles and V is constant, then I = V/(2R) — current halves.",
  },
]

// ─── Today's study plan ────────────────────────────────────────────────────
export const todayPlan = [
  {
    id: 1,
    subject: 'Physics',
    topic: 'Thermodynamics — Carnot Cycle',
    subtitle: 'AI detected weakness · 35 mins · 12 flashcards',
    priority: 'critical',
    label: 'Weak',
    color: '#ff6b6b',
    page: 'quiz',
  },
  {
    id: 2,
    subject: 'Chemistry',
    topic: 'Organic Chemistry — Mechanisms',
    subtitle: 'Spaced repetition review · 20 mins',
    priority: 'review',
    label: 'Review',
    color: '#f59e0b',
    page: 'quiz',
  },
  {
    id: 3,
    subject: 'Mathematics',
    topic: 'Integration by Parts — Practice',
    subtitle: '10-problem set · ~40 mins',
    priority: 'new',
    label: 'New',
    color: '#6c63ff',
    page: 'quiz',
  },
  {
    id: 4,
    subject: 'English',
    topic: 'Reading Comprehension',
    subtitle: 'Passage practice · 25 mins',
    priority: 'ok',
    label: 'On Track',
    color: '#00d4aa',
    page: 'quiz',
  },
]

// ─── Weak topics ──────────────────────────────────────────────────────────
export const weakTopics = [
  {
    id: 1,
    subject: 'Physics',
    topic: 'Thermodynamics — Entropy & Carnot',
    score: 38,
    severity: 'critical',
    detail: 'Avg score: 38% · 4 failed quizzes · Last attempt: 2 days ago',
  },
  {
    id: 2,
    subject: 'Chemistry',
    topic: 'Organic Chemistry — SN1 vs SN2',
    score: 54,
    severity: 'warning',
    detail: 'Avg score: 54% · 3 failed quizzes · Last attempt: 4 days ago',
  },
  {
    id: 3,
    subject: 'Mathematics',
    topic: 'Integration by Parts',
    score: 61,
    severity: 'warning',
    detail: 'Avg score: 61% · 2 failed quizzes · Last attempt: yesterday',
  },
  {
    id: 4,
    subject: 'Physics',
    topic: 'Optics & Wave Interference',
    score: 73,
    severity: 'improving',
    detail: 'Avg score: 73% · Was 52% last month · Good progress!',
  },
]

// ─── Planner schedule ─────────────────────────────────────────────────────
export const schedule = [
  {
    time: '09:00 AM',
    topic: 'Thermodynamics — Carnot Cycle',
    sub: 'AI Priority · 35 mins · Weak topic',
    priority: 'critical',
    borderColor: '#ff6b6b',
  },
  {
    time: '10:00 AM',
    topic: 'Organic Chemistry Mechanisms',
    sub: 'Spaced Repetition · 20 mins · Day 3 review',
    priority: 'review',
    borderColor: '#f59e0b',
  },
  {
    time: '11:00 AM',
    topic: 'Integration by Parts',
    sub: 'Practice set · 40 mins · 10 problems',
    priority: 'practice',
    borderColor: '#6c63ff',
  },
  {
    time: '02:00 PM',
    topic: 'English Reading Comprehension',
    sub: '2 passages · 25 mins',
    priority: 'ok',
    borderColor: '#00d4aa',
  },
  {
    time: '04:00 PM',
    topic: 'Evening Review — All Subjects',
    sub: 'AI flashcard drill · 20 mins',
    priority: 'review',
    borderColor: '#a78bfa',
  },
]

// ─── AI Tutor responses ───────────────────────────────────────────────────
export const aiResponses = {
  default: [
    `Based on your recent performance, I've noticed you're doing well in Biology (88%) but could use more focus on Chemistry.\n\nWould you like me to generate some practice problems on that topic?`,
    `This concept builds on fundamentals you've already mastered. The key insight is to connect it back to what you already know.\n\nWant me to create a quick 3-question check on this?`,
    `Based on your study history, I recommend spending about 20 minutes on this topic today. Your spaced repetition schedule already has it queued for review.\n\nShall I start a mini-quiz right now?`,
  ],
  newton: `Newton's three laws of motion are foundational to classical mechanics:\n\n**Law of Inertia** — An object at rest stays at rest unless acted on by a net external force.\n\n**F = ma** — Force equals mass times acceleration. Push a 2 kg box with 10 N → 5 m/s² acceleration.\n\n**Action-Reaction** — Every action has an equal and opposite reaction.\n\nWant to test yourself with a quick quiz on this?`,
  spaced: `Spaced repetition is a proven memory technique where you review material at increasing intervals — just before you're about to forget it.\n\nStudyMind uses the SM-2 algorithm:\n- New card → review in 1 day\n- Remembered → 3 days → 7 → 14 → 30…\n- Forgotten → reset to 1 day\n\nResearch shows this improves long-term retention by ~32% compared to passive re-reading. You have 41 cards due today!`,
  integration: `Integration by parts uses the formula: **∫u dv = uv − ∫v du**\n\nChoose u using the LIATE rule: **L**ogarithmic > **I**nverse trig > **A**lgebraic > **T**rig > **E**xponential.\n\nExample: ∫x·eˣ dx\n- u = x → du = dx\n- dv = eˣ dx → v = eˣ\n- Result: xeˣ − ∫eˣ dx = eˣ(x−1) + C ✓\n\nShall I give you 3 practice problems at increasing difficulty?`,
  weak: `Based on your quiz data this week, here are your top 3 areas to focus on:\n\n🔴 **Thermodynamics** (38% avg) — Entropy and Carnot cycle\n🟡 **Organic Chemistry** (54% avg) — SN1 vs SN2 mechanisms\n🟡 **Integration** (61% avg) — By parts technique\n\nI've already added targeted sessions to tomorrow's study plan. Want to start with Thermodynamics right now?`,
  tip: `Here's a powerful study tip:\n\n**Use active recall, not passive re-reading.**\n\n1. Read a section (5 mins)\n2. Close notes, write from memory (10 mins)\n3. Check gaps — review only those\n4. Sleep — memory consolidates during REM!\n\nResearch shows active recall strengthens memory 2–3× more than re-reading. You've got this! 💪`,
}

export function getAIResponse(msg, idx) {
  const m = msg.toLowerCase()
  if (m.includes('newton')) return aiResponses.newton
  if (m.includes('spaced') || m.includes('repetition')) return aiResponses.spaced
  if (m.includes('integration') || m.includes('calculus')) return aiResponses.integration
  if (m.includes('weak') || m.includes('struggling') || m.includes('topic')) return aiResponses.weak
  if (m.includes('tip') || m.includes('exam') || m.includes('study tip')) return aiResponses.tip
  return aiResponses.default[idx % aiResponses.default.length]
}
