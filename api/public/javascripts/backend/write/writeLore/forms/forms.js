module.exports=(lore)=>{
    try{
        const forms=[]
        if(lore.data.varieties.length>1){
            for(let i=0; i<lore.data.varieties.length;i++){
                const formInfo={};
                formInfo['name']=lore.data.varieties[i].pokemon.name
                formInfo['num']=lore.data.varieties[i].pokemon.url.slice(34).slice(0,-1)
                forms.push(formInfo)
            }
            return forms
        }else{
            return forms
        }
    }catch(err){
        console.log("check lore.forms")
        return ["API has changed"]
    }
}
//This will have numerous branches off of it. For now I will just return array

//even though they are far apart, this is coupled with forms tabs
//However, for ease of displaying stats, I have decided to keep them seperate
