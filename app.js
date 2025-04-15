let container = document.getElementsByClassName("container")
let imgLamp = document.getElementById("lamp")
let button = document.getElementById("button")
let isOff = true
let clickFunk = function () {
    isOff = !isOff
    if (isOff) {
        imgLamp.setAttribute("src", "img/bulboff.gif")
        container[0].style.backgroundColor = "black"
        button.innerHTML = "on"
    } else {
        imgLamp.setAttribute("src", "img/bulbon.gif")
        container[0].style.backgroundColor = "white"
        button.innerHTML = "off"
    }
}