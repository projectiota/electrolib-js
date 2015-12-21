/**
 * Copyright (c) Project Iota
 *
 * Electrolib is licensed under an Apache license, version 2.0 license.
 * All rights not explicitly granted in the Apache license, version 2.0 are reserved.
 * See the included LICENSE file for more details.
 */

var e = require('../').Electrolib();

e.setBoard("dummy");

e.digitalWrite(21, 1);
e.analogRead(32);
