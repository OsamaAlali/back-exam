"use strict";

const drink = require("../models/drink.model");

//CRUD opration

//creat fav

const createFave = async (req, res) => {
  const { strDrink, strDrinkThumb, idDrink } = req.body;
  console.log( 'req.body',req.body );
  console.log('****** crete****** ',strDrink, strDrinkThumb, idDrink );
  drink.find({},(error,data)=>{
      if (error) {
          res.send(error)
      } else {
          const newDrink= new drink({
            strDrink: strDrink, 
            strDrinkThumb: strDrinkThumb,
             idDrink: idDrink
          })
          newDrink.save();
          res.send('item adde')
      }
  })
};

//read fav

const readFave = async (req, res) => {
    drink.find({},(error,data)=>{
        if (error) {
            console.log('****** readFav ****** ',error);
            res.send(error)
        } else {
            res.send(data)
        }
    })

};

//remobe fav

const removeFave = async (req, res) => {
 const id =req.params.id;
 console.log('removeFave id=',id);
drink.deleteOne({_id: id},(error,data)=>{
    if (error) {
        console.log('removeFave 11 find',error);
        res.send(error)
    } else {
        res.send('remove sucsesss')
    }
})


};

//creat fav

const updateFave = async (req, res) => {
    const id =req.params.id;
    const { strDrink, strDrinkThumb} = req.body;
    drink.find({_id: id},(error,data)=>{
        if (error) {
            console.log('Update inside 1 find' ,error);
            res.send(error)
        } else {
           data[0].strDrink=strDrink;
           data[0].strDrinkThumb=strDrinkThumb;
           
           data[0].save().then(()=>{
            drink.find({},(error,newData)=>{
                if (error) {
                    console.log('****** readFav ****** ',error);
                    res.send(error)
                } else {
                    res.send(newData)
                }
            })
           })
        }
    })

};

module.exports = {
  createFave,
  readFave,
  removeFave,
  updateFave,
};
