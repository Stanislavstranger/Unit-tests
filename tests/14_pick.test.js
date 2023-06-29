const pick = require('../tasks/14_pick');

describe('pick', () => {
    test('should pick specified keys from object', () => {
        const obj = { a: 1, b: 2, c: 3, d: 4 };
        const keysToPick = ['a', 'c'];
        const expected = { a: 1, c: 3 };
        expect(pick(obj, keysToPick)).toEqual(expected);
    });

    test('should return a new object', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const keysToPick = ['a', 'c'];
        const result = pick(obj, keysToPick);
        expect(result).not.toBe(obj);
    });

    test('should not modify the original object', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const keysToPick = ['a', 'c'];
        pick(obj, keysToPick);
        expect(obj).toEqual({ a: 1, b: 2, c: 3 });
    });

    test('should handle non-existent keys', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const keysToPick = ['d', 'e'];
        const expected = {};
        expect(pick(obj, keysToPick)).toEqual(expected);
    });

    test('should handle empty object', () => {
        const obj = {};
        const keysToPick = ['a', 'b'];
        const expected = {};
        expect(pick(obj, keysToPick)).toEqual(expected);
    });

    test('should handle empty keys array', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const keysToPick = [];
        const expected = {};
        expect(pick(obj, keysToPick)).toEqual(expected);
    });
});