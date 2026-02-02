const BASE = "http://localhost:5000";

export const getTasks = () =>
  fetch(`${BASE}/tasks`).then(res => res.json());

export const addTask = task =>
  fetch(`${BASE}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });

export const deleteTask = id =>
  fetch(`${BASE}/tasks/${id}`, { method: "DELETE" });
