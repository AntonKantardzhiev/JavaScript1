/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    Array.from(document.querySelectorAll("button")).forEach(function($btn) {
        $btn.addEventListener("click", function() {


            switch ($btn.id){
                case "red":
                    document.body.style.backgroundColor= "#aa0000";
                    break;
                case "green":
                    document.body.style.backgroundColor = "#2fff00";
                    break;
                case "yellow":
                    document.body.style.backgroundColor = "#ffd700";
                    break;
                case "blue":
                    document.body.style.backgroundColor = "#0017ff";
                    break;
            }
        });
    });
})();
