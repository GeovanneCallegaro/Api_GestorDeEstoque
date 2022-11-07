import { IProduct } from "./Interfaces/IProduct";

export class Product implements IProduct {
  public name: string;
  public price: string;
  public sizesAvailable: string[];
  public quantityInStockTotal: number;
  public quantityInStockSeparetedBySize: {
    [key: string]: {
      [key: string]: number
    }
  }[];
  public brand: string;
  public availableColors: string[];
  public imageProductUrl: { string: string[] }[];
  public categorySex: string;
  public categoryProduct: string;

  constructor(product: IProduct) {
    this.name = product.name;
    this.price = product.price;
    this.sizesAvailable = product.sizesAvailable;
    this.quantityInStockSeparetedBySize = product.quantityInStockSeparetedBySize;
    this.quantityInStockTotal = 0;
    this.brand = product.brand;
    this.availableColors = product.availableColors;
    this.imageProductUrl = product.imageProductUrl;
    this.categorySex = product.categorySex;
    this.categoryProduct = product.categoryProduct;

    this.sumTotalQuantityInStock();
  }

  private sumTotalQuantityInStock(): void {
    try {
      const objectSizes = this.quantityInStockSeparetedBySize[0];
      const sizesFilter = this.sizesAvailable.map((size) => objectSizes[size]);
      const valuesToSumArray = sizesFilter.map((size) => Object.values(size));
      const values = valuesToSumArray.reduce((list, sub) => list.concat(sub), []);
      this.quantityInStockTotal = values.reduce((acc, curr) => acc + curr);
    } catch (e) {
      console.log(e);
    }
  }
}
