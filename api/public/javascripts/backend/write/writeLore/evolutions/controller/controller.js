const evoScrape=require('./evoScrape/evoScrape')
const htmlCon=require('./htmlCon/htmlCon')



module.exports=(addr)=>{
    console.log('controller called')
    const scraped=evoScrape(addr)
    console.log('scraped', scraped)
    //const htmlConverted=htmlCon(scraped)
    //console.log('html converted')
    return scraped
}