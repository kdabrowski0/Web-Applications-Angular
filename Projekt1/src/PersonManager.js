"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PersonManager = /** @class */ (function () {
    function PersonManager() {
        this.persons = [];
        this.persons = [];
    }
    PersonManager.prototype.getAllPersons = function () {
        return this.persons;
    };
    PersonManager.prototype.addPerson = function (person) {
        var existingPerson = this.getPersonByName(person.getName());
        if (!existingPerson) {
            this.persons.push(person);
        }
        else {
            console.log("Person with name '".concat(person.getName(), "' already exists."));
        }
    };
    PersonManager.prototype.getPersonByName = function (name) {
        var filteredPersons = this.persons.filter(function (person) { return person.getName() === name; });
        return filteredPersons.length > 0 ? filteredPersons[0] : undefined;
    };
    PersonManager.prototype.updatePersonName = function (person, newName) {
        var existingPerson = this.getPersonByName(newName);
        if (!existingPerson) {
            this.persons = this.persons.map(function (p) {
                if (p.getName() === person.getName()) {
                    p.setName(newName);
                }
                return p;
            });
        }
        else {
            console.log("Person with name '".concat(newName, "' already exists. Cannot update."));
        }
    };
    PersonManager.prototype.deletePerson = function (person) {
        this.persons = this.persons.filter(function (p) { return p.getName() !== person.getName(); });
    };
    return PersonManager;
}());
exports.default = PersonManager;
