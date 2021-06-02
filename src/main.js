const fs = require("fs");
const path = require("path");
const terminal = require("./terminal/terminal.js");
const lex = require("./lexer/lex.js");
const execute = require("./executor/execute.js");

(async () => {
    try {

        if(process.argv.length < 3)
            throw new terminal.FatalError("Not enough arguments.");
        
        const scriptLoc = path.join(process.cwd(), process.argv[2]);
        const script = await fs.promises.readFile(scriptLoc, "utf-8");

        const lexed = lex(script);
        console.dir(lexed, { depth: null });
        execute(lexed);

    } catch(e) {

        if(e instanceof terminal.FatalError) e.display();
        else if(e instanceof Error)
            new terminal.FatalError(e.message).display();
        
    }
})();