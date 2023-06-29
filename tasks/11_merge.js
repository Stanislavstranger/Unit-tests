function merge(target, ...sources) {
    if (typeof target !== 'object') {
        return {};
    }

    if (sources.length === 0) {
        return target;
    }

    for (let i = 0; i < sources.length; i++) {
        const source = sources[i];

        if (typeof source !== 'object' || source === null) {
            continue;
        }

        for (const key in source) {
            if (source[key]) {
                const sourceValue = source[key];
                const targetValue = target[key];

                if (typeof sourceValue === 'object' && sourceValue !== null) {
                    if (typeof targetValue === 'object' && targetValue !== null) {
                        merge(targetValue, sourceValue);
                    } else {
                        target[key] = merge({}, sourceValue);
                    }
                } else {
                    target[key] = sourceValue;
                }
            }
        }
    }

    return target;
}

module.exports = merge;
