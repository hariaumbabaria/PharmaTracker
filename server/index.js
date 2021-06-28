import express from 'express';
import dotenv from 'dotenv';
import db from './Database/db.js';

const app = express();

dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;



const URL = `mongodb+srv://${username}:${password}@cluster0.vg7by.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

db(URL);

app.listen(5000,() => {
    console.log('server is up and running on port 5000');
})