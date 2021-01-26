/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("run").addEventListener("click", function () {
        //Getting the values
        let pass1 = document.getElementById("pass-one").value;
        let pass2 = document.getElementById("pass-two").value;

        //Selecting the borders
        let border1 = document.getElementById("pass-one").style.borderColor;
        let border2 = document.getElementById("pass-two").style.borderColor;
        if (pass1 !== pass2) {

            //Changing the color
            border1 = "red";
            border2 = "red";

        } else {
            alert("Your password is correct.");
        }
    });

})();
