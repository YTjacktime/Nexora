import type { User } from '../types'
// MOCK AUTH (Phase 1). Not secure. The AuthService interface is what Phase 2 swaps for Supabase Auth.
export interface AuthService {
  getUser(): User | null
  signIn(email: string, password: string): Promise<User>
  signUp(name: string, email: string, password: string): Promise<User>
  signOut(): Promise<void>
}
const KEY = 'nexora.mock.user'
const save = (u: User) => { localStorage.setItem(KEY, JSON.stringify(u)); return u }
export const authService: AuthService = {
  getUser: () => { try { return JSON.parse(localStorage.getItem(KEY) || 'null') } catch { return null } },
  signIn: async (email) => save({ id: 'mock-user', name: email.split('@')[0], email }),
  signUp: async (name, email) => save({ id: 'mock-user', name, email }),
  signOut: async () => localStorage.removeItem(KEY),
}
