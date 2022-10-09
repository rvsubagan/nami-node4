import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';


const app = express();
dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome to Node API! "});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port: ${ PORT }`));