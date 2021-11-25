require('dotenv').config({path: `.env.${process.env.NODE_ENV}`});

interface IConfig {
  HOST: string | undefined;
  PORT: number | string | undefined;
  USER: string | undefined;
  PASSWORD: string | undefined;
  DB: string | undefined;
}
/**
 * Db config
 */
export const dbConfig: IConfig = {
  HOST: process.env.DB_HOST,
  PORT: process.env.DB_PORT,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_DATABASE,
  // dialect: 'postgres',
  // logging: false,
  // pool: {
  //   max: 100,
  //   min: 0,
  //   acquire: 30000,
  //   idle: 10000,
  // },
};
