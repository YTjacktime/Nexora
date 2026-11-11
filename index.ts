export type ID = string
export interface User { id: ID; name: string; email: string; avatarUrl?: string }
export type ProjectStatus = 'active' | 'paused' | 'archived'
export interface Project { id: ID; name: string; description: string; projectType: string; stack: string[]; status: ProjectStatus; updatedAt: string }
export type PlanId = 'basic' | 'standard' | 'team'
export interface Plan { id: PlanId; name: string; monthly: number; yearly: number; perUser?: boolean; features: string[] }
export interface Subscription { plan: PlanId; cycle: 'monthly' | 'yearly'; status: 'placeholder' }
export type ProviderId = 'anthropic' | 'openai' | 'gemini' | 'ollama'
export interface AIProvider { id: ProviderId; name: string; description: string; connected: boolean }
export interface Agent { id: ID; name: string; role: string; description: string; capabilities: string[]; status: 'coming-soon' }
export interface Activity { id: ID; text: string; at: string; demo: true }
export interface UsageMetric { label: string; used: number; limit: number; demo: true }
