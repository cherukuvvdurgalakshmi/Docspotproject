const mongoose = require("mongoose"); // MUST ADD THIS

const connectDB = async () => {
  try {
    const uri = process.env.DB_URI;
    
    // Check if URI exists before trying to connect
    if (!uri) {
      console.error("ERROR: DB_URI is missing in .env file");
      process.exit(1);
    }

    await mongoose.connect(uri);
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB; // MUST ADD THIS SO SERVER.JS CAN SEE IT
