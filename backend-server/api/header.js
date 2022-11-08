const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name: String,
    url_alias: {
        type: String,
        unique: true
    }
});



const Menu = mongoose.model("header_menu", schema)

router.get('/', (req,res)=>{
    console.log("Request is coming to Header Router");
    res.sendStatus(200)
})

router.get("/menu", (req, res)=>{
    console.log("Getting Menu Information")
    Menu.find({}).exec((err, results)=>{
        if(err){
            console.log("Error ",err.message)
        }
        res.json(results)
    })
})

module.exports = router;