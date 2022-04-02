
const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();

const postRouter = require('./routes/posts');

const app = express();
const PORT = 4000;


app.use(express.json()); /// transform incoming request data to json format

app.use("/posts", postRouter);


const connectDb = () => {

    try {
        mongoose.connect(process.env.DB_URI)
        console.log("connected to db");
    } catch (err) {
        console.error(err);
    }

}


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
    connectDb();
});