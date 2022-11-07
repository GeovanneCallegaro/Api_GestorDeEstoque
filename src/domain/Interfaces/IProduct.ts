export interface IProduct {
  name: string;
  price: string;
  sizesAvailable: string[];
  quantityInStockTotal: number;
  quantityInStockSeparetedBySize: {
    [key: string]: {
      [key: string]: number
    }
  }[];
  categorySex: string;
  categoryProduct: string;
  brand: string;
  availableColors: string[];
  imageProductUrl: {
    string: string[]
  }[];
}
