function chunk(array, chunkSize) {
    if (chunkSize === 0 || chunkSize === undefined) {
        return array;
    }

    if (!array.length
        || typeof array === 'number'
        || typeof array === 'string'
        || (chunkSize < 0)
        || typeof chunkSize === 'string'
        || (!array && !chunkSize)) {
        return;
    }

    if (chunkSize % 2 !== 0) {
        chunkSize = Math.ceil(chunkSize);
    }

    const result = [];
    const length = array.length;

    for (let i = 0; i < length; i += chunkSize) {
        const chunk = [];
        const endIndex = Math.min(i + chunkSize, length);

        for (let j = i; j < endIndex; j++) {
            chunk[chunk.length] = array[j];
        }

        result[result.length] = chunk;
    }

    return result;
}

module.exports = chunk;
