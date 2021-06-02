module.exports = class {
    constructor(message) {
        this.message = message;
    }
    display() {
        console.log(`\x1b[38;5;196mFATAL ERROR: ${this.message}\x1b[0m`);
    }
}