export function resetRadioButton(radio) {
    radio.disabled = false;
    radio.checked = false;
    radio.nextElementSibling.style.opacity = 1;
    radio.parentElement.style.backgroundColor = 'lightgray';
};