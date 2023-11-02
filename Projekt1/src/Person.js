"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, age, gender, address, heightUnit, heightValue) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.heightUnit = heightUnit;
        this.heightValue = heightValue;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person.prototype.getGender = function () {
        return this.gender;
    };
    Person.prototype.getAddress = function () {
        return this.address;
    };
    Person.prototype.setAddress = function (address) {
        this.address = address;
    };
    Person.prototype.getHeightUnit = function () {
        return this.heightUnit;
    };
    Person.prototype.setHeightUnit = function (heightUnit) {
        this.heightUnit = heightUnit;
    };
    Person.prototype.getHeightValue = function () {
        return this.heightValue;
    };
    Person.prototype.setHeightValue = function (heightValue) {
        this.heightValue = heightValue;
    };
    return Person;
}());
exports.default = Person;
