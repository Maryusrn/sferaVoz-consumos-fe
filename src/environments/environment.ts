import * as dotenv from 'dotenv';

dotenv.config();

export const develop = {
    production: false,
    API_URL: process.env['API_URL_DEV']
  };

  export const production = {
    production: true,
    API_URL: process.env['API_URL_PROD'] 
  };