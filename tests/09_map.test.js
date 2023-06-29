const map = require('../tasks/09_map');

describe('map', () => {
    function square(n) {
        return n * n;
    }

    test('should return an array of values by running each element in collection thru iteratee if input data is an array and function', () => {
        expect(map([4, 8], square)).toEqual([16, 64]);
    });

    test('should return an array of values by running each element in collection thru iterate if input data is an object and function', () => {
        expect(map({ 'a': 4, 'b': 8 }, square)).toEqual([16, 64]);
    });

    test('should return an array of values by running each element in collection thru iterate if input data is an object and function', () => {
        var users = [
            { 'user': 'barney' },
            { 'user': 'fred' }
        ];
        expect(map(users, 'user')).toEqual(['barney', 'fred']);
    });
});