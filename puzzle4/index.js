
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
let circle = document.getElementById("circle");

circle.addEventListener("click", function() {
    setTimeout(doPageOrange, 4000);
     setTimeout(doNextPage, 7000);  

});
function doNextPage() {

  location.href = "https://dengian.github.io/ProjectOrange/puzzle5/index.html";
 }
 function doPageOrange() {
  /*  position: absolute;
  width: 100%;
  height: 100%;
  background-color:orange;*/
  let orange = document.getElementById("orange");
  orange.style.position = "absolute";
  orange.style.width = "100%";
  orange.style.height = "100%";
  orange.style.backgroundColor = "orange";
  
 }