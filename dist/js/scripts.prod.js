"use strict";var primoColor=document.getElementById("primo-color"),$defaultBackgroundColor=document.getElementById("defaultBackgroundColor"),buttonColor=document.getElementsByClassName("button-color");$defaultBackgroundColor.color="#fbf330",$defaultBackgroundColor.addEventListener("change",function(o){o.preventDefault(),console.log(o.detail.hex8)});