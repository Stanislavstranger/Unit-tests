function omit(obj, keys) {
    if (typeof obj !== 'object' || obj === null) {
        return {};
    }

    const result = {};

    for (const keyObj in obj) {
        let omitKey = false;

        for (let j = 0; j < keys.length; j++) {
            if (keyObj === keys[j]) {
                omitKey = true;
                break;
            }
        }

        if (!omitKey) {
            result[keyObj] = obj[keyObj];
        }
    }

    return result;
}


module.exports = omit;
