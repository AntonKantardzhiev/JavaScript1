/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    //Setting the button
    document.getElementById("run").addEventListener("click", function () {
        let year = parseInt(document.getElementById("year").value);
        //Calculating the days
        function numberOfFridayThe13thsIn(year) {
            let count = [];
            for (let month = 0; month < 12; month++) {
                let d = new Date(year, month, 13);
                let day = d.getDay();
                if (day === 5) {
                    count.push(month + 1);
                }
            }
            return count;
        }
        //Setting the months
        let months = [" January ", " February ", " March ", " April ", " May ", " June ", " July ", " August ", " September ", " October ", " November ", " December "]
        // alert([(numberOfFridayThe13thsIn(j))]);
        let n = numberOfFridayThe13thsIn(year).sort((a, b)=> a - b);







})
})
();
