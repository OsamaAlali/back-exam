'use strict'

const mongoose=require('mongoose')

//create schema

const drinkSchema=mongoose.Schema({
    strDrink: String,
    strDrinkThumb: String,
    idDrink: String
})

const drinkModel=mongoose.model('drinkexam',drinkSchema)


module.exports=drinkModel;
