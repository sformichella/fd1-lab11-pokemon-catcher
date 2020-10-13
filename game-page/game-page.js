import {
    getDistinctRandomNumbers,
    getIndexInNodeList
} from '../utils.js';

import {
    default as pokemonArray
} from '../pokemon.js';

// STATE



const userChoices = [...document.getElementsByName('pokemon')];
let randomIndices = getDistinctRandomNumbers(pokemonArray.length, 3);

const nextButton = document.getElementById('next-trio-button');

for (const radio of userChoices) {
    radio.addEventListener('change', (e) => {

        e.target.parentElement.style.backgroundColor = 'black';

        for (const radio2 of userChoices) {
            radio2.disabled = true;
            radio2.nextElementSibling.style.opacity = 0.5;
        }

        nextButton.classList.toggle('hidden');
        
    })

    const radioIndex = userChoices.indexOf(radio);
    const randomPokemon = pokemonArray[randomIndices[radioIndex]];

    radio.previousElementSibling.src = randomPokemon["url_image"];
    radio.nextElementSibling.textContent = `${randomPokemon["pokemon"]}`
};

nextButton.addEventListener('click', () => {
    console.log('next pressed');

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
})
