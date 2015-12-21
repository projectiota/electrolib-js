/*
 * Import create Electra class and create instance
 */
var Electrolib = require("./electrolib.js");
var ect = new Electrolib("dummy");

ect.hello();

ect.digitalWrite(21, 1);
ect.analogRead(32);
