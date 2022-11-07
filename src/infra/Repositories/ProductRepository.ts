import { Types } from 'mongoose';
import { Product } from '../../domain/Product';
import '../../utils/module-alias';
import { IProductDTO } from '../Interfaces/IProductDTO';
import { ProductDb, ProductModel } from '../Models/Product';

export class ProductRepository {

  private readonly limit = 10;
  private skip = 0;

  public async save(productSave: IProductDTO): Promise<ProductModel & { _id: Types.ObjectId; }> {
    const product = new Product(productSave);
    const result = await new ProductDb(product).save();
    return result;
  }

  public async getAll(page: number) {
    const skip = this.limit * (page - 1);
    const products = await ProductDb.find().skip(skip).limit(this.limit).exec();
    return products;
  }

  public async updateById(productUpdate: IProductDTO, id: string) {
    return ProductDb.findByIdAndUpdate(id, productUpdate);
  }

  public async deletebyId(id: string) {
    return ProductDb.findByIdAndDelete(id);
  }

  public async getFilterBySize(page: number, query: string) {
    const skip = this.limit * (page - 1);
    return ProductDb.find({ sizesAvailable: query }).skip(skip).limit(this.limit).exec();
  }

  public async getFilterByColor(page: number, query: string) {
    const skip = this.limit * (page - 1);
    return ProductDb.find({ availableColors: query }).skip(skip).limit(this.limit).exec();
  }

  public async getFilterByBrand(page: number, query: string) {
    const skip = this.limit * (page - 1);
    return ProductDb.find({ brand: query }).skip(skip).limit(this.limit).exec();
  }

  public async getFilterByCategory(page: number, query: string) {
    const skip = this.limit * (page - 1);
    return ProductDb.find({ categorySex: query }).skip(skip).limit(this.limit).exec();
  }

  public async getProductById(id: string) {
    return ProductDb.findById(id);
  }

  public async getProductByCategoryProduct(page: number, query: string) {
    const skip = this.limit * (page - 1);
    return ProductDb.find({ categoryProduct: query }).skip(skip).limit(this.limit).exec();
  }
}
