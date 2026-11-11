import { useState } from 'react'
import { NavLink, Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { Badge, Button } from '../ui'
const links = [['dashboard','Overview'],['projects','Projects'],['ai-team','AI Team'],['providers','Providers'],['github','GitHub'],['usage','Usage'],['billing','Billing'],['settings','Settings']]
export default function AppShell() {
  const { user, signOut } = useAuth()
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  if (!user) return <Navigate to="/login" replace state={{ from: pathname }} />
  const crumb = links.find(([p]) => pathname.startsWith('/' + p))?.[1] ?? 'Workspace'
  return <div className="shell">
    {open && <div className="scrim" onClick={() => setOpen(false)} />}
    <aside className={`sidebar ${open ? 'open' : ''}`} aria-label="Primary">
      <div className="logo">NEXOR<b>A</b></div>
      <nav className="nav">{links.map(([p, l]) => <NavLink key={p} to={'/' + p} onClick={() => setOpen(false)}>{l}</NavLink>)}</nav>
      <div className="side-foot"><div>{user.name}</div><div className="muted">{user.email}</div>
        <div><Badge tone="purple">Standard (demo)</Badge></div>
        <Button variant="ghost" size="sm" onClick={signOut}>Log out</Button></div>
    </aside>
    <div className="main">
      <header className="topbar">
        <Button variant="ghost" className="menu-btn" aria-label="Open navigation" onClick={() => setOpen(true)}>Menu</Button>
        <div className="crumbs">NEXORA / <b>{crumb}</b></div><div className="grow" />
        <input className="input" placeholder="Search (soon)" aria-label="Search" disabled style={{ width: 180 }} />
      </header>
      <main className="content"><Outlet /></main>
    </div>
  </div>
}
