import { Request, Response } from "express";

export interface IUserService {
  create(req: Request, res: Response): Promise<Response | void>;
  authenticate(req: Request, res: Response): Promise<Response | void>;
  me(req: Request, res: Response): Promise<Response | void>;
}
