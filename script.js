"use strict";
console.log("uzduotys");

// 1. Suprogramuokite skriptą, kuris rastų didžiausią skaičių iš dviejų aprašytų.

document.getElementById("palyginti").addEventListener("click", function() {

let sk1, sk2, skdidesnis;
skdidesnis = 0;

sk1 = document.getElementById("sk1").value;
sk2 = document.getElementById("sk2").value;

if (sk1 > sk2) {
    document.getElementById("rez").value = "didesnis skaicius: " + sk1;
} else if (sk1 < sk2) {
    document.getElementById("rez").value = "didesnis skaicius: " + sk2;
} else {
    document.getElementById("rez").value = "skaiciai lygus";
}

});


// 2. Suprogramuokite skriptą, kuris rastų didžiausią skaičių iš trijų aprašytų.


document.getElementById("lyginam").addEventListener("click", function() {

 let sk3, sk4, sk5;

 sk3 = document.getElementById("sk3").value;
 sk4 = document.getElementById("sk4").value;
 sk5 = document.getElementById("sk5").value;

 document.getElementById("rez1").value = Math.max(sk3, sk4, sk5);

});
