//For sake of architecture, all descriptions will be collected in array. Randomized on front end

module.exports=(lore)=>{
        try{
            const entries=lore.data.flavor_text_entries;
            const englishEntries=entries.filter(entry=>entry.language.name==="en");
            return englishEntries    
        }catch(err){
            console.log("Check lore.entries")
            return ['API values have changed']
        }
}