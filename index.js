const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

// RoutesFile
const ecommers = require("./routes/product-routes.js");

mongoose.connect("mongodb://localhost:27017/AppTransaction", { useNewUrlParser: true })
.then(() => console.log('Connected'))
.catch(err => console.log(err.message))

const app = express();

//Middleware
app.use(bodyParser.json())

//Routes
app.use("/product", ecommers)


//Port
const port = 1999 || process.env.PORT;

app.listen(port, () => console.log(`Port Yang Bisa Digunakan ${port}`))