import * as dotenv from 'dotenv';
import { ProductRepository } from './infra/Repositories/ProductRepository';
import { SaleRepository } from './infra/Repositories/SaleRepository';
import { UserRepository } from './infra/Repositories/UserRepository';
import { SetupServer } from "./server";

(async (): Promise<void> => {
  try {
    const productRepository = new ProductRepository();
    const userRepository = new UserRepository();
    const saleRepository = new SaleRepository();
    const server = new SetupServer(3000, productRepository, userRepository, saleRepository);
    dotenv.config();
    await server.init();
    server.start();
  } catch (e) {
    console.log(e);
  }
})();
