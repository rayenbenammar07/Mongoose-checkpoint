const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Define the schema
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  favoriteFoods: { type: [String], required: true },
});
module.export = Person = mongoose.model("Person", personSchema);
module.exports = Person;


