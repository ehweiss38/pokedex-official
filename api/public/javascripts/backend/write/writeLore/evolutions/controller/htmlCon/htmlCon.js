//const upper=require('../../../../../../helpers/upper')

//currently disconnected


module.exports=(arr)=>{
    const mapped=arr.map((mon)=>{
        console.log('monmon', mon)
        return`
        <a href="/${mon["pokeId"]}/entry" class="${mon["stage"]}">
            ${mon["stage"]}. ${mon["speciesName"]} <br>
        </a>
        `
    })
    return mapped.join('')
}