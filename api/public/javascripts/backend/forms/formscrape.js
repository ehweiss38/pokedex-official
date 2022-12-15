const stats = require('../write/writeGame/stats/stats')
const abilities = require('../write/writeGame/types&abilities/abilities/abilities')
const types=require('../write/writeGame/types&abilities/types/types')
const moves=require('../write/writeGame/moves/moves')

module.exports=(req)=>{
    let obj={game:{sprites:{}}}
    console.log('form req', req.data.sprites)
    obj['pokeName']=req.data.name
    obj['types']=types(req)
    obj['abilities']=abilities(req)
    if(req.data.held_items[0]){
        obj['heldItem']=req.data.held_items[0].item.name
    }else{
        obj['heldItem']='No held item'
    }
    obj['baseSpecies']=req.data.species.name
    obj.game.sprites['default']=req.data.sprites.front_default
    obj.game.sprites['shiny']=req.data.sprites.front_shiny
    obj.game['moves']=moves(req)
    obj.game['stats']=stats(req)

    return obj
}