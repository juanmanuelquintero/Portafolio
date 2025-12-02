import express from "express";
import cors from "cors";
import { db } from "./db.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

// GET comentarios
app.get("/comentarios", (req, res) => {
  const q = "SELECT * FROM comentarios";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    res.json(data);
  });
});

// POST comentarios
app.post("/comentarios", (req, res) => {
  const { calificacion, nombre, descripcion, fecha } = req.body;

  const q =
    "INSERT INTO comentarios (calificacion, nombre, descripcion, fecha) VALUES (?, ?, ?, ?)";

  db.query(q, [calificacion, nombre, descripcion, fecha], (err, result) => {
    if (err) return res.json(err);
    res.json({ message: "Comentario agregado", id: result.insertId });
  });
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
