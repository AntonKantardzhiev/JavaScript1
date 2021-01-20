/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
                        //adding an event listener
    document.getElementById("run").addEventListener("click", function (){
                         //creating the random color
            let arr1 = [];
            for (let i = 0 ; i <= 3 ; i++){
                let num =Math.floor(Math.random() * 256);
                arr1.push(num);
            }
                        //assigning the background color
        document.body.style.backgroundColor =( "rgb(" + arr1[0] + "," + arr1[1] + "," + arr1[2] + ")") ;
    });

})();
