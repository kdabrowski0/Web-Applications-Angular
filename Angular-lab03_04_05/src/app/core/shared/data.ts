import { Product } from "./models/product.model";

const initialShoppingList: Product[] = [
  new Product(1, 'Mleko',  false, 2, 'not-bought'),
  new Product(2, 'Chleb', false, 1, 'not-bought'),
  new Product(3, 'Jajka',  false, 3, 'not-bought'),
];

const fetchDataWithDelay = (data: Product[], delay: number): Promise<any> => {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};

export const getInitialShoppingList = (): Promise<Product[]> => {
  return fetchDataWithDelay(initialShoppingList, 2000);
};


