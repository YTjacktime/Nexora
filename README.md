# NEXORA - Phase 1
npm install && npm run dev
Mock auth/data only (src/services, src/data). Phase 2 swaps services for Supabase.
Chunk 1: design tokens, UI kit, app shell, types, mock data. Login/signup pages come next. Until then, run in the browser console:
localStorage.setItem('nexora.mock.user', JSON.stringify({id:'1',name:'Dev',email:'dev@nexora.dev'}))
