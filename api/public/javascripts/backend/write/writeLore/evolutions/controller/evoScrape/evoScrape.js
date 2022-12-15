
module.exports=(addr)=>{
    let holdingArr=[]
    evoAlg=(addr, count)=>{
        count ++
        const evoObj={}
        if(addr.species){
            console.log(addr)
            evoObj[`speciesName`]=addr.species.name
            evoObj[`pokeId`]=addr.species.url.slice(42,-1)
            evoObj['stage']=count

        }
        if(addr.evolution_details.length){
            const index=addr.evolution_details.length-1
            const detObj={}
            evoObj['detes']=detObj
            for(let dete in addr.evolution_details[index]){
                if(addr.evolution_details[index][dete]){
                    if (typeof addr.evolution_details[index][dete]==='object'){
                        detObj[dete]=addr.evolution_details[index][dete].name
                    }else{
                        detObj[dete]=addr.evolution_details[index][dete]
                    }
                }
            }
        }
        console.log('made it here 2')
        holdingArr.push(evoObj)
        if(addr.evolves_to){
            for (let mon of addr.evolves_to){
                evoAlg(mon, count)
            }
        }
        count --
        return
    }
    evoAlg(addr,0)
    return holdingArr
}


