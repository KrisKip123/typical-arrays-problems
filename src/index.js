
exports.min = function min (array) {
    if (!array || !array.length) {
        return 0;
    }
    array.sort((a,b) => a - b);
    return array[0];
}

exports.max = function max (array) {
    if (!array || !array.length) {
        return 0;
    }
    return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
    if (!array || !array.length) {
        return 0;
    }
    let result = array.reduce((sum, current) => sum + current, 0)/array.length;
    return result;
}
