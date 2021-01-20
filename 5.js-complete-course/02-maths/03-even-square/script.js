/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {
    let answer = "";
      for (let x=1; x<=21; x++){
        let result = (x * x);
        if(result < 21){
            answer += result.toString() + ", ";
        }else{
            alert("The numbers are: "+ answer.slice(0,-2) + ".");
            break;
        }

      }

    });

})();
