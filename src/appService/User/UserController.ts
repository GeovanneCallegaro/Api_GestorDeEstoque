import { Controller, Get, Middleware, Post } from '@overnightjs/core';
import { UserRepository } from '../../infra/Repositories/UserRepository';
import { authMiddleware } from '../../middleware/authMiddleware';
import { Request, Response } from 'express';
import { UserService } from './UserService';

@Controller('users')
export class UsersController extends UserService {
  constructor(protected _user: UserRepository) {
    super(_user);
  }

  @Post('')
  public async createUser(req: Request, res: Response): Promise<void> {
    await this.create(req, res);
  }

  @Post('authenticate')
  public async authenticateUser(req: Request, res: Response): Promise<void> {
    await this.authenticate(req, res);
  }

  @Get('me')
  @Middleware(authMiddleware)
  public async getUser(req: Request, res: Response): Promise<void> {
    await this.me(req, res);
  }
}
