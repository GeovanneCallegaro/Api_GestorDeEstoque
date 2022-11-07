import { IUser } from "../../domain/Interfaces/IUser";
import mongoose, { Document, Model } from "mongoose";

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    toJSON: {
      transform: (_, ret): void => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  },
);

export interface UserModel extends IUser, Document { }

export const UserDb: Model<UserModel> = mongoose.model<UserModel>(
  'User',
  schema,
);
