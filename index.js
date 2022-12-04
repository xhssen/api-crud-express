const express = require('express');
require("dotenv").config();
const app = express();
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const categoryRouter = require('./routes/categoryRoutes')
const productRouter= require('./routes/productRoutes')

mongoose.connect(process.env.DB_URL,{dbName: 'store'}).then( () => {
    console.log("-DATABASE CONNECTED...");
}).catch(err => console.log(err)) ;


app.listen(process.env.PORT,() => {
    console.log(`-SERVER CONNECTED ON PORT ${process.env.PORT}...`);
})

app.use(bodyParser.json());

app.use("/api/category",categoryRouter);
app.use("/api/product",productRouter);