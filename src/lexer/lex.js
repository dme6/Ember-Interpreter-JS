const tokenize = require("./tokenize/tokenize.js");
const lconfig = require("../config.js");

module.exports = function(script) {
    
    const splitted = script.split("");
    console.log(splitted);

    let tok = "";
    const toks = [];
    let inPrimitive = false;

    function resetTok() { tok = "" }
    function pushTok(tok) { toks.push(tok) }
    function setInPrimitive(bool) { inPrimitive = bool; }

    for(let i = 0; i < splitted.length; i++) {
       const cur = splitted[i];
       tok += cur;
       
       tokenize.primitive(tok, splitted, i, setInPrimitive, resetTok, pushTok);
       if(!inPrimitive) {
           tokenize.keyword(tok, resetTok, pushTok);
           tokenize.var(tok, splitted, i, resetTok, pushTok);
           tokenize.block(tok, toks, resetTok, pushTok);
       }

       if(lconfig.termVals.includes(tok)) resetTok();

    }

    return toks;

}