const token = require("../token/token.js");
const lconfig = require("../../config.js");

module.exports = function(tok, resetTok, pushTok) {
    if(lconfig.keywords.includes(tok)) {

        pushTok(new token.KeywordToken(tok.substring(1)));
        resetTok();
        
    }
}