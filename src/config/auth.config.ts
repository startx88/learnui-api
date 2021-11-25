require('dotenv').config({path: `.env.${process.env.NODE_ENV}`});

/**
 * Auth confi
 */
export const authConfig = {
  //secret: "bezkoder-secret-key"
  secret: process.env.JWT_SECRET,
};
