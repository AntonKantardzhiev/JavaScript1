/* becode/javascript
 *
 * /07-misc/01
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
            //Getting the target and assigning it an empty value
        let targ = document.getElementById("target");
        targ.innerHTML ="";
              //Creating the new text
        let tex = "All i wanna say is Jump Jump Jump Jump Jump ";

             //Setting the iteration
        for (let i = 0; i < tex.length; i++) {
            let simb = document.createElement("span");
            simb.innerText = tex.charAt(i);
            simb.style.fontSize = Math.floor((Math.sin(i * .4) * 8) + 20) + "px" ;

            //Attaching the new text to the target
            targ.appendChild(simb);

        }
    }
)();
