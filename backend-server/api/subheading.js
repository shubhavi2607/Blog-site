const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const schema = mongoose.Schema({
    subheading: String
});

const subHeading = mongoose.model("subHeading", schema)


router.get('/', (req,res)=>{
    console.log("Request is coming to Subheading Router");
    subHeading.find({}).exec((err, results)=>{
        if(err){
            console.log("Error ",err.message)
        }
        res.json(results)
    })
})

module.exports = router;