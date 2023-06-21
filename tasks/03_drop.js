function drop(array, slice) {
    let result = [];
    let j = 0;

    if (slice > array.length || slice === undefined && array.length === 0) {
        return result;
    }

    if (array.length && slice === undefined) {
        slice = 1;
    }

    if (array.length && slice >= 0) {
        for (let i = slice; i < array.length; i++) {
            result[j] = array[i];
            j++;
        }
        return result;
    }

    if (typeof array === 'string' && typeof slice === 'string') {
        for (let i = 0; i < array.length; i++) {
            result[j] = array.charAt(i);
            j++;
        }
        return result;
    }
}

module.exports = drop;
