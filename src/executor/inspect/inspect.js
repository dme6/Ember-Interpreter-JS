// This checks if the tokens are properly structured
// and ready for execution.

const primitives = require("./primitives.js");

module.exports = function(tokens) {
    for(const t of tokens) {
        primitives(t);
    }
}