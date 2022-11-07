import { Server } from "@overnightjs/core";
import * as bodyParser from 'body-parser';
import cors from 'cors';
import { ProductController } from './appService/Product/ProductController';
import { SalesController } from "./appService/Sale/SaleController";
import { UsersController } from './appService/User/UserController';
import * as database from './infra/dbContext';
import { ProductRepository } from './infra/Repositories/ProductRepository';
import { SaleRepository } from "./infra/Repositories/SaleRepository";
import { UserRepository } from './infra/Repositories/UserRepository';

export class SetupServer extends Server {
  constructor(private port = 3000, protected _productRepository: ProductRepository, protected _userRepository: UserRepository, protected _saleRepository: SaleRepository) {
    super();
  }

  public async init(): Promise<void> {
    this.setupExpress();
    await database.connect();
    this.setupControllers();
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
    this.app.use(cors({ origin: '*' }));
  }

  private setupControllers(): void {
    const productController = new ProductController(this._productRepository);
    const userController = new UsersController(this._userRepository);
    const saleController = new SalesController(this._saleRepository);
    this.addControllers([
      productController,
      userController,
      saleController
    ])
  }

  public start(): void {
    this.app.listen(this.port, () => console.log(`Aplicação está rodando na porta: ${this.port}`));
  }
}
