function take(arr, n = 1) {
    let result = [];
    let j = 0;

    if (typeof arr.length !== 'number'
        || arr.length === 0
        || n <= 0) {
        return [];
    }

    if (arr.length && n > 0) {
        for (let i = 0; i < n; i++) {
            result[j] = arr[i];
            j++;
        }
        return result;
    }

    if (typeof arr === 'string' && typeof n === 'string') {
        for (let i = 0; i < n; i++) {
            result[j] = arr.charAt(i);
            j++;
        }
        return result;
    }

    if (typeof n === 'object') {
        for (let i = 0; i < n; i++) {
            for (let key in n) {
                if (!(key in arr[i]) || n[key] !== arr[i][key]) {
                    matches = false;
                    break;
                }
            }
            if (!matches) {
                const result = [];
                for (let j = i; j < arr.length; j++) {
                    result[result.length] = arr[j];
                }
                return result;
            }
        }
    }
}

module.exports = take;
