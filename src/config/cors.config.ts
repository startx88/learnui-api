require('dotenv').config({path: `.env.${process.env.NODE_ENV}`});

/**
 * Cors config
 */
export const corsConfig = {
  CORS_ORIGIN: process.env.CORS_ORIGIN,
};
