const API = "http://localhost:5000/tasks";

/* ----------- DOM ELEMENTS ----------- */
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const dateInput = document.getElementById("date");

const allDayInput = document.getElementById("allDay");
const startTimeInput = document.getElementById("startTime");
const endTimeInput = document.getElementById("endTime");
const timeInputs = document.getElementById("timeInputs");

const tasksContainer = document.getElementById("tasks");
const addBtn = document.getElementById("addBtn");

/* ----------- STATE ----------- */
let selectedColor = "#4f46e5";

/* ----------- ALL DAY TOGGLE ----------- */
function toggleTimeInputs() {
  if (allDayInput.checked) {
    timeInputs.classList.add("hidden");
    startTimeInput.value = "";
    endTimeInput.value = "";
  } else {
    timeInputs.classList.remove("hidden");
  }
}

allDayInput.addEventListener("change", toggleTimeInputs);
toggleTimeInputs();

/* ----------- COLOR PICKER ----------- */
document.querySelectorAll(".color").forEach(colorEl => {
  colorEl.addEventListener("click", () => {
    document.querySelectorAll(".color").forEach(c =>
      c.classList.remove("selected")
    );
    colorEl.classList.add("selected");
    selectedColor = colorEl.dataset.color;
  });
});

/* ----------- FETCH TASKS ----------- */
async function fetchTasks() {
  const res = await fetch(API);
  const tasks = await res.json();

  tasksContainer.innerHTML = "";

  tasks.forEach(task => {
    const div = document.createElement("div");
    div.className = "task";
    div.style.borderLeftColor = task.color || "#4f46e5";

    const timeText = task.allDay
      ? "All day"
      : task.startTime && task.endTime
        ? `${task.startTime} - ${task.endTime}`
        : "Time not set";

    div.innerHTML = `
      <strong>${task.title}</strong><br/>
      <small>${task.description || ""}</small><br/>
      <small>${timeText}</small><br/>
      <button class="delete">Delete</button>
    `;

    div.querySelector(".delete").addEventListener("click", () => {
      deleteTask(task.id);
    });

    tasksContainer.appendChild(div);
  });
}

/* ----------- CREATE TASK ----------- */
async function createTask() {
  const title = titleInput.value.trim();
  const date = dateInput.value;

  if (!title || !date) {
    alert("Title and Date are required");
    return;
  }

  const payload = {
    title,
    description: descriptionInput.value,
    date,
    allDay: allDayInput.checked,
    startTime: allDayInput.checked ? null : startTimeInput.value || null,
    endTime: allDayInput.checked ? null : endTimeInput.value || null,
    color: selectedColor
  };

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  /* reset form */
  titleInput.value = "";
  descriptionInput.value = "";
  startTimeInput.value = "";
  endTimeInput.value = "";
  allDayInput.checked = true;
  toggleTimeInputs();

  fetchTasks();
}

/* ----------- DELETE TASK ----------- */
async function deleteTask(id) {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  fetchTasks();
}

/* ----------- EVENTS ----------- */
addBtn.addEventListener("click", createTask);

/* ----------- INIT ----------- */
fetchTasks();
