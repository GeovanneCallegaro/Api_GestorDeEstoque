import { Controller, Post } from '@overnightjs/core';
import { Request, Response } from 'express';
import { SaleRepository } from '../../infra/Repositories/SaleRepository';
import { SaleService } from './SaleService';

@Controller('sales')
export class SalesController extends SaleService {
  constructor(protected _sale: SaleRepository) {
    super(_sale);
  }

  @Post('')
  public async createSale(req: Request, res: Response): Promise<void> {
    await this.create(req, res);
  }
}
