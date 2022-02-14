
    setTimeout(doPageOrange, 15000);
    setTimeout(doNextPage, 18000);    
   
function doNextPage() {

  location.href = "http://127.0.0.1:5500/puzzle7/index.html";
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
