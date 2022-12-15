//const upper=require('../../../../helpers/upper')

module.exports=(arr)=>{
    const converted=arr.map((item)=>{
        return`<p>${item}</p>`
    })
    return converted.join('');
}