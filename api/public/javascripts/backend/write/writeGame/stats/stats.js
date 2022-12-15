module.exports=(game)=>{
    const statsArr=game.data.stats;
    stats={total:0}
    for(let stat of statsArr){
        stats[`${stat.stat.name}`]=stat['base_stat'];
        stats['total']+=parseInt(stats[`${stat.stat.name}`])
    }
    return stats
}