const token = require("../token/token.js");
let lastLen = 0;

module.exports = function(tok, toks, resetTok, pushTok) {
    if(tok == "[") {
        lastLen = toks.length;
        resetTok();
    } else if(tok == "]") {
        const codeBlock = [];
        let temp = 0;
        for(let i = lastLen; i < toks.length; i++) {
            codeBlock.push(toks[i]);
            temp++;
        }
        for(let i = 0; i < temp; i++) {
            toks.splice(lastLen, 1);
        }
        
        pushTok(new token.BlockToken(codeBlock));
        resetTok();
    }
}