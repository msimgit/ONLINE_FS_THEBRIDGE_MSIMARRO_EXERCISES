import { useState } from "react"

export default function App() {
  const [text, setText] = useState("")
  const [tasks, setTasks] = useState([])
  const addTask = () => {
    if (!text.trim()) return
    setTasks([...tasks, { id: Date.now(), text, done: false }])
    setText("")
  }
  const toggleTask = (id) => {
  setTasks(tasks.map(t =>
    t.id === id ? { ...t, done: !t.done } : t
  ))
  }

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto", padding: "20px" }}>
      <h1>Mis tareas</h1>
      <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Nueva tarea..."
          style={{ flex: 1, padding: "8px" }}
        />
        <button onClick={addTask}>Añadir</button>
    </div>
    {tasks.map(task => (
      <div key={task.id}
        onClick={() => toggleTask(task.id)}
        style={{ cursor: "pointer", textDecoration: task.done ? "line-through" : "none", padding: "8px 0" }}>
        {task.done ? "✅" : "⬜"} {task.text}
      </div>
    ))}
  </div>
  )
}