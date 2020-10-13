import {
    getDistinctRandomNumbers,
    getIndexInNodeList
} from '../utils.js';

import {
    default as pokemonArray
} from '../pokemon.js';


const userChoices = [...document.getElementsByName('pokemon')];
const randomIndices = getDistinctRandomNumbers(pokemonArray.length, 3);

for (const radio of userChoices) {
    radio.addEventListener('change', (e) => {
        e.target.parentElement.style.backgroundColor = 'black';

    })

    const radioIndex = userChoices.indexOf(radio);
    const randomPokemon = pokemonArray[randomIndices[radioIndex]];

    radio.previousElementSibling.src = randomPokemon["url_image"];
    radio.nextElementSibling.textContent = `${randomPokemon["pokemon"]}`
};
