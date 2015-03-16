/** Import desired board */
var Board = require("./boards/dummy/board.js");
var board = new Board();

console.log("\n***\nBOARD: " + board.getName() + "\n***");

/*
 * Import create Electra class and create instance
 */
var Electra = require("./electra.js");
var ect = new Electra(board);

ect.hello();

ect.digitalWrite(21, 1);
ect.analogRead(32);
