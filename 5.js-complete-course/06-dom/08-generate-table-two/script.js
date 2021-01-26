/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
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

    for (let i = 0; i < 10; i++) {
        //Adding the rows
        let row = table.insertRow(i);

        for (let j = 0; j < 10; j++) {
            //Adding the columns
            let cell = row.insertCell(j);

            cell.innerText = ((j + 1) * (i + 1));
        }
    }
    place.appendChild(table);


})();

