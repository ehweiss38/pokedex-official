const typeTable=require('./typeTable')

module.exports=(typeReq)=>{
  const type=typeReq.data.name
  let count=0
  const monList=typeReq.data.pokemon.map(mon=>{
      count++
      return`
        <tr>
          <th>${count}</th>
          <td><a href="/${mon.pokemon.name}/entry" title="${mon.pokemon.name}">${mon.pokemon.name}</a></td>
          <td>${mon.pokemon.url.slice(34,-1)}</td>
        </tr>
        `
  })
  const content=`
    <tbody>
        ${monList.join('')}
    </tbody>
    `
  return typeTable(type, content)
}
