/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    //Getting the target and assigning it an empty value
    let target = document.getElementById("target");
    target.innerText = "";

    //Creating the new text
    let text = "As organizations large and small face unprecedented challenges, fostering the creativity necessary to develop truly breakthrough ideas has become more important than ever. But in order to live up to our creative potential, we must first understand how the creative process actually works.";
    let i = 0;

    //Calling the function on itself and setting random iteration
    let answer = () => {
        if (i < text.length) {
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(answer, (Math.floor(Math.random() * 100) + 100));
        }
    };
    answer();

})();
