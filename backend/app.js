const express = require("express");

const app = express();

app.use(express.json());


// middleware to set router

const product = require("./routes/productroutes");

app.use("/api/v1",product)

/// mi change kele  tula nay sanagyhe jaykant
module.exports = app