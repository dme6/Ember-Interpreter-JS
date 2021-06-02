const token = require("../token/token.js");
const lconfig = require("../lexer.config.js");

let tempType = "";

module.exports = function(tok, splitted, i, inPrimitive, resetTok, pushTok) {
    if(tok.endsWith(":")) {

        inPrimitive(true);
        if(lconfig.termVals.includes(splitted[i + 1])) {
            if(tempType) {
                pushTok(new token.PrimitiveToken(tempType, tok.substring(0, tok.length - 1)));
                tempType = "";
                inPrimitive(false);
                resetTok();
            }
        } else if(lconfig.primitives.includes(tok.replace(":", ""))) {
            tempType = tok.replace(":", "");
            resetTok();
        }
        
    }
}