import Gender from "./Gender";

type THeight = "cm" | "ft";

interface Address {
  street: string;
  city: string;
  postalCode: string;
}

export default class Person {
  private name: string;
  private age: number;
  private readonly gender: Gender;
  private address: Address;
  private heightUnit: THeight;
  private heightValue: number;

  public constructor(
    name: string,
    age: number,
    gender: Gender,
    address: Address,
    heightUnit: THeight,
    heightValue: number
  ) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.address = address;
    this.heightUnit = heightUnit;
    this.heightValue = heightValue;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getAge(): number {
    return this.age;
  }

  public setAge(age: number): void {
    this.age = age;
  }

  public getGender(): Gender {
    return this.gender;
  }

  public getAddress(): Address {
    return this.address;
  }

  public setAddress(address: Address): void {
    this.address = address;
  }

  public getHeightUnit(): THeight {
    return this.heightUnit;
  }

  public setHeightUnit(heightUnit: THeight): void {
    this.heightUnit = heightUnit;
  }

  public getHeightValue(): number {
    return this.heightValue;
  }

  public setHeightValue(heightValue: number): void {
    this.heightValue = heightValue;
  }
}
