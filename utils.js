export function getDistinctRandomNumbers(range, number) {
    const array = [];
    
    // Generate an array consisting of 0, 1, 2, ..., range - 1
    while (array.length < range) {
        array.push(array.length);
    }

    // Take out random elements of the array until the array has the given number of elements
    while (array.length > number) {
        const randomIndex = Math.floor(Math.random() * array.length)

        array.splice(randomIndex, 1);
    }

    return array;
};


export function findPokemonByName(array, string) {
    for (const object of array) {
        if (object.name === string) {
            return object;
        }
    }
    return null;
}


export function getAllSiblings(element) {
    let siblings = [];

    if (element.parent) {
        return siblings;
    }

    let sibling = element.parentElement.firstChild;

    while (sibling) {
        if (sibling.nodeType === 1){
            siblings.push(sibling)
        }
        sibling = sibling.nextSibling;
    }

    return siblings;
};


export function getSibling(element, string) {
    for (const sib of getAllSiblings(element)) {
        if (sib.tagName === string.toUpperCase()){
            return sib;
        }
    }
}


export function getTotalCatches(pokemonData) {
    let total = 0;

    for (const pokemon of pokemonData) {
        total += pokemon.catches;
    }

    return total;
}


export function incrementEncounters(pokemon, data) {
    const pokeEncounter = findPokemonByName(data, pokemon["pokemon"]);

    if (pokeEncounter) {
        pokeEncounter.encounters += 1;
    } else {
        data.push({
            name: pokemon["pokemon"],
            encounters: 1,
            catches: 0
        })
    }
}