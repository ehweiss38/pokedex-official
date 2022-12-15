module.exports=(lore)=>{
    if(lore.data.generation.name){
        return lore.data.generation.name
    }else{
        console.log('check lore.generation', lore.data.generation)
        return "API values have changed"
    }
}