export interface UserData {
  firstName: string;
  lastName: string;
  status: string;
  age: number;
}

export const user: UserData = {
  firstName: 'Krzysztof',
  lastName: 'Dąbrowski',
  status: 'ACTIVE',
  age: 22,
};
