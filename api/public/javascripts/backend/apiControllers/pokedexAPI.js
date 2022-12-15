const axios=require('axios')

const writeController=require('../write/writeController')

const api='https://pokeapi.co/api/v2/'

let lore;
let game;

//num going to cause some issues
module.exports=async(num)=>{
    console.log('attempting api request')
    lore=await axios.get(`${api}pokemon-species/${num}`)  
    try{
        game=await axios.get(`${api}pokemon/${num}`)
    }  catch (err){
        game=await axios.get(`${api}pokemon/${lore.data.id}`)
    }
    console.log('request successful')
    const mainObj=await writeController(lore, game)
    console.log('main obj written')
    return mainObj
}

//func that calls get info, then calls required funcs. this in itself is what will be called