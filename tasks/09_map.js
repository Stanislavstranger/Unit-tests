function map(collection, iteratee) {
    let result = [];
    if (collection.length === 0) {
        return false
    }

    if (typeof collection === 'object'
        && typeof collection.length === 'number'
        && typeof iteratee === 'function') {
        for (i = 0; i < collection.length; i++) {
            result[i] = iteratee(collection[i]);
        }
        return result;
    }

    if (typeof collection === 'object'
        && typeof iteratee === 'function') {
        for (const key in collection) {
            result[result.length] = iteratee(collection[key]);
        }
        return result;
    }

    if (typeof collection === 'object'
        && typeof iteratee === 'string') {
            for (let i = 0; i < collection.length; i++) {
                for (const key in collection[i]) {
                    if (key === iteratee) {
                        result[result.length] = collection[i][key];
                    }
                }
            }
        return result;
    }
}

module.exports = map;
