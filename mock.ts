import type { Agent, AIProvider, Activity, Plan, UsageMetric } from '../types'
// All mock data lives here. Phase 2 replaces these with Supabase-backed services.
export const providers: AIProvider[] = [
  { id:'anthropic', name:'Claude', description:'Anthropic models', connected:false },
  { id:'openai', name:'OpenAI', description:'GPT models', connected:false },
  { id:'gemini', name:'Gemini', description:'Google models', connected:false },
  { id:'ollama', name:'Ollama', description:'Local models', connected:false },
]
export const agents: Agent[] = [
  { id:'orchestrator', name:'Orchestrator', role:'Coordination', description:'Coordinates the development workflow.', capabilities:['Task planning','Agent routing'], status:'coming-soon' },
  { id:'frontend', name:'Frontend', role:'Client code', description:'Builds and manages frontend work.', capabilities:['Components','State','Styling'], status:'coming-soon' },
  { id:'backend', name:'Backend', role:'Server code', description:'Handles APIs and server-side development.', capabilities:['APIs','Auth','Jobs'], status:'coming-soon' },
  { id:'uiux', name:'UI/UX', role:'Design', description:'Designs interfaces and user experiences.', capabilities:['Layouts','Design systems'], status:'coming-soon' },
  { id:'database', name:'Database', role:'Data', description:'Handles database architecture and queries.', capabilities:['Schema','Queries','Migrations'], status:'coming-soon' },
  { id:'testing', name:'Testing', role:'Quality', description:'Tests features and identifies problems.', capabilities:['Unit tests','Regression checks'], status:'coming-soon' },
]
export const plans: Plan[] = [
  { id:'basic', name:'Basic', monthly:10, yearly:100, features:['Personal workspace','1 project','Basic AI team','Basic usage','GitHub integration'] },
  { id:'standard', name:'Standard', monthly:15, yearly:150, features:['Everything in Basic','More projects','Full AI team','Multiple AI providers','Advanced workflows','Increased usage'] },
  { id:'team', name:'Team', monthly:25, yearly:250, perUser:true, features:['Everything in Standard','Shared workspace','Multiple members','Team permissions','Shared projects','Team activity','Collaboration tools'] },
]
export const demoActivity: Activity[] = [
  { id:'a1', text:'Project "Atlas API" created', at:'2h ago', demo:true },
  { id:'a2', text:'Repository status checked', at:'5h ago', demo:true },
]
export const demoUsage: UsageMetric[] = [
  { label:'Projects', used:1, limit:1, demo:true },{ label:'AI requests', used:0, limit:1000, demo:true },
  { label:'Agent runs', used:0, limit:100, demo:true },{ label:'Storage (MB)', used:12, limit:500, demo:true },
  { label:'Team members', used:1, limit:1, demo:true },
]
