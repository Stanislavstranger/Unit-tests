function pickBy(obj, predicate) {
    if (typeof obj !== 'object' || obj === null) {
        return {};
    }

    const result = {};

    for (const key in obj) {
        if (typeof obj[key] !== 'undefined' && predicate(obj[key], key, obj)) {
            result[key] = obj[key];
        }
    }

    return result;
}

module.exports = pickBy;
