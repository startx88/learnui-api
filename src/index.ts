import path from 'path';
import express from 'express';
import cors from 'cors';
import {dbConnection} from './db';
import {errorHandler} from './middleware';

// app
const app = express();
const PORT = process.env.APP_PORT;

// settings
app.set('title', 'shopkart-api');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(express.static(path.resolve(__dirname, '..', 'public')));

// cors
app.disable('etag');

// middleware
app.use(cors());

// error handler
// catch all routes as well
app.use(errorHandler);

// listen
app.listen(PORT, async () => {
  console.log('Server is running...', PORT);
  await dbConnection();
});
