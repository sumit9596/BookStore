import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from '../route/book.route.js';
import userRoute from '../route/user.route.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const url = process.env.MONGO_URL;

if (!url) {
    console.warn('Warning: MONGO_URL is not set. Database connection will fail.');
} else {
    mongoose
        .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connected to MongoDB'))
        .catch((error) => console.error('MongoDB connection error:', error));
}

// Routes
app.get('/', (req, res) => {
    res.send('BookStore API is running!');
});

app.use('/books', bookRoute);
app.use('/users', userRoute);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

export default app;
