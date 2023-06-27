const dropWhile = require('../tasks/04_dropWhile');

describe('dropWhile', () => {
    const users = [
        { user: 'barney', active: false },
        { user: 'fred', active: false },
        { user: 'pebbles', active: true },
    ];

    test('check if arguments are entered', () => {
        expect(dropWhile(users, '5')).toBeTruthy();
    });

    test('should return an empty array if predicate is undefined', () => {
        expect(dropWhile(users)).toEqual([]);
    });

    test('should return the slice of array if predicate is a function', () => {
        expect(dropWhile(users, o => !o.active)).toEqual([{ user: 'pebbles', active: true }]);
    });

    test('should return the slice of array if predicate is an object', () => {
        expect(dropWhile(users, { user: 'barney', active: false })).toEqual([
            { user: 'fred', active: false },
            { user: 'pebbles', active: true },
        ]);
    });

    test('should return the slice of array if predicate is a string', () => {
        expect(dropWhile(users, 'active')).toEqual(users);
    });

    test('should return an empty array if argument is not an array', () => {
        expect(dropWhile('users')).toEqual([]);
    });
});
