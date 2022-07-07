const getPool = require("../../database/getPool");

const insertEntry = async ({ title, description, imageFileName, video_url, country, category, userId }) => {
  const pool = getPool();

  const [{ insertId }] = await pool.query(
    "INSERT INTO entries (title, description, photo, video_url, country, category, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [title, description, imageFileName, video_url, country, category, userId]
  );

  return insertId;
};

module.exports = insertEntry;
