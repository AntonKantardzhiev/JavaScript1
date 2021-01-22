/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("run").addEventListener("click", function () {
                // Creating the array and setting the count of numbers
        let arrNum = [];
        let cnt = 10;
                //Creating the numbers
        for (let i = 0; i < cnt; i++) {
            let r = Math.floor(Math.random() * 100) + 1;
                //Assigning them to the id-selector
            let id = "n-" + (i + 1);
            let tab = document.getElementById(id);
            tab.innerText = (r);
            if (arrNum.indexOf(r) === -1) arrNum.push(r);

        }
                //Deciding the sum of them
        let arrMax = arrNum.reduce((a, b) => a + b, 0);
                //Sorting them by value
        arrNum = arrNum.sort(((a, b) => a - b));
                //Delivering Minimum
        document.getElementById("min").innerText = arrNum.shift();
                //Delivering Maximum
        document.getElementById("max").innerText = arrNum.pop();
                //Summing them
        document.getElementById("sum").innerText = arrMax;
                //Delivering Average
        document.getElementById("average").innerText = Math.floor(arrMax / cnt);

    });
})();
