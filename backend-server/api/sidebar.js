const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Blogs = mongoose.model("blogs")

const getOldDate = ()=>{
        const date = new Date()
        var oldDate = date.getDate()-6
        date.setDate(date.getDate()-6)
        return date
}
router.use('/top-post', (req, res)=>{
    console.log("SideBar Top Post Route ", req.url)
    Blogs.find({date: {$lte: new Date()}}).sort({claps: -1, date: -1}).limit(4).exec((error, result)=>{
        if(error)
            console.log("Error ",error.message)
        res.json(result)
    })

})

router.use("/", (req, res)=>{
    console.log("Sidebar route",req.url)
    res.send("Sidebar")
})

module.exports = router