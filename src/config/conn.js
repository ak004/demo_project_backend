import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
import dotenv from 'dotenv';
dotenv.config();


let DB_DEV_URL = process.env.DB_DEV_URL;
if (!DB_DEV_URL) {
  if(process.env.STAGE == "test") {
    DB_DEV_URL = `mongodb://mongo:27017/demo_db_test`;
  }else {
    DB_DEV_URL = 'mongodb://127.0.0.1:27017/demo_db_test';
  }
}

const DB_USER = process.env.DB_USER,
  DB_PWD = encodeURIComponent(process.env.DB_PWD);
const DB_PROD_URL = `mongodb://${DB_USER}:${DB_PWD}${process.env.DB_PROD_URL}`;

const dbUrl = process.env.NODE_ENV === "prod" ? DB_PROD_URL : DB_DEV_URL;

export default dbUrl;