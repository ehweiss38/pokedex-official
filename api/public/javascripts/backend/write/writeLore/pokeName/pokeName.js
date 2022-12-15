module.exports=(lore)=>{
    if(lore.data.name){
        return lore.data.name
    }else{
        console.log('check lore.name')
        return 'API Values have changed'
    }
}