const controller=require('./controller/controller')
const axios=require('axios')


module.exports=async(lore)=>{
    try{
        const evolutions=await axios.get(lore.data.evolution_chain.url)
        return controller(evolutions.data.chain)
    }catch(err){
        console.log('Check lore.evolutions')
        return "API has changed"
    }
}
//tight with class because it provides valid api content