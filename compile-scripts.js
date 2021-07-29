"use strict";

require("core-js/modules/es.array.concat.js");

function testingES8(texto1, texto2) {
  alert("".concat(texto1, "\n").concat(texto2));
}

var promisse = Promisse.resolve(); //Quando for fazer o babel novamente ele vai converter automaticamente
