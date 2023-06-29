const omit = require('../tasks/12_omit');

describe('omit', () => {
    test('should omit specified keys from object', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const keysToOmit = ['a', 'c'];
        const expected = { b: 2 };
        expect(omit(obj, keysToOmit)).toEqual(expected);
    });

    test('should return a new object', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const keysToOmit = ['a', 'c'];
        const result = omit(obj, keysToOmit);
        expect(result).not.toBe(obj);
    });

    test('should not modify the original object', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const keysToOmit = ['a', 'c'];
        omit(obj, keysToOmit);
        expect(obj).toEqual({ a: 1, b: 2, c: 3 });
    });

    test('should handle non-existent keys', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const keysToOmit = ['d', 'e'];
        const expected = { a: 1, b: 2, c: 3 };
        expect(omit(obj, keysToOmit)).toEqual(expected);
    });

    test('should handle empty object', () => {
        const obj = {};
        const keysToOmit = ['a', 'b'];
        const expected = {};
        expect(omit(obj, keysToOmit)).toEqual(expected);
    });

    test('should handle empty keys array', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const keysToOmit = [];
        const expected = { a: 1, b: 2, c: 3 };
        expect(omit(obj, keysToOmit)).toEqual(expected);
    });
});