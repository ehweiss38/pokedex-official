module.exports=(type, content)=>{
    return`
    <nav class="panel">
        <p class="panel-heading ${type}">
            ${type} Type
        </p>
        <table class="table">
            <thead>
                <tr>
                <th><abbr title="Number within Type">#</abbr></th>
                <th>Pokemon</th>
                <th><abbr title="Pokedex ID">ID</abbr></th>
                </tr>
            </thead>
            ${content}
        </table>
    </nav>
    `
}
