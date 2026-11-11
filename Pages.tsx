import { Link } from 'react-router-dom'
import { Badge, Card, EmptyState, StatCard } from '../components/ui'
import { agents, demoActivity, providers } from '../data/mock'
export const Coming = ({ title }: { title: string }) => <>
  <div><h1>{title}</h1><p className="muted">Available in the next chunk of Phase 1.</p></div>
  <EmptyState title="Coming soon" text="This page is part of the next build step." /></>
export const Dashboard = () => <>
  <div><h1>Welcome back.</h1><p className="muted">Your development workspace is ready.</p></div>
  <div className="grid-4">
    <StatCard label="Projects" value={0} /><StatCard label="AI Agents" value={agents.length} note="Coming soon" />
    <StatCard label="Connected providers" value={providers.filter(p => p.connected).length} /><StatCard label="Usage" value="0" note="Demo data" /></div>
  <section style={{ display: 'grid', gap: 12 }}><h2>Recent projects</h2>
    <EmptyState title="No projects yet" text="Create your first project and start building." action={<Link className="btn btn-primary" to="/projects/new">+ New Project</Link>} /></section>
  <section style={{ display: 'grid', gap: 12 }}><h2>Recent activity <Badge>Demo data</Badge></h2>
    <Card>{demoActivity.map(a => <div key={a.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}><span>{a.text}</span><span className="muted">{a.at}</span></div>)}</Card></section></>
