import React, { useEffect, useState } from "react";
// Intentionally keep these imports – they’ll wire them up during the session.
// If you’d rather they write handlers first, comment these out and ask them to import when ready.
import { listTasks, createTask, toggleTask, deleteTask } from "./api";

export default function App() {
  const [tasks, setTasks] = useState([]);      // Candidate will populate
  const [title, setTitle] = useState("");      // Candidate will use for adds
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  // TODO (candidate): on mount, load tasks with listTasks()
  useEffect(() => {
    // setLoading(true);
    // listTasks().then(setTasks).catch(e => setErr(e.message)).finally(() => setLoading(false));
  }, []);

  // TODO (candidate): implement add handler using createTask()
  async function onAdd(e) {
    e.preventDefault();
    // const t = title.trim();
    // if (!t) return;
    // try {
    //   const created = await createTask(t);
    //   setTasks(prev => [created, ...prev]);
    //   setTitle("");
    // } catch (e) {
    //   setErr(e?.message || "Failed to add");
    // }
  }

  // TODO (candidate): implement toggle handler using toggleTask()
  async function onToggle(task) {
    // const next = !task.completed;
    // Optimistic update optional
    // setTasks(prev => prev.map(x => x.id === task.id ? { ...x, completed: next } : x));
    // try { await toggleTask(task.id, next); }
    // catch (e) { revert + setErr(...) }
  }

  // TODO (candidate): implement delete handler using deleteTask()
  async function onDelete(id) {
    // const keep = tasks;
    // setTasks(prev => prev.filter(x => x.id !== id));
    // try { await deleteTask(id); } catch (e) { setErr(...); setTasks(keep); }
  }

  return (
    <main style={{ maxWidth: 520, margin: "40px auto", fontFamily: "system-ui, sans-serif" }}>
      <h1>FVS Tasks</h1>

    </main>
  );
}
