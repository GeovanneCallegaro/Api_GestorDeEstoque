import mongoose from "mongoose";

export const connect = async (): Promise<void> => {
  const connectionString: string = process.env.CONNECTION_STRING_MONGOOSE !== undefined ? process.env.CONNECTION_STRING_MONGOOSE : '';
  await mongoose.connect(connectionString, { dbName: 'development' });
}

export const close = async (): Promise<void> => mongoose.connection.close();
