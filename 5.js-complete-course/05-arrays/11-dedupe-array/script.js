/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];
        //Adding an event listener
    document.getElementById("run").addEventListener("click", function () {

        // Filtering true the array and returning only the firs found from fruit of the same value
let newFruits = fruits.reduce((acc, curr)=> acc.includes(curr) ? acc : [...acc, curr], []);

        //Printing the result
        alert( newFruits );

    });

})();
