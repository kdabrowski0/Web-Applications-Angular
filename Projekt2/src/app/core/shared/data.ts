import { v4 as uuidv4 } from 'uuid';
import Car from './car.type';

export const initialCars: Car[] = [
  { id: uuidv4(), companyName: 'Toyota', model: 'Camry', year: 2022, rented: false },
  { id: uuidv4(), companyName: 'Ford', model: 'Mustang', year: 2021, rented: false },
  { id: uuidv4(), companyName: 'Honda', model: 'Civic', year: 2023, rented: false },
];
