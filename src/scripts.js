const primoColor = document.getElementById("primo-color");
const $defaultBackgroundColor = document.getElementById("defaultBackgroundColor");
const buttonColor= document.getElementsByClassName("button-color");

$defaultBackgroundColor.color = '#fbf330'

$defaultBackgroundColor.addEventListener('change', (event) => {
    event.preventDefault();
    console.log(event.detail.hex8)
})