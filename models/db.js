const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Connected to MongoDB successfully...🚀🚀");
    } catch (error) {
        console.error("Failed to connect to MongoDB...", error);
    }
};

module.exports = connectDB;
