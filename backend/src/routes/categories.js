import express from "express";
import { db } from "../firebase.js";

const router = express.Router();
const categoriesRef = db.collection("categories");

router.get("/", async (_, res) => {
  const snapshot = await categoriesRef.get();
  const categories = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
  res.json(categories);
});

router.post("/", async (req, res) => {
  const doc = await categoriesRef.add(req.body);
  res.json({ id: doc.id });
});

export default router;
