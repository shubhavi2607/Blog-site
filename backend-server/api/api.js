const express = require('express');
const router = express.Router();
const subheading = require('./subheading')
const homepage = require('./homepage')
const sidebar = require('./sidebar')
const category = require('./category')
const header = require('./header')
const meta = require('./meta')


router.get('/', (req,res)=>{
    console.log("Request is coming to Api Router");
    
})

router.use('/subheading', subheading)
router.use('/homepage', homepage)
router.use('/sidebar', sidebar)
router.use('/category', category)
router.use('/header', header)
router.use('/meta', meta)

module.exports = router;