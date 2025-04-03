import mongoose from 'mongoose';

const connectDB = async () => {
  try {    
    await mongoose.connect(process.env.DB_URL);
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message,"error");
    process.exit(1);
  }
};

export default connectDB;
