
const writeLore=require('./writeLore/writeLore')
const writeGame=require('./writeGame/writeGame')

module.exports=async(lore, game)=>{
    try{
    const info={}
    info['lore']=await writeLore(lore)
    console.log('lore written')
    info['game']=await writeGame(game)
    console.log(info['lore'])
    return info
    }catch(err){
        console.log(err)
    }
}
