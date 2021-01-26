/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    //Get the directory
    const place = document.getElementById("target");
    //Add column
    let table = document.createElement("table");
    for(let x = 0 ;x < 10;x++){
        //Creating the column
        let row =table.insertRow(x);
        //Adding the rows
        let cell=row.insertCell(0);
        cell.innerText=(x+1);
    }
    place.appendChild(table);


})();
