import { Navigate, Route, Routes } from 'react-router-dom'
import AppShell from './components/layout/AppShell'
import { Coming, Dashboard } from './pages/Pages'
const stubs: [string, string][] = [['projects','Projects'],['ai-team','AI Team'],['providers','Providers'],['github','GitHub'],['usage','Usage'],['billing','Billing'],['settings','Settings']]
export default function App() {
  return <Routes>
    <Route element={<AppShell />}>
      <Route path="/dashboard" element={<Dashboard />} />
      {stubs.map(([p, t]) => <Route key={p} path={'/' + p} element={<Coming title={t} />} />)}
    </Route>
    <Route path="*" element={<Navigate to="/dashboard" replace />} />
  </Routes>
}
