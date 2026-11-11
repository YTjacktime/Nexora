import type { Project } from '../types'
// MOCK data layer (Phase 1). Async signatures match what a Supabase-backed version will expose.
const KEY = 'nexora.mock.projects'
const read = (): Project[] => { try { return JSON.parse(localStorage.getItem(KEY) || '[]') } catch { return [] } }
const write = (p: Project[]) => localStorage.setItem(KEY, JSON.stringify(p))
export const projectService = {
  list: async () => read(),
  get: async (id: string) => read().find(p => p.id === id) ?? null,
  create: async (input: Omit<Project, 'id' | 'updatedAt' | 'status'>) => {
    const p: Project = { ...input, id: crypto.randomUUID(), status: 'active', updatedAt: new Date().toISOString() }
    write([p, ...read()]); return p
  },
  remove: async (id: string) => write(read().filter(p => p.id !== id)),
}
