function zip(...arrays) {
    const maxLength = getMaxArrayLength(arrays);
    const result = [];

    for (let i = 0; i < maxLength; i++) {
        const values = [];
        for (let j = 0; j < arrays.length; j++) {
            const array = arrays[j];
            const value = i < array.length ? array[i] : undefined;
            values[values.length] = value;
        }
        result[result.length] = values;
    }

    return result;
}

function getMaxArrayLength(arrays) {
    let maxLength = 0;
    for (let i = 0; i < arrays.length; i++) {
        const array = arrays[i];
        if (array.length > maxLength) {
            maxLength = array.length;
        }
    }
    return maxLength;
}

module.exports = zip;
