const express=require('express')
const pokedexAPI=require('../../public/javascripts/backend/apiControllers/pokedexAPI')
const init=require('../../public/javascripts/backend/init/init')
const movesApi=require('../../public/javascripts/backend/apiControllers/movesAPI/movesApi')
const typeAPI=require('../../public/javascripts/backend/typeAPI/typeAPI')
//const layout=require('../../public/javascripts/frontend/layout/layout')
const formAPI=require('../../public/javascripts/backend/forms/formApi')
//const forms = require('.../../public/javascripts/frontend/layout/entry/forms/forms')

//should set timeout for 3 seconds

const router=express.Router()

let dexData

router.get("/", async(req, res)=>{
    const initArr=await init()
    console.log('initArr',initArr)
    res.send(
        initArr
    );
})


router.post("/", (req, res)=>{
    const{num}=req.body;
    console.log('num received', num)
    res.redirect(`/${num}/entry`)
})


//need to add logic to handle redirect from switching forms
router.get('/:num/entry', async(req,res)=>{
    try{ 
        console.log('get request received')
        if(typeof dexData==='object'&&dexData['lore']){
            for(let key in dexData){
                delete dexData[key]
            }
            console.log('dexData cleared')
        }
        console.log('past cleanup')
        const num=req.params.num
        dexData=await pokedexAPI(num);
        console.log('dexData ready', dexData)
        if(typeof dexData==='object'){
            res.send(
                dexData
            )
        }
    }catch(err){
        console.log('send error',Error)
    }
})

router.get('/:num/entry/stats', async(req,res)=>{
    if(typeof dexData!=='object'){
        const num=parseInt(req.params.num)
        dexData=await pokedexAPI(num);
    }
    res.send(
        dexData
    );
})

//potential writing error if moves loaded directly
router.get('/moves', async(req,res)=>{
    console.log('moves route')
    /*if(typeof dexData!=='object'||!dexData.game['moves']){
        console.log('writing obj')
        dexData=await pokedexAPI(num);
    }*/
    let placeholder
    if(dexData.forms){
        const {moves}=dexData.forms.game
        placeholder=moves
    }else{
        const {moves}=dexData.game
        placeholder=moves
    }
    console.log('placeholder',placeholder)
    if(!dexData['movesIt']){
        dexData['movesIt']=6
        dexData['movesDisplayArray']=[]
        //potentially bad form not using this here
    }else{
        dexData['movesIt']+=6
    }
    for(let i=dexData['movesIt']-6;i<dexData['movesIt'];i++){
        try{
            console.log(placeholder[i])
            placeholder[i]['stats']=await movesApi(placeholder[i].link)  
            dexData['movesDisplayArray'].push(placeholder[i])
        }
        //move movesApi
        catch(err){
            console.log('error',err)
            continue
        }
    }
    //dexData['moves']=await moveScrape(num)
    /*
    for(let i=movesIt-6;i<movesIt;i++){
                //move movesApi
                moves[i]['stats']=await movesApi(moves[i].link)
        }
    */
   console.log('movesdisp',dexData['movesDisplayArray'])
    res.send(
        dexData['movesDisplayArray']
    );
})




router.get('/:form/form', async(req,res)=>{
    console.log('form')
    //changes to 'num in url'
    
    const {form}=req.params
    if(dexData['forms']){
        for(let key in dexData['forms']){
            delete dexData['forms'][key]
            }
        }
    dexData['forms']=await formAPI(form)
    dexData.forms['pokeId']=form
    res.send(
        dexData
        )
    }
)

router.get('/:num/entry/:form/stats', async(req,res)=>{
    if(typeof dexData!=='object'){
        const {num}=parseInt(req.params)
        dexData=await pokedexAPI(num);
    }
    if(!dexData['forms']){
        const {form}=parseInt(req.params);
        dexData['forms']=await formAPI(form)
        dexData.forms['pokeId']=form
    }
    console.log('in stat route', dexData.forms)
    res.send(
        dexData
    );
})

router.get('/:num/entry/:form/moves', async(req,res)=>{
    //very similar above, could be redefined
    if(typeof dexData!=='object'||!dexData){
        const {num}=parseInt(req.params)
        try{
        dexData=await pokedexAPI(num);
        }catch(err){
            console.log('req failed')
            res.redirect('/')
        }
    }
    if(!dexData['forms']){
        const {form}=parseInt(req.params);
        dexData['forms']=await formAPI(form)
        dexData.forms['pokeId']=form
    }
    const {moves}=dexData.forms.game
    if(!dexData['movesIt']){
        dexData['movesIt']=6
        dexData['movesDisplayArray']=[]
        //potentially bad form not using this here
    }else{
        dexData['movesIt']+=6
    }
    for(let i=dexData['movesIt']-6;i<dexData['movesIt'];i++){
        try{
            moves[i]['stats']=await movesApi(moves[i].link)  
        }
        //move movesApi
        catch(err){
            continue
        }
    }
    console.log('blastoff')
    res.send(
        dexData
    );
})







module.exports=router