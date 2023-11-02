import Person from "./Person";
import PersonManager from "./PersonManager";
import Gender from "./Gender";

const personManager: PersonManager = new PersonManager();

const person1: Person = new Person(
  "Alice",
  25,
  Gender.FEMALE,
  { street: "123 Main St", city: "New York", postalCode: "10001" },
  "cm",
  160
);
const person2: Person = new Person(
  "Bob",
  30,
  Gender.MALE,
  { street: "456 Elm St", city: "Los Angeles", postalCode: "90001" },
  "ft",
  5.8
);

personManager.addPerson(person1);
personManager.addPerson(person2);

const retrievedPerson: Person | undefined =
  personManager.getPersonByName("Alice");
if (retrievedPerson) {
  console.log("Retrieved Person:", retrievedPerson);
} else {
  console.log("Person not found.");
}

personManager.updatePersonName(person1, "Anna");

const allPersons: Person[] = personManager.getAllPersons();
console.log("All Persons:", allPersons);

personManager.deletePerson(person2);

const allPersonsAfterDeletion: Person[] = personManager.getAllPersons();
console.log("All Persons After Deletion:", allPersonsAfterDeletion);
