/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    //Transferring the value to the target
    document.querySelector("#target").innerHTML = localStorage.clickN;
    //Getting the event
    document.getElementById("increment").addEventListener("click", ()=> {
        //Accessing the local storage.
        if (typeof (Storage) !== "undefined") {
            //If already existing
            if (localStorage.clickN) {
                //Increment by one
                localStorage.clickN = Number(localStorage.clickN) + 1;
            } else {
                //Else set to one
                localStorage.clickN = 1;
            }
            //Transferring the value to the target
            document.querySelector("#target").innerHTML = localStorage.clickN;
        }
    });
})();
