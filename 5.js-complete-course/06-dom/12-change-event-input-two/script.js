/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("pass-one").addEventListener("input", () => {
        //Getting the holders
        let inp = document.getElementById("pass-one").value;
        let val = document.getElementById("validity");

        // Matching the input
        if (inp.match("^(?=.*?\\d.*\\d)[a-zA-Z0-9]{8,}$")) {
            val.innerText = "ok";
        } else {
            val.innerText = "Not ok"
        }
    })

})();
