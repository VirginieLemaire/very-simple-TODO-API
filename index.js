require('dotenv').config();

const { urlencoded } = require('express');
const express = require('express');
const router = require('./app/router');

const app = express();

// body-parser middleware
app.use(express.urlencoded({ extended: true }));
// tell express to use json
app.use(express.json());

app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
});
