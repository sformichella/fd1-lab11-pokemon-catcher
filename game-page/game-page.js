const pokeChoices = document.getElementsByName('pokemon');

for (const radio of pokeChoices) {
    radio.addEventListener('change', (e) => {
        console.log(e.target.value);
    })
}