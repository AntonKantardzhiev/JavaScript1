/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    // Clicking function
    document.getElementById("run").addEventListener("click", function () {
        // Getting the current time
        let time = new Date();
        let cDay = {
            d: time.getDate(),
            m: time.getMonth() + 1,
            y: time.getFullYear()
        };
        // Getting the birthday
        let yDay = {
            d: parseInt(document.getElementById("dob-day").value),
            m: parseInt(document.getElementById("dob-month").value),
            y: parseInt(document.getElementById("dob-year").value)
        };
        let age = cDay.y - yDay.y;
        let m = cDay.m - yDay.m;
        if (m < 0 || (m === 0 && cDay.d < yDay.d)) {
            age--;
        }
        alert("Your estamated age is : "+ age);
    });

})();
