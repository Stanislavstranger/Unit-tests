function find(collection, predicate) {
    if (typeof predicate === 'function') {
        for (const item of collection) {
            if (predicate(item)) {
                return item;
            }
        }
        return undefined;
    }

    if (predicate === undefined) {
        return collection[0];
    }

    if (typeof predicate === 'boolean' ) {
        for (const item of collection) {
            if (item[key] === predicate) {
                return item;
            }
        }
        return undefined;
    }

    if (typeof predicate === 'object' && !predicate.length) {
        for (const item of collection) {
            let match = true;
            for (const key in predicate) {
                if (predicate[key] !== item[key]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                return item;
            }
        }
        return undefined;
    }

    if (typeof predicate === 'object'
        && predicate
        && typeof predicate.length == 'number') {
        const key = predicate[0];
        const value = predicate[1];
        for (const item of collection) {
            if (item[key] === value) {
                return item;
            }
        }
        return undefined;
    }

    if (typeof predicate === 'string') {
        for (const item of collection) {
            if (item[predicate]) {
                return item;
            }
        }
        return undefined;
    }

    return undefined;
}

module.exports = find;
