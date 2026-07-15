import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB conectado');
  } catch (error) {
    console.error('❌ Error de conexión:', error.message);
    process.exit(1); // si no hay BD, no tiene sentido levantar el servidor
  }
};

export default connectDB;