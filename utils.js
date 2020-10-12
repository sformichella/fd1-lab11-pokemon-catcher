export function getDistinctRandomNumbers(range, number) {
    const array = [];
    
    while (array.length < range) {
        array.push(array.length);
    }

    while (array.length > number) {
        const randomIndex = Math.floor(Math.random() * array.length)

        array.splice(randomIndex, 1);
    }

    return array;
};