import dotenv from 'dotenv';

dotenv.config(); // Load enviroment variables from .env file

export const PORT = process.env.PORT || 3000; // Define a port variable