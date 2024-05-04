require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app= express();
const routes = require('./routes/index');


const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/',routes)

app.listen(PORT,() => {
    console.log(`Server is listening on port:${PORT}`);
})