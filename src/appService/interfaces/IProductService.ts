import { Request, Response } from "express";

export interface IProductService {
  create(req: Request, res: Response): Promise<void>;
  getAll(req: Request, res: Response): Promise<void>;
  updateById(req: Request, res: Response): Promise<void>;
  deleteById(req: Request, res: Response): Promise<void>;
  findProductBySize(req: Request, res: Response): Promise<void>;
  findProductByColor(req: Request, res: Response): Promise<void>;
  findProductByBrand(req: Request, res: Response): Promise<void>;
  findProductsByCategorySex(req: Request, res: Response): Promise<void>;
  findProductsById(req: Request, res: Response): Promise<void>;
  findProductsByCategoryProduct(req: Request, res: Response): Promise<void>;
}
