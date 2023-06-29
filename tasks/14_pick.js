function pick(obj, keys) {
    if (typeof obj !== 'object' || obj === null) {
        return {};
    }

    const result = {};

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (typeof obj[key] !== 'undefined') {
            result[key] = obj[key];
        }
    }

    return result;
}

module.exports = pick;
