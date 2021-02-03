/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", async () => {
        //Fetching the stream
        let list = await fetch(
            "http://localhost:63342/script.js/JavaScript/JavaScript1/5.js-complete-course/_shared/api.json");
        let main = await list.json();
        let heroes = main["heroes"];
        //Getting the tamplate
        let item = document.getElementById("tpl-hero").content.querySelector('li');
        //Creating an empty object
        let temp;
        //Iterating over each and adding it
        for (let i = 0; i < main["heroes"].length; i++) {
            temp = item.cloneNode(true);
            temp.querySelector("strong.name").innerText = "Name - " + heroes[i].name;
            temp.querySelector("em.alter-ego").innerText = "alterego - " + heroes[i].alterEgo;
            temp.querySelector(".powers").innerText = "powers - " + heroes[i].abilities;
            //Adding it to the target
            document.getElementById("target").appendChild(temp);
        }
    })
})();
