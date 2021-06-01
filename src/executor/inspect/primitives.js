const tokenMod = require("../../lexer/token/token.js");
const terminal = require("../../terminal/terminal.js");

module.exports = function(t) {
    if(t instanceof tokenMod.PrimitiveToken) {
        if(t.type == "bool") {
            if(!(t.value == "true" || t.value == "false")) 
                throw new terminal.FatalError("Incorrect bool value.");
        } else if(t.type == "num") {
            if(isNaN(Number(t.value)))
                throw new terminal.FatalError("Incorrect num value.");
        }
    }
}