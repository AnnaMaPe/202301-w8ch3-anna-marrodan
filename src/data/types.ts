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
  listOfProducts: OrderedMac[];
  customer: string;
  state: boolean;
}

export type Orders = Order[];

export type OrderedMac = Pick<
  MacStructure,
  "id" | "productName" | "price" | "image"
>;
