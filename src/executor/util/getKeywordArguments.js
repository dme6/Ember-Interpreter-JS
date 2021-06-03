const terminal = require("../../terminal/terminal.js");

module.exports = function(amountArgs, i, tokens) {
    const args = [];
    for(let i2 = i + 1; i2 <= amountArgs + i; i2++) {
        args.push(tokens[i2]);
    }
    
    if(args.includes(undefined))
        throw new terminal.FatalError("Not enough arguments.");
    
    return args;
}