const Algo = require('./algorithm.js')

/* 
    Testing that a array can be created.
        - Array's contain only numbers.
*/
describe('#createArray', () => {
    describe('empty array', () => {
        test('it creates a empty array of length 0', () => {
            const arr = Algo.createArray();

            expect(arr.length).toBe(0);
        });
    });

    describe('array with non-int values', () => {
        test('creates a empty array', () => {
            const arr = Algo.createArray('A', null, undefined, 'lol', true);

            expect(arr.length).toBe(0);
        });
    });

    describe('array with int values', () => {
        test('creates a array with expected values', () => {
            const arr = Algo.createArray(1, 2, 3, 4, 5);

            expect(arr.length).toBe(5);
        });
    });

    describe('array with mixed values', () => {
        test('creates a array with only the ints', () => {
            const arr = Algo.createArray(1, 'lol', 3, false, 5);

            expect(arr.length).toBe(3);
        });
    });
});

/*
    Testing binary search
*/
describe('#binarySearch', () => {
    describe('empty array', () => {
        test('cant find element', () => {
            const arr = Algo.createArray();
            arr.binarySearch(1)

            expect(arr.targetIndex).toBeNull();
        });
    });
    describe('non-empty array', () => {
        test('target exists in array', () => {
            const arr = Algo.createArray(1, 2, 3, 4, 5);
            arr.binarySearch(3)

            expect(arr.targetIndex).toBe(2);
        });
        test('target does not exist in array', () => {
            const arr = Algo.createArray(1, 2, 3, 4, 5);
            arr.binarySearch(6)

            expect(arr.targetIndex).toBeNull();
        });
        test('target is first element in array', () => {
            const arr = Algo.createArray(1, 2, 3, 4, 5);
            arr.binarySearch(1)

            expect(arr.targetIndex).toBe(0);
        });
        test('target is last element in array', () => {
            const arr = Algo.createArray(1, 2, 3, 4, 5);
            arr.binarySearch(5)

            expect(arr.targetIndex).toBe(4);
        });
    });
})

