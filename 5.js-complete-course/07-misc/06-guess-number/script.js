/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    /*
        let mai = document.createElement("table");
        let inp = document.createElement("input");
        let bt = document.createElement("button");
        inp.setAttribute("position", "center");
        bt.setAttribute("position", "center");
        let doc = document.getElementById("target");
        bt.innerText = "Try";
        let i =np.insertCell(0);
        let j =bt.insertCell(0);
        mai.insertRow(inp);
        mai.insertRow(bt);
        doc.appendChild(mai);
    */

    let x = Math.floor(Math.random() * 100);
    let counter = 0;
    let inp;

    console.log(x);
    inp = prompt("Gues the number");

    while (inp !== x) {
        counter++;
        if (inp > x) {
            prompt("Lower...");
        } else if (inp < x) {
            prompt("Higher...");
        }else if (inp === x){
            prompt("Congratulations! You guest it from the " +counter + "time.") ;
    }


}

})();
