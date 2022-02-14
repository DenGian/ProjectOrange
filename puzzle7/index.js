
var LIGHTS = document.getElementsByClassName("light");


function allOff() {
  for (var i=0; i<LIGHTS.length; i = i+1) {
    LIGHTS[i].classList.remove("on");
  }
}


function switchLight(lightNumber) {
  allOff();
  var light = LIGHTS[lightNumber];
  light.classList.add("on");
}
