function omitBy(obj, predicate) {
    if (typeof obj !== 'object' || obj === null) {
        return {};
    }

    const result = {};

    for (const key in obj) {
        if (obj[key] && !predicate(obj[key])) {
            result[key] = obj[key];
        }
    }

    return result;
}

module.exports = omitBy;
