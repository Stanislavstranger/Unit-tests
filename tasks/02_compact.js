function compact(array) {
    let result = [];
    let j = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i]) {
            result[j] = array[i];
            j++;
        }
    }
    return result;
}

module.exports = compact;