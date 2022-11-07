import { UserModel } from '../infra/Models/User';
import jwt from 'jsonwebtoken';

export interface DecodedUser extends Omit<UserModel, '_id'> {
  id: string;
}

export default class AuthService {

  public static generateToken(payload: object) {
    const tokenJwt = process.env.JWT_TOKEN_SECRET ? process.env.JWT_TOKEN_SECRET : '';
    return jwt.sign(payload, tokenJwt, {
      expiresIn: 10000,
    });
  }

  public static decodeToken(token: string): DecodedUser {
    const tokenJwt = process.env.JWT_TOKEN_SECRET ? process.env.JWT_TOKEN_SECRET : '';
    return jwt.verify(token, tokenJwt) as DecodedUser;
  }
}
