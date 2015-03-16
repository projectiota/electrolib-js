
/*
 * Board Class
 */
function Board() {
    this.name = "Dummy";
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
