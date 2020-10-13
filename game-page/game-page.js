import {
    getDistinctRandomNumbers,
    findPokemonByName
} from '../utils.js';

import {
    default as pokemonArray
} from '../pokemon.js';

// STATE
let caughtPokemon = [];



const userChoices = [...document.getElementsByName('pokemon')];
let randomIndices = getDistinctRandomNumbers(pokemonArray.length, 3);

const nextButton = document.getElementById('next-trio-button');

for (const radio of userChoices) {
    
    const radioIndex = userChoices.indexOf(radio);
    const randomPokemon = pokemonArray[randomIndices[radioIndex]];

    radio.previousElementSibling.src = randomPokemon["url_image"];
    radio.nextElementSibling.textContent = `${randomPokemon["pokemon"]}`

    console.log(radio);

    const pokeEncounter = findPokemonByName(caughtPokemon, randomPokemon["pokemon"]);

    if (pokeEncounter) {
        pokeEncounter.encounters += 1;
    } else {
        caughtPokemon += {
            name: randomPokemon["pokemon"],
            encounters: 1,
            catches: 0
        }
    }

    radio.addEventListener('change', (e) => {

        e.target.parentElement.style.backgroundColor = 'black';

        for (const radio2 of userChoices) {
            radio2.disabled = true;
            radio2.nextElementSibling.style.opacity = 0.5;
        }

        nextButton.classList.toggle('hidden');

        const pokeCatch = findPokemonByName(caughtPokemon, e.target.nextElementSibling.textContent);

        // pokeCatch.catches += 1;

        console.log(e.target);
    })
};



nextButton.addEventListener('click', () => {

    randomIndices = getDistinctRandomNumbers(pokemonArray.length, 3);

    for (const radio of userChoices) {
        radio.disabled = false;
        radio.checked = false;
        radio.nextElementSibling.style.opacity = 1;
        radio.parentElement.style.backgroundColor = 'lightgray';

        const radioIndex = userChoices.indexOf(radio);
        const randomPokemon = pokemonArray[randomIndices[radioIndex]];

        radio.previousElementSibling.src = randomPokemon["url_image"];
        radio.nextElementSibling.textContent = `${randomPokemon["pokemon"]}`
    }

    nextButton.classList.toggle('hidden');

    let totalPokemon = 0;
    for (const pokemon of caughtPokemon) {
        totalPokemon += pokemon.catches;
    }

    if (totalPokemon > 9) {
        location.href = '../results';
        caughtPokemon = [];
    }
});