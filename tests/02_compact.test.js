const compact = require('../tasks/02_compact');

describe('compact', () => {
    beforeEach(() => {
        array = [false, 42, 0, '', true, null, 'hello'];
    });

    test('should be defined', () => {
        expect(compact).toBeDefined();
    });

    test('should remove falsy values from array', () => {
        expect(compact(array)).toEqual([42, true, 'hello']);
    });

    test('should NOT contain falsy values', () => {
        expect(compact(array)).not.toContain(false);
        expect(compact(array)).not.toContain(0);
        expect(compact(array)).not.toContain('');
        expect(compact(array)).not.toContain(null);
    });

    test('should return an empty array for an empty input array', () => {
        expect(compact([])).toEqual([]);
    });

    test('should return an empty array if input array contains only falsy values', () => {
        const falsyArray = [false, null, undefined, 0, ''];
        expect(compact(falsyArray)).toEqual([]);
    });

    test('should return the same array if input array contains only truthy values', () => {
        const truthyArray = [42, 'hello', {}, true];
        expect(compact(truthyArray)).toEqual(truthyArray);
    });

    test('should not modify the input array and return a new array', () => {
        const originalArray = array;
        const result = compact(originalArray);
        expect(result).toEqual([42, true, 'hello']);
        expect(originalArray).toEqual([false, 42, 0, '', true, null, 'hello']);
    });
});