function Electra(board) {
    this.board = board;
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
