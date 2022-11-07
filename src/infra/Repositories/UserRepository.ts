import { User } from "../../domain/User";
import { IUserDTO } from "../Interfaces/IUserDTO";
import { UserDb } from "../Models/User";

export class UserRepository {
  public async save(userSave: IUserDTO) {
    const user = new User(userSave);
    const result = await new UserDb(user).save();
    return result;
  }

  public async findOne(email: string) {
    const user = UserDb.findOne({ email });
    return user;
  }
}
