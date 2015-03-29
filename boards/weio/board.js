
/*
 * Board Class
 */
function Board() {
    this.name = "weio";
};


/*
 * Board Methods
 */
 /** getName() */
 Board.prototype.getName = function() {
     console.log(this.name);
     return this.name;
 }

/** digitaWrite() */
Board.prototype.digitalWrite = function(pin, val) {
  console.log("digitalWrite(%d, %d)", pin, val);
};

/** digitalRead() */
Board.prototype.digitalRead = function(pin) {
  console.log("digitalRead(%d)", pin);
};

/** analogRead*() */
Board.prototype.analogRead = function(pin) {
    console.log("analogRead(%d)", pin);
}

/** attachINterrupt() */
Board.prototype.attachInterrupt = function(pin) {
}

/** detachInterrupt() */
Board.prototype.dettachInterrupt = function(pin) {
}

/** detachInterrupt() */
Board.prototype.getAvailableInterruptId = function() {
}

/** setPwmPeriod() */
Board.prototype.setPwmPeriod = function(period) {
}

/** pwmWrite() */
Board.prototype.pwmWrite = function(pin, value) {
}

/** stop() */
Board.prototype.stop = function() {
}

/*
 * Exports
 */
module.exports = Board;
