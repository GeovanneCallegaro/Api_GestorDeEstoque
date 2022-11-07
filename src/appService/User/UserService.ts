import { UserRepository } from "../../infra/Repositories/UserRepository";
import AuthService from "../../utils/authUser";
import EncodedPassword from "../../utils/encryptPassword";
import { Request, Response } from "express";
import { IUserService } from "../interfaces/IUserService";

export class UserService implements IUserService {
  constructor(protected _user: UserRepository) { }

  protected async hashPassword(password: string): Promise<string> {
    const encodedPassword = await EncodedPassword.hashPassword(password);
    return encodedPassword;
  }

  protected async comparePassword(password: string, userPassword: string): Promise<boolean> {
    const decryptPassword = await EncodedPassword.comparePasswords(password, userPassword);
    return decryptPassword;
  }

  async create(req: Request, res: Response): Promise<Response | void> {
    try {
      const hashedPassword = await this.hashPassword(req.body?.password);
      if ((await this._user.findOne(req.body.email))) {
        return res.status(401).send({ message: 'Email exists in database!' })
      }
      const bodyUser = { ...req.body, password: hashedPassword };
      const result = await this._user.save(bodyUser);
      res.status(201).send({ ...req.body, id: result._id });
    } catch (e) {
      res.status(500).send({ message: 'Internal server error' });
    }
  }

  public async authenticate(req: Request, res: Response): Promise<Response | void> {
    const { email, password } = req.body;
    const user = await this._user.findOne(email);

    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    if (!(await this.comparePassword(password, user?.password))) {
      return res.status(401).send({ message: 'Password does match' });
    }
    const token = AuthService.generateToken(req.body);
    res.status(200).send({ token: token });
  }

  public async me(req: Request, res: Response): Promise<Response | void> {
    const email = req.decoded ? req.decoded.email : '';
    const user = await this._user.findOne(email);

    if (!user) {
      return res.status(400).send({ message: 'User not found' });
    }

    return res.status(200).send({ user });
  }
}
