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


export function getIndexInNodeList(nodeList, element) {
    for (let i = 0; i < nodeList.length; i++) {
        if (nodeList[i] === element) {
            return i;
        }
    }

    return null;
}