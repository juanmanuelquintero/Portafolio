import mysql from "mysql2";

export const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

db.connect((err) => {
  if (err) {
    console.log("Error en la conexión:", err);
    return;
  }
  console.log("Conectado a MySQL (basededatos)");
});
