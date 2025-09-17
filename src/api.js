// Implement these using Supabase REST (PostgREST).
// Base: `${import.meta.env.VITE_SUPABASE_URL}/rest/v1`
// Required headers: apikey, Authorization: Bearer <anon>, JSON bodies, Prefer: return=representation on writes

export async function listTasks() {
  throw new Error("Not implemented — implement Supabase REST GET here");
}

export async function createTask(title) {
  throw new Error("Not implemented — implement Supabase REST POST here");
}

export async function toggleTask(id, completed) {
  throw new Error("Not implemented — implement Supabase REST PATCH here");
}

export async function deleteTask(id) {
  throw new Error("Not implemented — implement Supabase REST DELETE here");
}
