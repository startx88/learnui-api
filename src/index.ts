import express from 'express';
import {dbConnection} from './db';
// app
const app = express();
const PORT = process.env.APP_PORT;

// listen
app.listen(PORT, async () => {
  console.log('Server is running...', PORT);
  await dbConnection();
});
