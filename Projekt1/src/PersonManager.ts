import Person from "./Person";

export default class PersonManager {
  private persons: Person[] = [];

  public constructor() {
    this.persons = [];
  }

  public getAllPersons(): Person[] {
    return this.persons;
  }
  
  public addPerson(person: Person): void {
    const existingPerson: Person | undefined = this.getPersonByName(person.getName());
    if (!existingPerson) {
      this.persons.push(person);
    } else {
      console.log(`Person with name '${person.getName()}' already exists.`);
    }
  }

  public getPersonByName(name: string): Person | undefined {
    const filteredPersons: Person[] = this.persons.filter(
      (person: Person) => person.getName() === name
    );
    return filteredPersons.length > 0 ? filteredPersons[0] : undefined;
  }

  public updatePersonName(person: Person, newName: string): void {
    const existingPerson: Person | undefined = this.getPersonByName(newName);
    if (!existingPerson) {
      this.persons = this.persons.map((p: Person) => {
        if (p.getName() === person.getName()) {
          p.setName(newName);
        }
        return p;
      });
    } else {
      console.log(`Person with name '${newName}' already exists. Cannot update.`);
    }
  }

  public deletePerson(person: Person): void {
    this.persons = this.persons.filter(
      (p: Person) => p.getName() !== person.getName()
    );
  }
}
