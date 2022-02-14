let triangle = document.getElementById("triangle");
console.log(triangle);
let width = 400;
 
triangle.addEventListener("click", function() {
    this.style.border = `solid ${width * 1.5}px` ;
    this.style.left = `${(window.innerWidth/2)-(width*1.5)}px` ;
    width *= 1.5;
    this.style.top = `${(window.innerHeight/2)-(width*1.5)}px` ;
    this.style.borderColor = "transparent transparent orange transparent";
    console.log(width)
    if (width >6800) {
        location.href = "http://127.0.0.1:5500/puzzle4/index.html";
    }
    
});