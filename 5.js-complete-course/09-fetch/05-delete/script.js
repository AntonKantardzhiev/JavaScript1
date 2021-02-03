/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {


    document.getElementById("run").addEventListener("click", async () => {
        //Fetching teh array
        let list = await fetch(
            "http://localhost:63342/script.js/JavaScript/JavaScript1/5.js-complete-course/_shared/api.json");
        let main = await list.json();
        let heroes = main["heroes"];

        //Iterating over each and printing it
        for (let i = 0; i < main["heroes"].length; i++) {
            //Checking for equality
            if (heroes[i].id === parseInt(document.querySelector("#hero-id").value)) {
                //Handling the results
                main["heroes"].splice(i,1);
                console.log(heroes)
            }
        }
    })

})();
