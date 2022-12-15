//needs html con
const htmlCon=require('../htmlCon')

module.exports=(game)=>{
    try{
        const typesArr=[];
            for(let i=0;i<game.data.types.length;i++){
                typesArr.push(game.data.types[i].type.name);
            }
            console.log(typesArr)
        return htmlCon(typesArr)
    }catch(err){
        console.log("check game.type")
        return "API values have changed"
    }
}