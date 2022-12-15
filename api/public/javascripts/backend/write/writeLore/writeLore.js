const pokeName=require('./pokeName/pokeName')
const pokeId=require('./pokeId/pokeId')
const habitat=require('./habitat/habitat')
const description=require('./description/description')
const generation=require('./generation/generation')
const evolutions=require('./evolutions/evolutions')
const forms=require('./forms/forms')

module.exports=async(lore)=>{
    const loreObj={}
    loreObj['pokeName']=pokeName(lore);
    loreObj['pokeId']=pokeId(lore);
    loreObj['habitat']=habitat(lore);
    loreObj['description']=description(lore);
    loreObj['generation']=generation(lore);
    loreObj['forms']=forms(lore);
    loreObj['evolutions']=await evolutions(lore);
    return loreObj
}

//major performance drains: evolutions, descriptions