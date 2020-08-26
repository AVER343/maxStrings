const axios= require("axios")
const maxFrequency = require("./util/maxFrequency.util")
const express =require('express')
const jsondata = require("./util/new")
const router = express.Router()
router.post('/',async(req,res)=>{
        let maxNums = req.body.data.numberS
        res.json({data:maxFrequency(jsondata).reverse().splice(0,maxNums)})
})
module.exports = router