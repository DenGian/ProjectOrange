let bas = document.getElementById("bas");
let counter = 0;
let goal = 7;

bas.addEventListener("click", function() {
    if (counter >= goal) {
        location.href = "https://dengian.github.io/ProjectOrange/puzzle8/index.html";
       // alert('gewonnen');
        //stuur naar volgende puzzel
    }
    else{
        counter++;
        //log verstoppen / verwijdern
        console.log(counter + " aantal keer geklikt");
    }

});