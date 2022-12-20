# pokedex-official

This is the backend for my Pokedex project. It runs on Node.js and Express and implements pokeapi.co to fetch data. 

One of the main challenges present in constructing it was that information for each pokemon is spread across up to 6 different endpoints. To alleviate this, I designed a branch-based architecture, all connecting back to the REST API used to communicate with the client.

Some branches are only used if necessary(forms, evolutions). These also pose unique challenges, as the JSON is thorougly nested, necissitating an algorithm to quickly flatten and extract the relevant info.

Due to the architecture of this backend, each function/module is as cohesive as possible, only performing a single task. Further, I aimed for as loose coupling as possible with a 3rd party API-based app. Ultimately, as every branch operates independent from all the others, errors or endpoint changes in one will not impact the others, allowing the app to continue functioning, albeit in a slightly diminished capacity. This manifests as some information being omitted in the client-side display, although the display and navigation are otherwise unaffected.
