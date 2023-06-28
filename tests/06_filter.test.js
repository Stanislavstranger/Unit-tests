const filter = require('../tasks/06_filter');

describe('filter', () => {
    const users = [
        { 'user': 'barney', 'age': 36, 'active': true },
        { 'user': 'fred', 'age': 40, 'active': false }
    ];

    test('check if arguments are entered', () => {
        expect(filter(users, '5')).toBeTruthy();
    });

    test('should return an empty array if predicate is undefined', () => {
        expect(filter(users)).toEqual(users);
    });

    test('should return the slice of array if predicate is a function', () => {
        expect(filter(users, o => !o.active)).toEqual([{ user: "fred", age: 40, active: false }]);
    });

    test('should return the slice of array if predicate is an object', () => {
        expect(filter(users, { 'age': 36, 'active': true })).toEqual([{ user: "barney", age: 36, active: true }]);
    });

    test('should return the slice of array if predicate is a string', () => {
        expect(filter(users, 'active')).toEqual([{ user: "barney", age: 36, active: true }]);
    });
});