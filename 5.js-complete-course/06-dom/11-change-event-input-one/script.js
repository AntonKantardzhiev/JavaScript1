/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("pass-one").addEventListener("input", () => {
        //Getting the holders
        let count = document.getElementById("counter");
        let inp = document.getElementById("pass-one");

        // Setting the max. length of the string
        let attest = inp.value.substring(0, 10);
        let iterate = attest.length;

        // Setting the iterator
        if (iterate > 9) {
            inp.value = attest;
        }
        count.innerText = iterate + "/10";

    })


})();
