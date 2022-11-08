const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

//This schema can be used to design Blog Post Forms using input fields and requirements/validations 

const schema = mongoose.Schema({
   title: String,
   content: String,
   excerpt: String,
   "featured-img": String,
   'img-2': String,
    claps: Number,
    "author-name": String,
    date: Date,
    "author-img": String,
    readtime: String,
    "blog-type": String,
    tags: Array,
    featured: Boolean
}); 


const Blogs = mongoose.model("blogs", schema)


router.get("/", (req, res)=>{
    console.log("Request is coming to Homepage Router");
    Blogs.find({}).exec((err, results)=>{
        if(err)
            console.log("Error ",err.message)
        res.json(results)
    })
})

router.get("/featured", (req, res)=>{
    console.log("Featured Articles Route "+req.url)
    Blogs.find({featured: true}).sort({date: -1}).limit(3).exec((err, results)=>{
        if(err)
            console.log(err)
        res.json(results)
        })
})

router.get("/thelatest", (req, res)=>{
    console.log("The Latest Route "+req.url)
    Blogs.find({'blog-type': 'Travel'}).sort({date: -1}).limit(3).exec((err, results)=>{
        if(err)
            console.log(err)
        res.json(results)
        })
    
})

router.get("/latestarticles", (req, res)=>{
    console.log("Latest Articles Route "+req.url)
    Blogs.find({}).sort({date: -1}).limit(4).exec((error, results)=>{
        if(error)
            console.log(err)
        res.json(results)
        })
})

router.get("/lateststories", (req, res)=>{
    console.log("Latest Stories Route "+req.url)
    Blogs.find({"blog-type": {$ne: 'Travel'}}).sort({date: -1}).limit(3).exec((error, result)=>{
        if(error)
            console.log(err)
        res.json(result)
        })
})

module.exports = router;