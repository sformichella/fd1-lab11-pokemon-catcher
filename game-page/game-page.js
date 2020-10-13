import {
    default as pokemonArray
} from '../pokemon.js';

import {
    getDistinctRandomNumbers,
    findPokemonByName,
    getSibling,
    getTotalCatches,
    incrementEncounters
} from '../utils.js';

import {
    resetRadioButton
} from './radio-buttons.js';

// STATE
let catchesAndEncounters = [];


const numberOfCatches = document.getElementById('caught-poke-number');
const userChoices = [...document.getElementsByName('pokemon')];
const nextButton = document.getElementById('next-trio-button');


for (const radio of userChoices) {

    const randomIndices = getDistinctRandomNumbers(pokemonArray.length, 3);
    const radioIndex = userChoices.indexOf(radio);
    const randomPokemon = pokemonArray[randomIndices[radioIndex]];

    getSibling(radio, 'img').src = randomPokemon["url_image"];
    getSibling(radio, 'span').textContent = `${randomPokemon["pokemon"]}`

    incrementEncounters(randomPokemon, catchesAndEncounters);

    
    radio.addEventListener('change', (e) => {

        e.target.parentElement.style.backgroundColor = 'black';

        for (const radio2 of userChoices) {
            radio2.disabled = true;
            radio2.nextElementSibling.style.opacity = 0.5;
        }

        nextButton.classList.toggle('hidden');

        const pokeCatch = findPokemonByName(
            catchesAndEncounters,
            getSibling(e.target, 'span').textContent
        );

        pokeCatch.catches += 1;

        const totalPokemon = getTotalCatches(catchesAndEncounters);
        numberOfCatches.textContent = totalPokemon;
    })
};



nextButton.addEventListener('click', () => {

    for (const radio of userChoices) {

        resetRadioButton(radio);

        const randomIndices = getDistinctRandomNumbers(pokemonArray.length, 3);
        const radioIndex = userChoices.indexOf(radio);
        const randomPokemon = pokemonArray[randomIndices[radioIndex]];

        getSibling(radio, 'img').src = randomPokemon["url_image"];
        getSibling(radio, 'span').textContent = `${randomPokemon["pokemon"]}`;

        incrementEncounters(randomPokemon, catchesAndEncounters);
    }

    nextButton.classList.toggle('hidden');

    const totalPokemon = getTotalCatches(catchesAndEncounters);
    numberOfCatches.textContent = totalPokemon;

    if (totalPokemon > 9) {
        location.href = '../results';
    }
});