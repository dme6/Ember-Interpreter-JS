module.exports = class {
    constructor(message) {
        this.message = message;
    }
    display() {
        console.log(`ERROR: ${this.message} Proceeding with execution.`);
    }
}