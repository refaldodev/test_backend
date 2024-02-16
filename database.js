const { Pool } = require("pg");

// Konfigurasi koneksi ke database PostgreSQL
const pool = new Pool({
  user: "username",
  host: "localhost",
  database: "postgres",
  password: "password",
  port: 5432, // Port default PostgreSQL
});

// Fungsi untuk membuat database data_kepegawaian
async function createDatabase() {
  const client = await pool.connect();
  try {
    // Perintah SQL untuk membuat database data_kepegawaian
    const queryText = "CREATE DATABASE data_kepegawaian";
    await client.query(queryText);
    console.log('Database "data_kepegawaian" berhasil dibuat.');
  } catch (error) {
    console.error("Gagal membuat database:", error);
  } finally {
    client.release();
  }
}

// Panggil fungsi untuk membuat database
createDatabase();
