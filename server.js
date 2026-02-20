const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // This loads the .env variables

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected!"))
  .catch(err => console.log("Connection Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
