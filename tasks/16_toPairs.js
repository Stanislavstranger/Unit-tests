function toPairs(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return [];
    }

    const pairs = [];

    for (const key in obj) {
        if (typeof obj[key] !== 'undefined' && isPropertyInherited(obj, key)) {
            pairs[pairs.length] = [key, obj[key]];
        }
    }

    return pairs;

    function isPropertyInherited(obj, prop) {
        const prototype = obj.__proto__;
        if (prototype !== null && typeof prototype !== 'undefined') {
            if ((typeof prototype[prop] === 'undefined') && obj[prop] !== prototype[prop]) {
                return true;
            }
            return false;
        }
        return true;
    }
}

module.exports = toPairs;
