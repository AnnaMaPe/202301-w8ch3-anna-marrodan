export interface MacStructure {
  id: string;
  productName: string;
  price: number;
  image: string;
  isAvailable: boolean;
}

export type MacsStructure = MacStructure[];

export interface Order {
  id: string;
  listOfProducts: string[];
  customer: string;
  state: boolean;
}

export type Orders = Order[];
