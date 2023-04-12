class Text {
    constructor({text}) {
        this.text = text;
    }

    static async getText() {
        console.log('text')
    }
}

modules.exports = Text
