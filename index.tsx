import { useEffect, useRef, type ButtonHTMLAttributes, type InputHTMLAttributes, type ReactNode } from 'react'
type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default' | 'primary' | 'ghost' | 'danger'; size?: 'md' | 'sm' }
export const Button = ({ variant = 'default', size = 'md', className = '', ...p }: BtnProps) =>
  <button className={`btn ${variant !== 'default' ? 'btn-' + variant : ''} ${size === 'sm' ? 'btn-sm' : ''} ${className}`} {...p} />
export const Card = ({ children, className = '' }: { children: ReactNode; className?: string }) => <div className={`card ${className}`}>{children}</div>
export const Badge = ({ children, tone }: { children: ReactNode; tone?: 'purple' | 'red' }) => <span className={`badge ${tone ? 'badge-' + tone : ''}`}>{children}</span>
export const StatusIndicator = ({ status, label }: { status: 'active' | 'warn' | 'error' | 'idle'; label: string }) =>
  <span className={`status status-${status}`}><i aria-hidden />{label}</span>
export const StatCard = ({ label, value, note }: { label: string; value: ReactNode; note?: string }) =>
  <Card className="stat"><div className="muted">{label}</div><div className="v">{value}</div>{note && <div className="demo">{note}</div>}</Card>
export const EmptyState = ({ title, text, action }: { title: string; text: string; action?: ReactNode }) =>
  <div className="empty"><h2>{title}</h2><p className="muted">{text}</p>{action}</div>
export function Input({ label, error, id, ...p }: InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }) {
  const i = id ?? label.toLowerCase().replace(/\W+/g, '-')
  return <div className="field"><label htmlFor={i}>{label}</label>
    <input id={i} className="input" aria-invalid={!!error} aria-describedby={error ? i + '-e' : undefined} {...p} />
    {error && <span id={i + '-e'} className="err" role="alert">{error}</span>}</div>
}
export function Modal({ open, title, onClose, children, actions }: { open: boolean; title: string; onClose: () => void; children: ReactNode; actions?: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!open) return
    ref.current?.focus()
    const k = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k)
  }, [open, onClose])
  if (!open) return null
  return <div className="overlay" onMouseDown={e => e.target === e.currentTarget && onClose()}>
    <div className="modal" role="dialog" aria-modal="true" aria-label={title} tabIndex={-1} ref={ref}>
      <h2>{title}</h2>{children}<div className="actions">{actions ?? <Button onClick={onClose}>Close</Button>}</div></div></div>
}
