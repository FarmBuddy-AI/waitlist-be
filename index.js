const express = require('express');
const connectDB = require('./models/db');
const userRoutes = require('./routes/waitlistRoute');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to the database
connectDB();

// Home route to display a welcome message
app.get('/', (req, res) => {
    res.send('Welcome to the Waitlist API!');
});

// User routes
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}...🚀🚀🚀`);
});
