"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var PersonManager_1 = require("./PersonManager");
var Gender_1 = require("./Gender");
var personManager = new PersonManager_1.default();
var person1 = new Person_1.default("Alice", 25, Gender_1.default.FEMALE, { street: "123 Main St", city: "New York", postalCode: "10001" }, "cm", 160);
var person2 = new Person_1.default("Bob", 30, Gender_1.default.MALE, { street: "456 Elm St", city: "Los Angeles", postalCode: "90001" }, "ft", 5.8);
personManager.addPerson(person1);
personManager.addPerson(person2);
var retrievedPerson = personManager.getPersonByName("Alice");
if (retrievedPerson) {
    console.log("Retrieved Person:", retrievedPerson);
}
else {
    console.log("Person not found.");
}
personManager.updatePersonName(person1, "Anna");
var allPersons = personManager.getAllPersons();
console.log("All Persons:", allPersons);
personManager.deletePerson(person2);
var allPersonsAfterDeletion = personManager.getAllPersons();
console.log("All Persons After Deletion:", allPersonsAfterDeletion);
