//unsure what to do about upper. I am changing my mind to think that it should be applied to the html at each instance. I am not doijng full change yet though

module.exports=(game)=>{
    try{
        //move obj is only needed if we count move iteration
        //can scrap it entirely, use find method on array
        //movescrape 2 will branch off router
        const moveSet=game.data.moves;
        const moveArr=[];
        for (let move of moveSet){
            let moveObj={}
            moveObj['name']=move.move.name;
            moveObj['link']=move.move.url;
            //why minus 1
            const meth=move.version_group_details[move.version_group_details.length-1]
            moveObj['level']=meth.level_learned_at
            moveObj['method']=meth.move_learn_method.name
            moveArr.push(moveObj)
        }
        //await movesScrape2(obj)
        return moveArr
    }catch(err){
        console.log('ms1 error', err)
    }
    
}
//this is a decently cohesive module, but it is very tightly coupled. Returning array in error might reduce coupling a bit


/*



async function moveScrape(num){
    try{
        const obj={}
        const entry=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
        console.log('3. movescrape')
        //so i have to put types in to generate move stab, idk if to repeat code to get it here or to pass obj along from there to here
        const moveSet=entry.data.moves;
        const moveArr=[];
        for (let move of moveSet){
            let moveObj={}
            moveObj['name']=move.move.name;
            moveObj['link']=move.move.url;
            const meth=move.version_group_details[move.version_group_details.length-1]
            moveObj['level']=meth.level_learned_at
            moveObj['method']=meth.move_learn_method.name
            moveArr.push(moveObj)
        }
        obj['moves']=moveArr;
        obj['movesIteration']=0
        //await movesScrape2(obj)
        return obj
    }catch(err){
        console.log('ms1 error', err)
    }
    
}

async function movesScrape2(obj){
    try{
        console.log('4. movescrape2')
        const movesIteration=obj['movesIteration']
        const{moves}=obj
        //make sure this still works with however i implement
        //probably best to make this its own function that is called with each load more
        for(i=movesIteration;i<movesIteration+6; i++){
            const iMove= moves[i]
            iMove['stats']={}
            const mStats=iMove['stats']
            const moveData= await axios.get(moves[i].link);
            mStats["accuracy"]=moveData.data.accuracy;
            if(moveData.data.power){
                mStats['damage']=moveData.data.power
            }
            else{mStats['damage']='Status'}
            mStats["damageType"]=moveData.data.damage_class.name
            mStats['pp']=moveData.data.pp
            mStats["descrip"]=moveData.data.effect_entries[0].effect
            mStats['type']=moveData.data.type.name
            //if(mStats.type===obj.type1||obj.type2[3, obj.type2.length-1]&&mStats.damage!=="Status"){
            if(mStats.type===obj.type1||mStats.type===obj.type2&&mStats.damage!=="Status"){
                mStats.damage=mStats.damage+"   + 50% (STAB)"
            }
            //movePokemon(mStats, moveData)
            console.log(obj['movesIteration'])
            //do I want to add flavor text entry?
        }
        obj['movesIteration']+=6
        console.log('finished')
        console.log('6. movescrape2 finished')
        return
    }catch(err){
        console.log('ms1 error', err)
    }
}
/*
const movePokemon=(obj,data)=>{
    console.log('5. movePokemon')
    obj['mPokemon']=[]
    for (let pokemon of data.data.learned_by_pokemon){
        obj.mPokemon[`${pokemon.name}`]=pokemon.url
    }
    if (obj.mPokemon.length===1){
        obj['signature']=true
    }
    console.log('movePokemon finished')
    return
}
module.exports={
    moveScrape,
    movesScrape2,
    //movePokemon
}
*/