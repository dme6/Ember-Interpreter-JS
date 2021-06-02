const terminal = require("../../terminal/terminal.js");

module.exports = function(amountParams, i, tokens) {
    const params = [];
    for(let i2 = i + 1; i2 <= amountParams + i; i2++) {
        params.push(tokens[i2]);
    }
    if(params < amountParams)
        throw new terminal.FatalError("Not enough parameters.");
    
    return params;
}