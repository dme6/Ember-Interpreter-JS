const token = require("../token/token");
const lconfig = require("../lexer.config.js");

module.exports = function(tok, splitted, i, resetTok, pushTok) {
    if(tok.endsWith("!") &&
    splitted[i - tok.length] != ":" &&
    lconfig.termVals.includes(splitted[i + 1])) {

        pushTok(new token.VarToken(tok.substring(0, tok.length - 1)));
        resetTok();

    }
}