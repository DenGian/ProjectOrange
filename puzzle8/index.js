let switchClick = document.getElementById("switchClick");

switchClick.addEventListener("click", function() {
    setTimeout(doPageOrange, 4000);
     setTimeout(doNextPage, 7000);  

});
function doNextPage() {

  location.href = "https://dengian.github.io/ProjectOrange/puzzle9/index.html";
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