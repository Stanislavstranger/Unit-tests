const pickBy = require('../tasks/15_pickBy');

describe('pickBy', () => {
    test('should pick properties from object that pass the predicate function', () => {
        const obj = { a: 1, b: 2, c: 3, d: 4 };
        const predicate = (value) => value % 2 === 0;
        const expected = { b: 2, d: 4 };
        expect(pickBy(obj, predicate)).toEqual(expected);
    });

    test('should return an empty object if no properties pass the predicate function', () => {
        const obj = { a: 1, b: 3, c: 5 };
        const predicate = (value) => value % 2 === 0;
        const expected = {};
        expect(pickBy(obj, predicate)).toEqual(expected);
    });

    test('should return a new object', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const predicate = (value) => value > 1;
        const result = pickBy(obj, predicate);
        expect(result).not.toBe(obj);
    });

    test('should not modify the original object', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const predicate = (value) => value > 1;
        pickBy(obj, predicate);
        expect(obj).toEqual({ a: 1, b: 2, c: 3 });
    });

    test('should handle an empty object', () => {
        const obj = {};
        const predicate = (value) => value > 1;
        const expected = {};
        expect(pickBy(obj, predicate)).toEqual(expected);
    });

    test('should handle an empty predicate function', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const predicate = () => true;
        const expected = { a: 1, b: 2, c: 3 };
        expect(pickBy(obj, predicate)).toEqual(expected);
    });
});