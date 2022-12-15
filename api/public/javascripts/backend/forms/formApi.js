const formscrape=require('./formscrape')
const axios=require('axios')

module.exports=async(num)=>{
    try{
        console.log('in form api')
        const request=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
        const formInfo=formscrape(request)
        return formInfo
    }catch(err){
        console.log('abandoned',err)
    }
}