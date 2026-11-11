import { createContext, useContext, useState, type ReactNode } from 'react'
import { authService } from '../services/auth'
import type { User } from '../types'
interface Ctx { user: User | null; signIn: typeof authService.signIn; signUp: typeof authService.signUp; signOut: () => Promise<void> }
const AuthCtx = createContext<Ctx | null>(null)
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(authService.getUser())
  const value: Ctx = {
    user,
    signIn: async (e, p) => { const u = await authService.signIn(e, p); setUser(u); return u },
    signUp: async (n, e, p) => { const u = await authService.signUp(n, e, p); setUser(u); return u },
    signOut: async () => { await authService.signOut(); setUser(null) },
  }
  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>
}
export const useAuth = () => { const c = useContext(AuthCtx); if (!c) throw new Error('useAuth outside AuthProvider'); return c }
