export interface Product {
    id: string;
    name: string;
    isBought: boolean;
    amount: number;
    status: string;
    purchaseDate?: Date; 
  }