"use strict";

var primoColor = document.getElementById("primo-color");
var $defaultBackgroundColor = document.getElementById("defaultBackgroundColor");
var buttonColor = document.getElementsByClassName("button-color");
$defaultBackgroundColor.addEventListener('change', function (event) {
  event.preventDefault();
  console.log(event.detail.hex8);
});