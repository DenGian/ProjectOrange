let triangle = document.getElementById("triangle");
console.log(triangle);
let width = 400;
let height = 200;
 
triangle.addEventListener("click", function() {
    this.style.border = `solid ${width * 1.5}px` ;
    this.style.top = ` ${width * -1.5}px` ;
    this.style.borderColor = "transparent transparent orange transparent";
    width *= 1.5;
    height *= 1.5;
});
