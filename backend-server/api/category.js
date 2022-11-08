const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Blogs = mongoose.model("blogs")

router.get("/", (req, res)=>{
    console.log("Request to Category Route",req.url)
    Blogs.find({"blog-type": req.query['type']}).sort({date: -1}).limit(10).exec((error, result)=>{
        if(error)
            console.log("Error ",error.message)
        res.json(result)
    })
    // res.send(req.query['type'])
    
    
})

router.get("/post", (req, res)=>{
    console.log("Request to Category Post Route", req.query['id'])
    Blogs.find({_id: req.query['id']}).exec((err, result)=>{
        if(err){
            console.log("Error ",err.message)
            res.sendStatus(404).json("Not Found")
        }
        res.json(result)
    })
})
module.exports = router