const fs = require("fs");
const path = require("path");
const terminal = require("./terminal/terminal.js");
const lex = require("./lexer/lex.js");
const execute = require("./executor/execute.js");

const scriptLoc = path.join(process.cwd(), process.argv[2]);

(async () => {

    const readL = new terminal.Loading(80, "Reading script...");
    readL.start();
    const script = await fs.promises.readFile(scriptLoc, "utf-8");
    readL.stop();

    const lexed = lex(script);
    console.dir(lexed, { depth: null });
    execute(lexed);

})();