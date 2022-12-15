const axios=require('axios')
const typeDisplay=require('./display/typeDisplay')
const api='https://pokeapi.co/api/v2/'

module.exports=async(cat,val)=>{
    console.log(cat)
    let typeReq=await axios.get(api+`${cat}/${val}`)
    console.log('in typeApi',typeReq)
    if(cat==='type'){
        return typeReq.data.pokemon
    }
    if(cat==='generation'){
        return typeReq.data.pokemon_species
    }
    if(cat==='region'){
        const pokedexes=typeReq.data.pokedexes
        const dexReq= await axios.get(pokedexes[pokedexes.length-1].url)
        return dexReq.data.pokemon_entries
    }
}