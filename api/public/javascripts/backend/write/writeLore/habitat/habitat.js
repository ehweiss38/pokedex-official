
module.exports=(lore)=>{
    try{
    if(lore.data.habitat){
        return lore.data.habitat.name
    }else{
        console.log('Check lore.habitat')
        return 'No fixed habitat'

    }}catch(err){
        console.log(err)
        return 'Values have changed'
    }
}
