function filter(collection, predicate) {
    if (!predicate) {
        return collection;
    }

    if (typeof predicate === 'function') {
        const filtered = [];
        for (const item of collection) {
            if (predicate(item)) {
                filtered[filtered.length] = item;
            }
        }
        return filtered;
    }

    if (typeof predicate === 'object') {
        const filtered = [];
        for (const item of collection) {
            let match = true;
            for (const key in predicate) {
                if (predicate[key] !== item[key]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                filtered[filtered.length] = item;
            }
        }
        return filtered;
    }


    if (typeof predicate === 'string') {
        const filtered = [];
        for (const item of collection) {
            if (hasTruthyProperty(item, predicate)) {
                filtered[filtered.length] = item;
            }
        }
        return filtered;
    }

    function hasTruthyProperty(obj, key) {
        let value = obj;

        const keys = getKeys(key);
        let i = 0;

        while (i < keys.length) {
            const k = keys[i];
            if (isObject(value) && hasOwnProperty(value, k)) {
                value = value[k];
                i++;
            } else {
                return false;
            }
        }

        return Boolean(value);
    }

    function getKeys(key) {
        const keys = [];
        let currentKey = '';
        let inBracket = false;

        for (let i = 0; i < key.length; i++) {
            const char = key[i];
            if (char === '[') {
                inBracket = true;
            } else if (char === ']') {
                keys[keys.length] = currentKey;
                currentKey = '';
                inBracket = false;
            } else if (char === '.' && !inBracket) {
                keys[keys.length] = currentKey;
                currentKey = '';
            } else {
                currentKey += char;
            }
        }

        keys.push(currentKey);
        return keys;
    }

    function isObject(value) {
        return typeof value === 'object' && value !== null;
    }

    function hasOwnProperty(obj, key) {
        return !!obj[key];
    }

    return [];
}

module.exports = filter;
