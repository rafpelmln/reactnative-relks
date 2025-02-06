const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Konfigurasi koneksi ke MySQL
const db = mysql.createConnection({
  host: "localhost", // Ganti dengan IP server jika remote
  user: "root",      // Ganti dengan username MySQL Anda
  password: "",      // Ganti dengan password MySQL Anda
  database: "food_xyz",
});

// Tes koneksi ke database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to MySQL database!");
});

// Route untuk root ("/")
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Endpoint untuk login
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  const query = "SELECT * FROM tbl_user WHERE username = ? AND password = ?";
  db.query(query, [username, password], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }

    if (results.length > 0) {
      res.json({ success: true, message: "Login successful", user: results[0] });
    } else {
      res.json({ success: false, message: "Invalid username or password" });
    }
  });
});

// Endpoint untuk signup
app.post("/api/signup", (req, res) => {
  const { nama, username, alamat, telpon, password } = req.body;

  const query =
    "INSERT INTO tbl_user (tipe_user, nama, alamat, telpon, username, password) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(
    query,
    ["User", nama, alamat, telpon, username, password],
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: "Database error" });
      }

      res.json({ success: true, message: "Signup successful" });
    }
  );
});

// Jalankan server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Backend is running!");
  });