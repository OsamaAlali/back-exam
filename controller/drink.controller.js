'use strict'

const axios=require('axios')


const getDrink=async(req,res)=>{

    await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`).then(respons=>{

    res.send(respons.data.drinks)
    }).catch(error=>console.log(error))
}

module.exports=getDrink