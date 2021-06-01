const primitives = require("./primitives.js");

module.exports = function(tokens) {
    for(const t of tokens) {
        primitives(t);
    }
}