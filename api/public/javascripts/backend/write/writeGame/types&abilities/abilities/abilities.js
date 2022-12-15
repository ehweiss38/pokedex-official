const htmlCon=require('../htmlCon')

module.exports=(game)=>{
    try{
        const abilitiesArr=[];
            for(let i=0;i<game.data.abilities.length;i++){
                abilitiesArr.push(game.data.abilities[i].ability.name);
            }
            console.log(abilitiesArr)
        return htmlCon(abilitiesArr)
    }catch(err){
        console.log("check game.abilities")
        return "API values have changed"
    }
}