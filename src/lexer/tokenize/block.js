const token = require("../token/token.js");

let lastLens = [];

module.exports = function(tok, toks, resetTok, pushTok) {
    if(tok == "[") {
        lastLens.push(toks.length);
        resetTok();
    } else if(tok == "]") {
        const codeBlock = [];
        let temp = 0;
        for(let i = lastLens[lastLens.length - 1]; i < toks.length; i++) {
            codeBlock.push(toks[i]);
            temp++;
        }
        for(let i = 0; i < temp; i++) {
            toks.splice(lastLens[lastLens.length - 1], 1);
        }

        lastLens.pop();
        
        pushTok(new token.BlockToken(codeBlock));
        resetTok();
    }
}