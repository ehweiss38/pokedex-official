const axios=require('axios');

const api='https://pokeapi.co/api/v2/'


//num going to cause some issues
/*
module.exports=async(arr)=>{
    const initArr=[]
    for(let num of arr){
        let obj={}
        const request=await axios.get(`${api}pokemon/${num}`)
        obj['sprite']=request.data.sprites.front_default
        obj['name']=request.data.forms[0].name
        initArr.push(obj)
    }
    console.log('initArr ready', initArr)
    return initArr
}
*/

module.exports=async(arr)=>{
    async function generateSprite(num){
        let obj={}
        const request=await axios.get(`${api}pokemon/${num}`)
        console.log(request.data.sprites.front_default)
        obj['sprite']=request.data.sprites.front_default
        obj['name']=request.data.forms[0].name
        obj['pokeId']=request.data.id
        if(obj['sprite']&&obj['name'])
        return obj
    }
    const readyArr=await Promise.all(arr.map(num=>{
        return generateSprite(num)
    }))
    console.log('readyArr ready', readyArr)
    return readyArr
}
