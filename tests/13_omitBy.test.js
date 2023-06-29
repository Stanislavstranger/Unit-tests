const omitBy = require('../tasks/13_omitBy');

describe('omitBy', () => {
    test('should omit properties that satisfy the predicate function', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const predicate = (value) => value === 2;
        const expected = { a: 1, c: 3 };
        expect(omitBy(obj, predicate)).toEqual(expected);
    });

    test('should return a new object', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const predicate = () => true;
        const result = omitBy(obj, predicate);
        expect(result).not.toBe(obj);
    });

    test('should not modify the original object', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const predicate = () => true;
        omitBy(obj, predicate);
        expect(obj).toEqual({ a: 1, b: 2, c: 3 });
    });

    test('should handle empty object', () => {
        const obj = {};
        const predicate = () => true;
        const expected = {};
        expect(omitBy(obj, predicate)).toEqual(expected);
    });

    test('should handle no properties satisfying the predicate', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const predicate = () => false;
        const expected = { a: 1, b: 2, c: 3 };
        expect(omitBy(obj, predicate)).toEqual(expected);
    });

    test('should handle properties satisfying the predicate in nested objects', () => {
        const obj = { a: 1, b: { c: 2, d: 3 }, e: { f: 4, g: 5 } };
        const predicate = (value) => value > 3;
        const expected = { a: 1, b: { c: 2, d: 3 }, e: { f: 4, g: 5 } };
        expect(omitBy(obj, predicate)).toEqual(expected);
    });
});