const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const schema = mongoose.Schema({
    site_name: String,
    site_description: String,
    logo: [{
        size: String,
        path: String
    }],
    favicon: String
    
});

const Meta = mongoose.model("meta", schema)

// Meta.insertMany([
//     {
//         site_name: "The Siren",
//         site_description: "",
//         logo: [{"size": "200x200", "path":"/logos/logo.png"}],
//         favicon: "/favicon.ico"
//     }
// ]).then((err, result)=>{
//     console.log(result)
// })

router.get('/', (req,res)=>{
    console.log("Request to Meta Router");
    Meta.find({}).exec((err, result)=>{
        if(err){
            console.log("Error ", err.message)
        }
        res.json(result)
    })
})



module.exports = router;