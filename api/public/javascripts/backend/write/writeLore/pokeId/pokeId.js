module.exports=(lore)=>{
    if(lore.data.id){
        return lore.data.id
    }else{
        console.log('Check lore.id');
        return "API values have changed"}
}