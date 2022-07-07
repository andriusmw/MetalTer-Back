require("dotenv").config();
const bcrypt = require("bcrypt");
const getPool = require("./getPool");

const populateDB = async () => {
  try {
    const pool = getPool();

    console.log("Inserting data in users...");

    await pool.query(
      `INSERT INTO users (email, password, role, name) VALUES 
      ("admin@email.com", ?, "band", "FUCKING METALLICA HELL YEAH M*THERF*CKERS");`,
      [await bcrypt.hash("123456", 10)]
    );

    console.log("¡All done!");
  } catch (error) {
    console.error(error);
  } finally {
    process.exit();
  }
};

populateDB();
