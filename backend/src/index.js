import express from "express";
import cors from "cors";
import taskRoutes from "./routes/tasks.js";
import categoryRoutes from "./routes/categories.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/tasks", taskRoutes);
app.use("/categories", categoryRoutes);

app.get("/", (_, res) => {
  res.send("Backend is running");
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
