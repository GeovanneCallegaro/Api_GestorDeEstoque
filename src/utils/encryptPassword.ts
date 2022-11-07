import bcrypt from 'bcrypt';

export default class EncodedPassword {
  public static async hashPassword(
    password: string,
    salt = 10,
  ): Promise<string> {
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }

  public static async comparePasswords(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }
}
