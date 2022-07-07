require("dotenv").config();
const getPool = require("./getPool");

const initDB = async () => {
  try {
    const pool = getPool();

    console.log("Deleting tables...");

    await pool.query("DROP TABLE IF EXISTS votes;");
    await pool.query("DROP TABLE IF EXISTS entries;");
    await pool.query("DROP TABLE IF EXISTS users;");
   

    console.log("Creating users table...");

    await pool.query(`
      CREATE TABLE users (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(100) NOT NULL,
        avatar VARCHAR(200),
        role ENUM("band", "fan") DEFAULT "fan",
        name VARCHAR(100),
        bio VARCHAR(400),
        link1 VARCHAR(150),
        link2 VARCHAR(150),
        link3 VARCHAR(150),
        link4 VARCHAR(150),
        registrationCode VARCHAR(100)
      );
      `);

    console.log("Creating entries table...");

    await pool.query(`
      CREATE TABLE entries (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        description VARCHAR(500),
        photo VARCHAR(200),
        video_url VARCHAR(200) DEFAULT NULL,
        country VARCHAR(100) NOT NULL,
        category ENUM("News", "VIDEO" , "Concerts" ,"Album") DEFAULT "News",
        user_id INT UNSIGNED,
        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
      );
      `);

      console.log("Creating votes table...");

    await pool.query(`
      CREATE TABLE votes (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        entry_id INT UNSIGNED,
        user_id INT UNSIGNED,
        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
        FOREIGN KEY (entry_id) REFERENCES entries (id) ON DELETE CASCADE
      );
      `);

    console.log("¡All done!");
  } catch (error) {
    console.error(error);
  } finally {
    process.exit();
  }
};

initDB();
