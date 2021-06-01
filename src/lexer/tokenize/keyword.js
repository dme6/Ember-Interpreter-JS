const token = require("../token/token.js");
const lconfig = require("../lexer.config.js");

module.exports = function(tok, resetTok, pushTok) {
    if(lconfig.keywords.includes(tok)) {

        pushTok(new token.KeywordToken(tok.substring(1)));
        resetTok();
        
    }
}