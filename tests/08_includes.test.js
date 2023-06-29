const includes = require('../tasks/08_includes');

describe('includes', () => {
    const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const arrayString = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

    test('should return false if collection is an empty array or value is undefined ', () => {
        expect(includes([], 5)).toEqual(false);
        expect(includes([], undefined)).toEqual(false);
    });

    test('should return true if value is found, else false if collection is an array and value is a number', () => {
        expect(includes(arrayNumber, 2)).toEqual(true);
        expect(includes(arrayNumber, 'a')).toEqual(false);
        expect(includes(arrayString, '2')).toEqual(false);
        expect(includes(arrayString, 'a')).toEqual(true);
    });

    test('should return true if value is found, else false if collection is an array and the value is is a number and fromIndex is a number', () => {
        expect(includes(arrayNumber, 2, 1)).toEqual(true);
        expect(includes(arrayNumber, 2, 3)).toEqual(false);
        expect(includes(arrayNumber, 'a', 'b')).toEqual(false);
        expect(includes(arrayString, '2', '3')).toEqual(false);
    });

    test('should return true if value is found, else false if collection is an object and the value is a number', () => {
        expect(includes({ 'a': 1, 'b': 2 }, 1)).toEqual(true);
    });

    test("should return true if value is found, else false if collection is a string, it's checked for a substring of value", () => {
        expect(includes('abcd', 'bc')).toEqual(true);
    });
});
