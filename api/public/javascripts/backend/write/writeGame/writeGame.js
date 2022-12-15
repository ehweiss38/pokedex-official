const types=require('./types&abilities/types/types');
const abilities=require('./types&abilities/abilities/abilities');
const stats=require('./stats/stats')
const sprites=require('./sprites/sprites')
const moves= require('./moves/moves')


module.exports=async(game)=>{
    
    const gameObj={}
    gameObj['types']=types(game);
    gameObj['abilities']=abilities(game);
    gameObj['stats']=stats(game);
    gameObj['sprites']=sprites(game)
    console.log('before moves')
    gameObj['moves']=moves(game);
    return gameObj
}


//forms need more work