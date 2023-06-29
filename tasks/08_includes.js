function includes(collection, value, fromIndex) {
    if (collection.length === 0) {
        return false
    }

    if (typeof collection === 'object'
        && typeof collection.length === 'number'
        && fromIndex === undefined) {
        for (i = 0; i < collection.length; i++) {
            if (collection[i] === value) {
                return true;
            }
        }
        return false;
    }

    if (typeof collection === 'object'
        && typeof collection.length === 'number'
        && typeof fromIndex === 'number') {
        for (i = 0; i < collection.length; i++) {
            if (collection[i] === value && i === fromIndex) {
                return true;
            }
        }
        return false;
    }

    if (typeof collection === 'object') {
        for (const key in collection) {
            if (collection[key] === value) {
                return true;
            }
        }
        return false;
    }

    if (typeof collection === 'string' && typeof value === 'string') {
        let match = 0;
        for (let i = 0; i < value.length; i++) {
            for (let j = 0; j < collection.length; j++) {
                if (value[i] === collection[j]) {
                    match++;
                }
                if (match === value.length) {
                    return true;
                }
            }
        }
        return false;
    }
    return false;

}

module.exports = includes;
