const express = require('express')
const app = express.Router()
const userModel = require('../schema/userSchema')

app.post('/', async (req, res) => {
    let result = new userModel(req.body)
    result = await result.save()
    res.send(result)
})
app.get('/', async (req, res) => {
    let result =await userModel.find()
    res.send(result)
})
app.get('/edit/:id',async(req,res)=>{
    let result = await userModel.findOne({_id:req.params.id})
   
    res.send(result)
})
app.delete('/:id',async(req,res)=>{
    let result = await userModel.deleteOne({_id:req.params.id})
    res.send(result)
})
app.put('/edit/:id',async(req,res)=>{

 let result = await userModel.updateOne({ _id: req.params.id }, { $set: req.body })
 res.send(result)
 
})


module.exports = app;