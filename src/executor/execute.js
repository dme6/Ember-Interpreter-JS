const token = require("../lexer/token/token.js");
const handle = require("./handle/handle.js");
const inspect = require("./inspect/inspect.js");
const terminal = require("../terminal/terminal.js");

module.exports = function(tokens) {

    inspect(tokens);

    for(let i = 0; i < tokens.length; i++) {
        const cur = tokens[i];
        if(cur instanceof token.KeywordToken)
            handle.keywordToken(i, tokens);
            
    }
    
}
