/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

while ( true ) {
    let name = prompt("Please enter your name here!");
    let gender = prompt("What is your gender?");
    let town = prompt("In which Town do you leave?");
    let anser = confirm `Is this your name ${name}, your gender ${gender} and your current town of living ${town}` ;
    if (anser === true) {
        alert`Thank you for your donation to "The church of Juda" `;
        break;
    }else{
        alert `Let's try it again.`;
    }

}
})();
