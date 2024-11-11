const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.a1uva.mongodb.net/?retryWrites=true&w=majority`;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Connected to MongoDB successfully...🚀🚀");
    } catch (error) {
        console.error("Failed to connect to MongoDB...", error);
    }
};

module.exports = connectDB;
