module.exports = class {
    constructor(message) {
        this.message = message;
    }
    display() {
        console.log(`FATAL ERROR: ${this.message}`);
    }
}