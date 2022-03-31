
const express = require('express');

const postRouter = require('./routes/posts');

const app = express();
const PORT = 4000;


app.use("/posts", postRouter);


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
    // console.log('Listening on port: ' + PORT);
});