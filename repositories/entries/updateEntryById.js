const getPool = require("../../database/getPool");

const updateEntryById = async ({
  title,
  description,
  imageFileName,
  category,
  country,
  video_url,
  id,
}) => {
  const pool = getPool();

  const [{ affectedRows }] = await pool.query(
    "UPDATE entries SET title = ?, description = ?, photo = ?, category = ?, country = ?, video_url = ? WHERE id = ?",
    [title, description, imageFileName, category, country, video_url, id]
  );

  return affectedRows;
};

module.exports = updateEntryById;
