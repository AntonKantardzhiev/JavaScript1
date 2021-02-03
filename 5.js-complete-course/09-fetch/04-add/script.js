/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {


async function xMan(){
    //Fetching the stream
    let list = await fetch(
        "http://localhost:63342/script.js/JavaScript/JavaScript1/5.js-complete-course/_shared/api.json");
    let main = await list.json();
    let heroes = main["heroes"];
    //Iterating over each and printing it
    for (let i = 0; i < main["heroes"].length; i++) {
        //Adding it to the target
        console.log(heroes[i]);
}

    document.getElementById("run").addEventListener("click",() => {
        //Acquiring the alter ego
        let nam = document.getElementById("hero-name").value;
        //Acquiring the power
        let alt = document.getElementById("hero-alter-ego").value;
        //Acquiring the name
        let pow = document.getElementById("hero-powers").value;


        //Creating the new one
        let check="([a-zA-Z0-9])";
        if (nam.match(check) && alt.match(check)&& pow.match(check)){
        let id1 =(main["heroes"].length +=1);
        let newest = {
            id : id1 ,
            name :nam,
            alterEgo :alt,
            abilities :[pow]
        }
            console.log(newest);
        }else{
            console.log("You must fill all values !")
        }
     }, )
}xMan();})();
