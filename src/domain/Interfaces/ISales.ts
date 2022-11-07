export interface ISales {
  id: number;
  products: string[];
  client: IClient;
  status: statusSales;
  purchaseTime: Date;
  totalValue: number;
  address: IAddress;
}


export enum statusSales {
  PROCESSING = 'Em processamento',
  APPROVED_PURCHASE = 'Compra aprovada',
  CANCELLED_PURCHASE = 'Compra cancelada',
  FINISHED = 'Venda finalizada'
}

export type IAddress = {
  street: string,
  district: string,
  houseNumber: string;
  complement?: string;
  zipCode: string;
  referencePoint?: string;
}

export type IClient = {
  name: string;
  cpf: string;
  email: string;
}
