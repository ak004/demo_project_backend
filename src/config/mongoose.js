import mongoose from 'mongoose';
import DB_URL from './conn.js';




mongoose.Promise = global.Promise;

export default function () {
    const db = mongoose.connect(DB_URL, {
    });

    return db;
};