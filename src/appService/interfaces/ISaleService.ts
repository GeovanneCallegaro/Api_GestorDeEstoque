import { Request, Response } from "express";

export interface ISaleService {
  create(req: Request, res: Response): Promise<Response | void>;
}
