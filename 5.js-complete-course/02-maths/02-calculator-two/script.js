/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            let x = [parseInt(document.getElementById("op-one").value), parseInt(document.getElementById("op-two").value)];

            switch ($btn.id){
                case "addition":
                    alert (x[0] + x[1]);
                    break;
                case "subtraction":
                    alert (x[0] - x[1]);
                    break;
                case "multiplication":
                    alert (x[0] * x[1]);
                    break;
                case "division":
                    alert (x[0] / x[1]);
                    break;
            }
        });
    });
})();
