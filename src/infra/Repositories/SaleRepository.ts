import { Sales } from "../../domain/Sales";
import { ISaleDTO } from "../Interfaces/ISaleDTO";
import { SalesDb } from "../Models/Sales";

export class SaleRepository {
  public async save(saleSave: ISaleDTO) {
    const sale = new Sales(saleSave);
    const result = await new SalesDb(sale).save();
    return result;
  }
}
