var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");
var grey = document.getElementById("grey");
var yellow = document.getElementById("yellow");
var purple = document.getElementById("purple");
var orange = document.getElementById("orange");
var output = document.getElementById("output");

document.querySelectorAll("input").forEach(elem => elem.addEventListener("change",update));

function update(){
    if (red.value + green.value + blue.value + grey.value + yellow.value + purple.value + orange.value == 6){
        var stringOut = "";
        if(red.value > 0){
            stringOut += red.value + "1"
        }
        if(blue.value > 0){
            stringOut += blue.value + "2"
        }
        if(green.value > 0){
            stringOut += green.value + "3"
        }
        if(grey.value > 0){
            stringOut += grey.value + "4"
        }
        if(yellow.value > 0){
            stringOut += yellow.value + "5"
        }
        if(purple.value > 0){
            stringOut += purple.value + "6"
        }
        if(orange.value > 0){
            stringOut += orange.value + "7"
        }
        output.innerHTML = stringOut;
    }
    else{
        output = "Invalid number of orbs, there should be exactly six."
    }
}