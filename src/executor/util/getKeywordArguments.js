module.exports = function(amountParams, i, tokens) {
    const params = [];
    for(let i2 = i + 1; i2 <= amountParams + i; i2++) {
        params.push(tokens[i2]);
    }
    return params;
}