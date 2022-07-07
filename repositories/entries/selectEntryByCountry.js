const getPool = require("../../database/getPool");

const selectEntryByCountry = async (countryID) => {
  const pool = getPool();
  // Ahora recogemos la respuesta de la base de datos en la constante entries.

  const [entries] = await pool.query(
    "SELECT * FROM entries WHERE neighborhood = ?",
    [countryID]
  );

  return entries; // Nos retorna un array de objetos. Si no lo ponemos al controller le llegará undefined.
};

module.exports = selectEntryByCountry;
