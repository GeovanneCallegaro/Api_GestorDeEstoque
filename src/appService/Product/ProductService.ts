import { Request, Response } from "express";
import { ProductRepository } from "../../infra/Repositories/ProductRepository";
import { IProductService } from "../interfaces/IProductService";

export class ProductService implements IProductService {
  constructor(protected _product: ProductRepository) { }

  public async create(req: Request, res: Response): Promise<void> {
    try {
      const result = await this._product.save(req.body);
      res.status(201).send({ result });
    } catch (e) {
      res.status(500).send({ message: 'Internal server error' });
    }
  }

  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const result = await this._product.getAll(Number(req.query?.page));
      res.status(200).send({ result });
    } catch (e) {
      res.status(500).send({ message: 'Internal server error' });
    }
  }

  public async updateById(req: Request, res: Response): Promise<void> {
    try {
      const result = await this._product.updateById(req.body, String(req.query?.id));
      res.status(200).send({ result });
    } catch (e) {
      res.status(500).send({ message: 'Internal server error' });
    }
  }

  public async deleteById(req: Request, res: Response): Promise<void> {
    try {
      await this._product.deletebyId(String(req.query?.id));
      res.status(200).send({ message: 'Delete Sucessfull' });
    } catch (e) {
      res.status(500).send({ message: 'Internal server error' });
    }
  }

  public async findProductBySize(req: Request, res: Response): Promise<void> {
    try {
      const result = await this._product.getFilterBySize(Number(req.query.page), String(req.query.size));
      res.status(200).send({ result });
    } catch (e) {
      res.status(500).send({ message: 'Internal server error' });
    }
  }

  public async findProductByColor(req: Request, res: Response): Promise<void> {
    try {
      const result = await this._product.getFilterByColor(Number(req.query.page), String(req.query.color));
      res.status(200).send({ result });
    } catch (e) {
      res.status(500).send({ message: 'Internal server error' });
    }
  }

  public async findProductByBrand(req: Request, res: Response): Promise<void> {
    try {
      const result = await this._product.getFilterByBrand(Number(req.query.page), String(req.query.brand));
      res.status(200).send({ result });
    } catch (e) {
      res.status(500).send({ message: 'Internal server error' });
    }
  }

  public async findProductsByCategorySex(req: Request, res: Response): Promise<void> {
    try {
      const result = await this._product.getFilterByCategory(Number(req.query.page), String(req.query.category));
      res.status(200).send({ result });
    } catch (e) {
      res.status(500).send({ message: 'Internal server error' });
    }
  }

  public async findProductsById(req: Request, res: Response): Promise<void> {
    try {
      const result = await this._product.getProductById(String(req.params.id));
      res.status(200).send({ result });
    } catch (e) {
      res.status(500).send({ message: 'Internal server error' });
    }
  }

  public async findProductsByCategoryProduct(req: Request, res: Response): Promise<void> {
    try {
      const result = await this._product.getProductByCategoryProduct(Number(req.query.page), String(req.query.categoryproduct));
      res.status(200).send({ result });
    } catch (e) {
      res.status(500).send({ message: 'Internal server error' });
    }
  }
}
