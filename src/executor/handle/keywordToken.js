const token = require("../../lexer/token/token.js");
const virtual = require("../virtual.js");
const terminal = require("../../terminal/terminal.js");
const util = require("../util/util.js");

module.exports = function(i, tokens) {
    switch(tokens[i].name) {

        case "print": {
            const params = util.resolveVars(util.getKeywordArguments(1, i, tokens));
            console.log(params[0].value);
            break;
        }

        case "set": {
            const params = util.getKeywordArguments(2, i, tokens);
            if(params[0] instanceof token.VarToken) {
                virtual.memory[params[0].name] = params[1];
            }
            break;
        }

        case "free": {
            const params = util.getKeywordArguments(1, i, tokens);
            if(params[0] instanceof token.VarToken) {
                delete virtual.memory[params[0].name];
            }
            break;
        }

        case "debugMem": {
            console.log("--------------------------------------");
            console.log("Virtual Memory")
            console.log("--------------------------------------");
            console.dir(virtual.memory, { depth: null });
            console.log("--------------------------------------");
            break;
        }
        
        case "call": {
            const params = util.resolveVars(util.getKeywordArguments(1, i, tokens));
            require("../execute.js")(params[0].code);
            break;
        }

    }
}