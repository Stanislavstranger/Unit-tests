const take = require('../tasks/05_take');

describe('take', () => {
    const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const arrayString = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

    test('should return an empty array for an empty input array', () => {
        expect(take([], 5)).toEqual([]);
        expect(take([], undefined)).toEqual([]);
    });

    test('should return the original array if the slice is zero or greater than the array length', () => {
        expect(take(arrayNumber, 0)).toEqual([]);
        expect(take(arrayNumber, 11)).toEqual(arrayNumber);
        expect(take(arrayString, 0)).toEqual([]);
        expect(take(arrayString, 11)).toEqual(arrayString);
    });

    test('should return a new array with the specified number of elements taken from the beginning when slice is a string or a negative number', () => {
        expect(take([1, 2, 3], '2')).toEqual([1, 2]);
        expect(take([1, 2, 3], -2)).toEqual([]);
    });

    test('should return the original array with the first element taken if slice is not provided', () => {
        expect(take(arrayNumber)).toEqual([1]);
        expect(take(arrayString)).toEqual(['a']);
    });

    test('should return a new array with the specified number of elements taken from the beginning', () => {
        expect(take(arrayNumber, 2)).toEqual([1, 2]);
        expect(take(arrayNumber, 3)).toEqual([1, 2, 3]);
        expect(take(arrayString, 2)).toEqual(['a', 'b']);
        expect(take(arrayString, 3)).toEqual(['a', 'b', 'c']);
    });

    test('should return an array with characters separated if the input data is not an array', () => {
        expect(take('not an array', 2)).toEqual(['n', 'o']);
        expect(take('not an array', 'a')).toEqual([]);
    });

    test('should not modify the input array and return a new array', () => {
        const originalArray = [...arrayNumber];
        const result = take(originalArray, 2);
        expect(result).toEqual([1, 2]);
        expect(originalArray).toEqual(arrayNumber);
    });

    test('should return a new array with the specified number of elements taken from the beginning when slice is an array', () => {
        expect(take(arrayNumber, [2])).toEqual([1, 2]);
    });
});
