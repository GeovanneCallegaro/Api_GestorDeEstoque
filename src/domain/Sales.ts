import { IAddress, IClient, ISales, statusSales } from "./Interfaces/ISales";

export class Sales implements ISales {
  id: number;
  products: string[];
  client: IClient;
  status: statusSales;
  purchaseTime: Date;
  totalValue: number;
  address: IAddress;

  constructor(sale: ISales) {
    this.id = sale.id;
    this.products = sale.products;
    this.client = sale.client;
    this.status = sale.status;
    this.purchaseTime = sale.purchaseTime;
    this.totalValue = sale.totalValue;
    this.address = sale.address;
  }
}
