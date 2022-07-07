const insertEntry = require("./insertEntry");
const selectEntryByCountry = require("./selectEntryByCountry");
const updateEntryById = require("./updateEntryById");
const selectEntry = require("./selectEntry");
const selectEntryById = require("./selectEntryById");
const removeEntry = require("./removeEntry")
const selectEntryByIdWVotes = require("./selecEntryByIdWVotes")

module.exports = {
  insertEntry,
  selectEntryByCountry,
  updateEntryById,
  selectEntry,
  selectEntryById,
  removeEntry,
  selectEntryByIdWVotes
};
