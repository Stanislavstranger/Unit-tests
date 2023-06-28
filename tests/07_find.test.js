const find = require('../tasks/07_find');

describe('find', () => {
    const users = [
        { 'user': 'barney', 'age': 36, 'active': true },
        { 'user': 'fred', 'age': 40, 'active': false },
        { 'user': 'pebbles', 'age': 1, 'active': true }
    ];

    test('should return the first element of the collection if no predicate is defined', () => {
        expect(find(users)).toEqual({ 'user': 'barney', 'age': 36, 'active': true });
    });

    test('should return the slice of array if predicate is a function', () => {
        expect(find(users, function(o) { return o.age < 40; })).toEqual({ 'user': 'barney',  'age': 36, 'active': true });
    });

    test('should return the slice of array if predicate is an object', () => {
        expect(find(users, { 'age': 1, 'active': true })).toEqual({ 'user': 'pebbles', 'age': 1,  'active': true });
    });

    test('should return the slice of array if predicate is an array', () => {
        expect(find(users, ['active', false])).toEqual({ 'user': 'fred', 'age': 40, 'active': false });
    });

    test('should return the slice of array if predicate is a string', () => {
        expect(find(users, 'active')).toEqual({ 'user': 'barney',  'age': 36, 'active': true });
    });
})