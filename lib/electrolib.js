/**
 * Copyright (c) Project Iota
 *
 * Electrolib is licensed under an Apache license, version 2.0 license.
 * All rights not explicitly granted in the Apache license, version 2.0 are reserved.
 * See the included LICENSE file for more details.
 */


/** Supported boards */
var boards = ["dummy", "weio"];

/**
 * Electrolib class
 */
function Electrolib() {
    if (!(this instanceof Electrolib)) {
        console.log("Electrolib instance created"); 
        return new Electrolib();
    }
};


/*
 * Board Methods
 */
Electrolib.prototype.setBoard = function(board) {
    if (boards.indexOf(board) == -1) {
        console.log("Board `" + board + "` is not supported.");
        process.exit(1);
    }

    /** Import desired board */
    var Board = require("../boards/" + board + "/board.js");
    this.board = new Board();

    console.log("\n***\nBOARD: " + this.board.getName() + "\n***");
    return;
};

Electrolib.prototype.digitalWrite = function(pin, val) {
    return this.board.digitalWrite(pin, val);
};

Electrolib.prototype.digitalRead = function(pin) {
    return this.board.digitalRead(pin);
};

Electrolib.prototype.analogRead = function(pin) {
    return this.board.analogRead(pin);
};

module.exports = Electrolib;
