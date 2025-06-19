import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(
    {
        origin: process.env.CLIENT_URL, // Allow all origins for simplicity; adjust as needed for security
        methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
        allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
    }
));


export default app;

