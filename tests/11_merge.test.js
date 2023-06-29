const merge = require('../tasks/11_merge');

describe('merge', () => {
    test('should merge two objects', () => {
        const object1 = { a: 1, b: 2 };
        const object2 = { b: 3, c: 4 };
        const expected = { a: 1, b: 3, c: 4 };
        expect(merge(object1, object2)).toEqual(expected);
    });

    test('should merge nested objects', () => {
        const object1 = { a: { b: 2 } };
        const object2 = { a: { c: 3 } };
        const expected = { a: { b: 2, c: 3 } };
        expect(merge(object1, object2)).toEqual(expected);
    });

    test('should merge arrays', () => {
        const array1 = [1, 2];
        const array2 = [3, 4];
        const expected = [3, 4];
        expect(merge(array1, array2)).toEqual(expected);
    });

    test('should merge objects and arrays', () => {
        const object1 = { a: [1, 2] };
        const object2 = { a: [3, 4] };
        const expected = { a: [3, 4] };
        expect(merge(object1, object2)).toEqual(expected);
    });

    test('should handle empty objects', () => {
        const object1 = {};
        const object2 = { a: 1 };
        const expected = { a: 1 };
        expect(merge(object1, object2)).toEqual(expected);
    });

    test('should handle no arguments', () => {
        const expected = {};
        expect(merge()).toEqual(expected);
    });
});