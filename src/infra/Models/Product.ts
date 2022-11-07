import mongoose, { Document, Model, Schema } from "mongoose";

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    sizesAvailable: { type: Schema.Types.Array, required: true },
    quantityInStockTotal: { type: Number, required: true },
    quantityInStockSeparetedBySize: { type: Schema.Types.Array, required: true },
    brand: { type: String, required: true },
    availableColors: { type: Schema.Types.Array, required: true },
    imageProductUrl: { type: Schema.Types.Array, required: true },
    categorySex: { type: String, required: true },
    categoryProduct: { type: String, required: true }
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

export type ProductModel = Document
export const ProductDb: Model<ProductModel> = mongoose.model<ProductModel>(
  'Product',
  schema,
);
