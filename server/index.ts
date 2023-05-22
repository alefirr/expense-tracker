import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import categoryRoutes from './src/routes/category';
import placeRoutes from './src/routes/place';
import userRoutes from './src/routes/user';
import recordRoutes from './src/routes/record';

// import cors from 'cors';
// import fileUpload from 'express-fileupload';

const app: Express = express();
dotenv.config();

// Constants
const PORT = process.env.PORT || 3001;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
// DB Connection

// app.use(cors());
// app.use(fileUpload());
app.use(express.json());
app.use(express.static('uploads'));

// Routes
app.use('/api/category', categoryRoutes);
app.use('/api/place', placeRoutes);
app.use('/api/user', userRoutes);
app.use('/api/record', recordRoutes);

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.xncg2h5.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
    );
    app.listen(PORT, () =>
      console.log(`Connected to database, starting server on port ${PORT}`)
    );
  } catch (e) {
    console.log((e as Error).message);
    console.log(
      `Failed to connect to database, starting server on port ${PORT}`
    );
  }
};

connectToDatabase();
