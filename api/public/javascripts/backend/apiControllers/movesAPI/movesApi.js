const axios=require('axios')

module.exports=async(url)=>{
    console.log('Moves api')
    let moveInfo={}
    const retrievedInfo=await axios.get(url)
    moveInfo['effect']=retrievedInfo.data.effect_entries[0].effect
    moveInfo['power']=retrievedInfo.data.power
    moveInfo['pp']=retrievedInfo.data.pp
    moveInfo['damageType']=retrievedInfo.data.damage_class.name
    moveInfo['type']=retrievedInfo.data.type.name
    moveInfo['accuracy']=retrievedInfo.data.accuracy
    return moveInfo

}