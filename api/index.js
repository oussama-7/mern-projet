import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import booksRoute from "./routes/books.js";
import chaptersRoute from "./routes/chapters.js";
import cookieParser from 'cookie-parser';
import cors from 'cors';
import bodyParser from 'body-parser';
import data from './data.js';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';

const app = express();

dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('Connected to mongoDB.');
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('MongoBD disconnected!');
});
//middlewares

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use("/api/books", booksRoute);
app.use("/api/chapters", chaptersRoute);
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'Something went wrong!';
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// app.listen(8800, () => {
//   connect();
//   console.log('Connected to backend.');
// });

const port = process.env.PORT || 8800;
app.listen(port, () => {
  connect();
  console.log(`serve at http://localhost:${port}`);
});

app.listen(7000, () => {
  connect()
  console.log("connected to back end.");
});