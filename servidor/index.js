const express = require("express");
const mysql = require("mysql2");

const app = express();
const PORT = 5000;

const cors = require("cors");
app.use(cors());

const db = mysql.createConnection({
  host: "mysql", 
  user: "root",
  password: "123456",
  database: "mi_base_de_datos"
});

db.connect(err => {
  if (err) {
    console.error("Error conectando a MySQL:", err);
    return;
  }
  console.log("✅ Conectado a MySQL");
});

app.get("/api/mensajes", (req, res) => {
  db.query("SELECT 'Hola desde MySQL' AS mensaje", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
  });
});

app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));
