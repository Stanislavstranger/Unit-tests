const chunk = require('../tasks/01_chunk');

describe('chunk', () => {
    const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const arrayString = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

    test('should split an array into chunks of zero size', () => {
        expect(chunk(arrayNumber, 0)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        expect(chunk(arrayString, 0)).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
    });

    test('should split an array into chunks of even size', () => {
        expect(chunk(arrayNumber, 2)).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
        expect(chunk(arrayString, 2)).toEqual([['a', 'b'], ['c', 'd'], ['e', 'f'], ['g', 'h'], ['i', 'j']]);
    });

    test('should split an array into chunks of odd size', () => {
        expect(chunk(arrayNumber, 3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]);
        expect(chunk(arrayString, 3)).toEqual([['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['j']]);
    });

    test('should split an array into chunks greater than half of the input array', () => {
        expect(chunk(arrayNumber, 7)).toEqual([[1, 2, 3, 4, 5, 6, 7], [8, 9, 10]]);
        expect(chunk(arrayString, 7)).toEqual([['a', 'b', 'c', 'd', 'e', 'f', 'g'], ['h', 'i', 'j']]);
    });

    test('should split an array into chunks of float size', () => {
        expect(chunk(arrayNumber, 3.4)).toEqual([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10]]);
        expect(chunk(arrayString, 3.4)).toEqual([['a', 'b', 'c', 'd'], ['e', 'f', 'g', 'h'], ['i', 'j']]);
    });

    test('should return an empty array if the input array is empty', () => {
        expect(chunk([], 5)).toEqual();
    });

    test('should throw an error if chunkSize is a negative number', () => {
        expect(chunk(arrayNumber, -3)).toEqual();
        expect(chunk(arrayString, -3)).toEqual();
    });

    test("should split an array into chunks is undefined", () => {
        expect(chunk(arrayNumber, undefined)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        expect(chunk(arrayString, undefined)).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
    });

    test('should throw an error if chunkSize is not a number', () => {
        expect(chunk(arrayNumber, '2')).toEqual();
        expect(chunk(arrayString, '2')).toEqual();
    });

    test('should throw an error if input is not an array', () => {
        expect(chunk('not an array', 2)).toEqual();
    });

    test('should throw an error if called without arguments', () => {
        expect(chunk()).toEqual();
    });
});