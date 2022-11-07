import { IUser } from "./Interfaces/IUser";

export class User implements IUser {
  public name: string;
  public email = '';
  public password: string;

  constructor(user: IUser) {
    this.name = user.name;
    this.validateEmail(user.email);
    this.password = user.password;
  }

  protected validateEmail(email: string) {
    const emailRegex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    if (emailRegex.test(email)) {
      this.email = email;
      return;
    }
    throw new Error('Email is not valid');
  }
}
