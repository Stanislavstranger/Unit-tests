const toPairs = require('../tasks/16_toPairs');

describe('toPairs', () => {
    test('should convert an object to an array of key-value pairs', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const expected = [['a', 1], ['b', 2], ['c', 3]];
        expect(toPairs(obj)).toEqual(expected);
    });

    test('should handle an empty object', () => {
        const obj = {};
        const expected = [];
        expect(toPairs(obj)).toEqual(expected);
    });

    test('should return a new array', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const result = toPairs(obj);
        expect(result).not.toBe(obj);
    });

    test('should not modify the original object', () => {
        const obj = { a: 1, b: 2, c: 3 };
        toPairs(obj);
        expect(obj).toEqual({ a: 1, b: 2, c: 3 });
    });

    test('should handle an object with null prototype', () => {
        const obj = Object.create(null);
        obj.a = 1;
        obj.b = 2;
        const expected = [['a', 1], ['b', 2]];
        expect(toPairs(obj)).toEqual(expected);
    });

    test('should handle an object with inherited properties', () => {
        function Parent() {
            this.parentProp = 'parent';
        }
        Parent.prototype.inheritedProp = 'inherited';

        const obj = new Parent();
        obj.childProp = 'child';

        const expected = [['parentProp', 'parent'], ['childProp', 'child']];
        expect(toPairs(obj)).toEqual(expected);
    });
});