const zip = require('../tasks/10_zip');

describe('zip', () => {
    test('should zip arrays of equal length', () => {
        const array1 = [1, 2, 3];
        const array2 = ['a', 'b', 'c'];
        const expected = [[1, 'a'], [2, 'b'], [3, 'c']];
        expect(zip(array1, array2)).toEqual(expected);
    });

    test('should zip arrays with unequal length', () => {
        const array1 = [1, 2];
        const array2 = ['a', 'b', 'c'];
        const expected = [[1, 'a'], [2, 'b'], [undefined, 'c']];
        expect(zip(array1, array2)).toEqual(expected);
    });

    test('should handle empty arrays', () => {
        const array1 = [];
        const array2 = ['a', 'b', 'c'];
        const expected = [[undefined, "a"], [undefined, "b"], [undefined, "c"]];
        expect(zip(array1, array2)).toEqual(expected);
    });

    test('should handle no arguments', () => {
        const expected = [];
        expect(zip()).toEqual(expected);
    });
});