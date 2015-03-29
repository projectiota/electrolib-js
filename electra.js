/** Supported boards */
var boards = ["dummy", "weio"];

/**
 * Electra class
 */
function Electra(board) {
    if (boards.indexOf(board) == -1) {
        console.log("Board `" + board + "` is not supported.");
        process.exit(1);
    }

    /** Import desired board */
    var Board = require("./boards/" + board + "/board.js");
    this.board = new Board();

    console.log("\n***\nBOARD: " + this.board.getName() + "\n***");
};

Electra.prototype.hello = function() {
    console.log("Hello World!");
};

/*
 * Board Methods
 */
Electra.prototype.digitalWrite = function(pin, val) {
    return this.board.digitalWrite(pin, val);
};

Electra.prototype.digitalRead = function(pin) {
    return this.board.digitalRead(pin);
};

Electra.prototype.analogRead = function(pin) {
    return this.board.analogRead(pin);
};

module.exports = Electra;
