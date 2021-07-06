"use strict";

// rquired pacgke

const express = require("express");

const cors = require("cors");

const mongoose = require("mongoose");

require("dotenv").config();

//controler
const getDrink = require("./controller/drink.controller");
const {
    createFave,
    readFave,
    removeFave,
    updateFave

} =require('./controller/drink.crud.controller')
// intlize server
const app = express();
const PORT = process.env.PORT;

//midellware

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/DB_NAME", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//test endpoint
app.get("/", (req, res) => {
  res.send("heloooo");
});

//getdata from api

app.get("/drink", getDrink);

// CRUD End Point

//create fav
app.post("/drink/fav",createFave);

// read
app.get("/drink/fav",readFave);

//remove
app.delete("/drink/fav/:id",removeFave);

//update
app.put("/drink/fav/:id",updateFave);
//test server
app.listen(PORT, () => {
  console.log(`SERVER ON PORT ${PORT}`);
});
