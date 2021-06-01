// Makes sure everything is properly written before execution.

const primitives = require("./primitives.js");

module.exports = function(tokens) {
    for(const t of tokens) {
        primitives(t);
    }
}