/**
 * Copyright (c) Project Iota
 *
 * Mainflux server is licensed under an Apache license, version 2.0 license.
 * All rights not explicitly granted in the Apache license, version 2.0 are reserved.
 * See the included LICENSE file for more details.
 */

/*
 * Board Class
 */
function Board() {
    this.name = "dummy";
};


/*
 * Board Methods
 */
Board.prototype.digitalWrite = function(pin, val) {
  console.log("digitalWrite(%d, %d)", pin, val);
};

Board.prototype.digitalRead = function(pin) {
  console.log("digitalRead(%d)", pin);
};

Board.prototype.analogRead = function(pin) {
    console.log("analogRead(%d)", pin);
}

Board.prototype.getName = function() {
    console.log(this.name);
    return this.name;
}

/*
 * Exports
 */
module.exports = Board;
