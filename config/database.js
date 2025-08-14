const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://shubhporwal:07HLTAGoS32d1iFo@cluster0.vmkrjop.mongodb.net/test");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};


module.exports = connectDB;
