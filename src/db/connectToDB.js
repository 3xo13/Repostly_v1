import mongoose from 'mongoose';

let isConnected = false; // track the connection

export async function connectToDB() {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    return true;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "Repostly",
      useNewUrlParser: true,
      // useUnifiedTopology: true,
    })

    isConnected = true;

    console.log('MongoDB connected')
  } catch (error) {
    console.log(error);
    return error;
  }
}