import {
    getDistinctRandomNumbers
} from '../utils.js'



const test = QUnit.test;

test('getDistinctRandomNumbers should take in a number and range and return an array that has number of distinct numbers', (expect) => {
    const range = 20;
    const number = 6;

    const randomNumbers = getDistinctRandomNumbers(range, number);
    const numberOfRandomNumbers = randomNumbers.length;

    const expected = true;
    let actual = true;

    for (const num of randomNumbers) {
        const numIndex = randomNumbers.indexOf(num);

        for (const other of randomNumbers) {
            const otherIndex = randomNumbers.indexOf(other);

            if (num === other && numIndex !== otherIndex) {
                actual = false;
                break
            }
        }
    }

    expect.equal(expected, actual);
    expect.equal(numberOfRandomNumbers, number)
});
