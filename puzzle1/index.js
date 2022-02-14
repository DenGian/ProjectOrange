let sun = document.getElementById("sun");
console.log(sun);
let width = 200;
let height = 200;
 
sun.addEventListener("click", function() {
    sun.style.width = `${width * 1.5}px` ;
    sun.style.height = `${height * 1.5}px`;
    width *= 1.5;
    height *= 1.5;
    if (width > screen.availWidth && height > screen.availHeight) {
        location.href = "http://127.0.0.1:5500/puzzle2/index.html";
    }
});
