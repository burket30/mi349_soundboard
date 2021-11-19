var audio1 = new Audio("modem.wav");
var audio2 = new Audio("dot_matrix.wav");
var audio3 = new Audio("pant.wav");
var passiveAudio = new Audio("door_creak.wav");


document.getElementById("b1").addEventListener("click", function(){audio1.play()});
document.getElementById("b2").addEventListener("click", function(){audio2.play()});
document.getElementById("b3").addEventListener("click", function(){audio3.play()});

document.getElementById("b1").addEventListener("mouseover", function(){passiveAudio.play()});
document.getElementById("b2").addEventListener("mouseover", function(){passiveAudio.play()});
document.getElementById("b3").addEventListener("mouseover", function(){passiveAudio.play()});