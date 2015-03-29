/*
 * Import create Electra class and create instance
 */
var Electra = require("./electra.js");
var ect = new Electra("dummy");

ect.hello();

ect.digitalWrite(21, 1);
ect.analogRead(32);
