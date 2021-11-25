import mongoose from 'mongoose';
import {dbConfig} from './config/db.config';

// DB URL
const URL = `mongodb://${dbConfig.USER}:${dbConfig.PASSWORD}@${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`;
/**
 * Db connection
 */
export const dbConnection = async () => {
  try {
    await mongoose.connect(URL, {});
    console.log('DATABASE CONNECTED');
  } catch (error) {
    console.error(error);
  }
};
