import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "shinkansen.proxy.rlwy.net",
  user: "root",
  password: "wbvYIEhIJJwRkMQiZLiNSUDwEdmQgYMp",
  database: "railway",
  port: 41100,
});

db.connect((err) => {
  if (err) {
    console.log("Error en la conexión:", err);
    return;
  }
  console.log("Conectado a MySQL (basededatos)");
});
