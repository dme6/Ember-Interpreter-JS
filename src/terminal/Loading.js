module.exports = class {

    constructor(spinSpeed = 80, text = "Loading...") {
        this.chars = ["|", "/", "-", "\\"];
        this.spinSpeed = spinSpeed;
        this.text = text;
    }

    start() {
        let i = 0;
        this.iv = setInterval(() => {
            console.clear();
            if(i > 3) i = 0;
            console.log(` ${this.chars[i]} ${this.text}`);
            i++;
        }, this.spinSpeed);
    }

    stop() {
        if(this.iv) {
            clearInterval(this.iv);
        }
    }

}