function dropWhile(arr, predicate) {
    if (typeof arr !== 'object' || !arr || typeof arr.length !== 'number') {
        return [];
    }

    if (!predicate) {
        return [];
    }

    if (typeof predicate === 'function') {
        for (let i = 0; i < arr.length; i++) {
            if (!predicate(arr[i])) {
                return sliceArray(arr, i);
            }
        }
    }

    function sliceArray(arr, startIndex) {
        const length = arr.length - startIndex;
        const sliced = new Array(length);
        let j = 0;

        for (let i = startIndex; i < arr.length; i++) {
            sliced[j] = arr[i];
            j++;
        }

        return sliced;
    }

    if (typeof predicate === 'object') {
        for (let i = 0; i < arr.length; i++) {
            let matches = true;
            for (let key in predicate) {
                if (!(key in arr[i]) || predicate[key] !== arr[i][key]) {
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

    if (typeof predicate === 'object' || predicate || typeof predicate.length == 'number') {
        for (let i = 0; i < arr.length; i++) {
            let matches = true;
            for (let j = 0; j < predicate.length; j++) {
                if (arr[i][predicate[j][0]] !== predicate[j][1]) {
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

    if (typeof predicate === 'string') {
        for (let i = 0; i < arr.length; i++) {
            if (!arr[i][predicate]) {
                const result = [];
                for (let j = i; j < arr.length; j++) {
                    result[result.length] = arr[j];
                }
                return result;
            }
        }
    }

    return [];
}

module.exports = dropWhile;
