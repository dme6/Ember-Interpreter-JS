const virtual = require("../virtual.js");
const token = require("../../lexer/token/token.js");
const terminal = require("../../terminal/terminal.js");

module.exports = function(vars) {

    const vals = [];

    for(variable of vars) {
        if(variable instanceof token.VarToken) {
            const varVal = virtual.memory[variable.name];
            if(varVal) vals.push(varVal);
            else throw new terminal.Error("Variable does not exist.");
        } else {
            vals.push(variable);
        }
    }

    return vals;

}