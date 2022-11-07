import mongoose, { Document, Model, Schema } from "mongoose";

const schema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    products: { type: Schema.Types.Array, required: true },
    client: { type: Object, required: true },
    status: { type: String, required: true },
    purchaseTime: { type: Date, required: true },
    totalValue: { type: Number, required: true },
    address: { type: Object, required: true }
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

type SalesModel = Document

export const SalesDb: Model<SalesModel> = mongoose.model<SalesModel>(
  'Sales',
  schema,
);
