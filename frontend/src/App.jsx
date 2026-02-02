import { useEffect, useState } from "react";
import { getTasks, addTask, deleteTask } from "./api";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const createTask = async () => {
    if (!title) return;
    await addTask({
      title,
      date: new Date().toISOString(),
      allDay: true,
      color: "#4f46e5",
    });
    setTitle("");
    loadTasks();
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Task App</h1>

      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Task title"
      />
      <button onClick={createTask}>Add</button>

      <ul>
        {tasks.map(t => (
          <li key={t.id}>
            {t.title}
            <button onClick={() => deleteTask(t.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
