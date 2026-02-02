import express from "express";
import { db } from "../firebase.js";

const router = express.Router();
const tasksRef = db.collection("tasks");

// GET all tasks
router.get("/", async (req, res) => {
  try {
    const snapshot = await tasksRef.get();
    const tasks = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// CREATE task
router.post("/", async (req, res) => {
  try {
    const { title, description = "", date, allDay = false, color } = req.body;

    if (!title || !date) {
      return res.status(400).json({ error: "Title and date required" });
    }

    const task = {
      title,
      description,
      date,
      allDay,
      color,
      createdAt: new Date(),
    };

    const doc = await tasksRef.add(task);
    res.status(201).json({ id: doc.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ DELETE task
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await tasksRef.doc(id).delete();
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
