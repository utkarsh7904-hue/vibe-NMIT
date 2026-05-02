import { Routes, Route } from 'react-router-dom'
import Sidebar   from './components/Sidebar'
import TopBar    from './components/TopBar'
import Dashboard from './pages/Dashboard'
import Planner   from './pages/Planner'
import Quiz      from './pages/Quiz'
import Chatbot   from './pages/Chatbot'
import Analytics from './pages/Analytics'
import Topics    from './pages/Topics'

export default function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-y-auto bg-[var(--bg)]">
          <Routes>
            <Route path="/"          element={<Dashboard />} />
            <Route path="/planner"   element={<Planner />}   />
            <Route path="/quiz"      element={<Quiz />}       />
            <Route path="/chatbot"   element={<Chatbot />}    />
            <Route path="/analytics" element={<Analytics />}  />
            <Route path="/topics"    element={<Topics />}     />
            <Route path="*"          element={<Dashboard />}  />
          </Routes>
        </main>
      </div>
    </div>
  )
}
