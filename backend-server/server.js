const express = require('express')
const app = express()
const config = require('./config')
const api = require('../backend-server/api/api')
const cors = require('cors')
app.use(cors())



const mongoose = require('mongoose')


mongoose.connect(config.dbUrl(), {useNewUrlParser:true,useUnifiedTopology:true},(err, connection)=>{
    if(err)
        console.log(err)
    else{
        console.log("Database Connection Successful")
    }
        
})

const logger = (req, res, next)=>{
    console.log("Logging ",req.url)
    next()
}

app.use(logger)



app.listen(config.PORT, ()=> {
    
    console.log("Server is running at Port", config.PORT)
}).on('error', (error)=>{
    console.log("Error ", error.message)
})




app.use("/api", api)

