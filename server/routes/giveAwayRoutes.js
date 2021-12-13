const express = require('express')
const router = express.Router()

const provdierModel = require('../models/providerModel')

router.get('/provider', async (req, res) => {
    let providerList = await provdierModel.listProvider()
           res.send(providerList)
})

router.get('/provider/:id', async (req, res) => {
    console.log('req.params',req.params)
    let id = req.params.id
    let provider = await provdierModel.findById(id)
           res.send(provider)
})



router.post('/provider/:id',async (req,res)=>{
    const newData = req.body
    let id = req.params.id
    console.log (id)
    console.log(newData)
    let newProvider = await provdierModel.updateProvider(id,newData)
    res.json(newProvider)
})

module.exports = router