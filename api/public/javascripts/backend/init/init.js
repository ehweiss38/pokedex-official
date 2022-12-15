const initApi=require('./initAPI')

module.exports=async()=>{
    try{
        let randArr=[];
        for(let i=0;i<12;i++){
            let rand=Math.ceil(Math.random()*905)
            randArr.push(rand)
        }
        console.log(randArr)
        const initMons=await initApi(randArr)
        console.log('initMons ready', initMons)
        return initMons
    }catch(err){
        return ""
    }
}