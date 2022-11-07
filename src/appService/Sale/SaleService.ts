import { SaleRepository } from "../../infra/Repositories/SaleRepository";
import { Request, Response } from "express";
import { ISaleService } from "../interfaces/ISaleService";

export class SaleService implements ISaleService {
  constructor(protected _sale: SaleRepository) { }

  async create(req: Request, res: Response): Promise<void | Response> {
    try {
      const result = await this._sale.save(req.body);
      res.status(201).send(result);
    } catch (e) {
      res.status(500).send({ message: 'Internal server error' });
    }
  }
}
