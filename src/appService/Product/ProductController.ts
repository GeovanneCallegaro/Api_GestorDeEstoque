import { Controller, Delete, Get, Post, Put } from '@overnightjs/core';
import { Request, Response } from 'express';
import { ProductRepository } from '../../infra/Repositories/ProductRepository';
import '../../utils/module-alias';
import { ProductService } from './ProductService';

@Controller('products')
export class ProductController extends ProductService {
  constructor(protected _product: ProductRepository) {
    super(_product);
  }

  @Post('')
  public async createProduct(req: Request, res: Response): Promise<void> {
    await this.create(req, res);
  }

  @Get('')
  public async getAllProducts(req: Request, res: Response): Promise<void> {
    await this.getAll(req, res);
  }

  @Get('product/:id')
  public async getProductById(req: Request, res: Response): Promise<void> {
    await this.findProductsById(req, res);
  }

  @Get('filterbysize')
  public async filterProductBySize(req: Request, res: Response): Promise<void> {
    await this.findProductBySize(req, res);
  }

  @Get('filterbycolor')
  public async filterProductByColor(req: Request, res: Response): Promise<void> {
    await this.findProductByColor(req, res);
  }

  @Get('filterbybrand')
  public async filterProductByBrand(req: Request, res: Response): Promise<void> {
    await this.findProductByBrand(req, res);
  }

  @Get('filterbycategory')
  public async filterProductsByCategorySex(req: Request, res: Response): Promise<void> {
    await this.findProductsByCategorySex(req, res);
  }

  @Get('filterbycategory')
  public async filterProductsByCategoryProduct(req: Request, res: Response): Promise<void> {
    await this.findProductsByCategoryProduct(req, res);
  }

  @Put('')
  public async updateProductById(req: Request, res: Response): Promise<void> {
    await this.updateById(req, res);
  }

  @Delete('')
  public async deleteProductById(req: Request, res: Response): Promise<void> {
    await this.deleteById(req, res)
  }
}
