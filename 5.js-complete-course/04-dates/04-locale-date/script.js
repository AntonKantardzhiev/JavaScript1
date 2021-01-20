/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // Setting the full array of days and month names
    let day =new Date()
    let days = ["Sunday ","Monday ","Tuesday ","Wednesday ","Thursday ","Friday ","Saturday "];
    let d= days[day.getDay()];
    let months = [" January "," February "," March "," April "," May "," June "," July "," August "," September "," October "," November "," December "]
    let m = months[day.getMonth()];
    // Setting the rest of the parameters
    let d2 = day.getDate();
    let y = day.getFullYear();
    let h = day.getHours();
    let min = day.getMinutes();
    //Overwriting the snippet
document.getElementById("target").innerHTML = (d+d2+m+y+", "+h+"h"+min+" .");

})();
