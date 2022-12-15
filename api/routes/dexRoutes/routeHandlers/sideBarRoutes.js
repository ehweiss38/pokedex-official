const typeAPI=require('../../../public/javascripts/backend/typeAPI/typeAPI')
const express=require('express')

const router=express.Router()

router.get('/',(req,res)=>{
    console.log('received')
})

router.get('/:cat/:val', async(req, res)=>{
    console.log('making req')
    const{cat}=req.params
    const {val}=req.params
    console.log('side route called')
    let readyTypes=await typeAPI(cat,val)
    console.log(readyTypes,'received')
    res.send(
        readyTypes
    )
    readyTypes=null
})

module.exports=router