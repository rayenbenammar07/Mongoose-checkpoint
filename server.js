const mongoose = require("mongoose");
require("dotenv").config();
const Person = require("./models/Person");
let uri = process.env.URI;
mongoose
  .connect(uri)
  .then(() => console.log("connected to database"))
    .catch((err) => console.log(err));
// Create and Save a Record of a Model
// Person.create({
//     name: "Alice",
//     age: 25,
//     favoriteFoods: ["pizza", "pasta"]
// });

const createManyPeople = (arrayOfPeople) => {
  Person.create(arrayOfPeople)
    .then((data) => console.log("People created:", data))
    .catch((err) => console.error("Error creating people:", err));
};
createManyPeople([
    {
        name: "John",
        age: 30,
        favoriteFoods: ["burgers", "fries"]
    },
    {
        name: "Jane",
        age: 28,
        favoriteFoods: ["sushi", "ramen"]
    },
    {
        name: "Mike",
        age: 35,
        favoriteFoods: ["tacos", "burritos"]
    },
]);
// Find All People by Name
// const findPeopleByName = async (name) => {
//   try {
//     const data = await Person.find({ name });
//     console.log("People found:", data);
//   } catch (err) {
//     console.error(err);
//   }
// };

// Example usage
// findPeopleByName("Alice");
// const findPersonByFavoriteFood = async (food) => {
//   try {
//     const person = await Person.findOne({ favoriteFoods: food });
//     console.log("Person found with favorite food:", person);
//   } catch (err) {
//     console.error(err);
//   }
// };

// Example usage
// findPersonByFavoriteFood("pizza");
// const findPersonById = (personId) => {
//   Person.findById(personId, (err, person) => {
//     if (err) return console.error(err);
//     console.log("Person found by ID:", person);
//   });
// };

// // Example usage with a sample ID (replace with actual ID)
// findPersonById("60672453362381e016d5ce6667");
// const updateFavoriteFoods = async (personId) => {
//   try {
//     const person = await Person.findById(personId);
//     person.favoriteFoods.push("hamburger"); // Add to favorite foods
//     await person.save();
//     console.log("Updated person:", person);
//   } catch (err) {
//     console.error("Error updating person:", err);
//   }
// };

// // Example usage
// updateFavoriteFoods("6724552d81668b083f6c3911");
// const updatePersonAgeByName = async (personName) => {
//   try {
//     const updatedPerson = await Person.findOneAndUpdate(
//       { name: personName },
//       { age: 20 },
//       { new: true } // Return the updated document
//     );
//     console.log("Updated person:", updatedPerson);
//   } catch (err) {
//     console.error("Error updating person:", err);
//   }
// };

// // Example usage
// updatePersonAgeByName("John");
// const deletePersonById = async (personId) => {
//   try {
//     const removedPerson = await Person.findByIdAndRemove(personId);
//     console.log("Removed person:", removedPerson);
//   } catch (err) {
//     console.error("Error removing person:", err);
//   }
// };

// // Example usage
// deletePersonById("672453362381e016d5ce6668");
const deletePeopleByName = async (name) => {
  try {
    const result = await Person.remove({ name });
    console.log("Deleted people:", result);
  } catch (err) {
    console.error("Error deleting people:", err);
  }
};

// Example usage
// deletePeopleByName("Jane");
// const findAndLimitBurritoLovers = async () => {
//   try {
//     const results = await Person.find({ favoriteFoods: "burrito" })
//       .sort({ name: 1 })
//       .limit(2)
//       .select({ age}) 
//       .exec();
//     console.log("Burrito lovers:", results);
//   } catch (err) {
//     console.error("Error finding burrito lovers:", err);
//   }
// };

// // Example usage
// findAndLimitBurritoLovers();
