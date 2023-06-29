const drop = require('../tasks/03_drop');

describe('drop', () => {
    const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const arrayString = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

    test('should return an empty array for an empty input array', () => {
        expect(drop([], 5)).toEqual([]);
        expect(drop([], undefined)).toEqual([]);
    });

    test('should return the original array if the slice is zero or greater than the array length', () => {
        expect(drop(arrayNumber, 0)).toEqual(arrayNumber);
        expect(drop(arrayNumber, 11)).toEqual([]);
        expect(drop(arrayString, 0)).toEqual(arrayString);
        expect(drop(arrayString, 11)).toEqual([]);
    });

    test('should return a new array with the specified number of elements dropped from the beginning when slice is a string', () => {
        expect(drop([1, 2, 3], '2')).toEqual([3]);
    });

    test('should return the original array with the first element dropped if slice is not provided', () => {
        expect(drop(arrayNumber)).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10]);
        expect(drop(arrayString)).toEqual(['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
    });

    test('should return a new array with the specified number of elements dropped from the beginning', () => {
        expect(drop(arrayNumber, 2)).toEqual([3, 4, 5, 6, 7, 8, 9, 10]);
        expect(drop(arrayNumber, 3)).toEqual([4, 5, 6, 7, 8, 9, 10]);
        expect(drop(arrayString, 2)).toEqual(['c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
        expect(drop(arrayString, 3)).toEqual(['d', 'e', 'f', 'g', 'h', 'i', 'j']);
    });

    test('should return an array with spaces separated if the input data is not an array', () => {
        expect(drop('not an array', 2)).toEqual(['t', ' ', 'a', 'n', ' ', 'a', 'r', 'r', 'a', 'y']);
        expect(drop('not an array', 'a')).toEqual(['n', 'o', 't', ' ', 'a', 'n', ' ', 'a', 'r', 'r', 'a', 'y']);
    });

    test('should not modify the input array and return a new array', () => {
        const originalArray = [...arrayNumber];
        const result = drop(originalArray, 2);
        expect(result).toEqual([3, 4, 5, 6, 7, 8, 9, 10]);
        expect(originalArray).toEqual(arrayNumber);
    });
});
