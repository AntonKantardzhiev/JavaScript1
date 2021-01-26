/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    var gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];
            //Getting the target
    let next = document.querySelector("img");
            //Setting the array counter
    let count = 0;
            //Assigning the button
    document.getElementById("next").addEventListener("click", function () {
            //Iterating
            count += 1;
            //Setting the loop
            if (count > gallery.length - 1) {
                count = 0;
            }
            //Assigning the value
            next.src = gallery[count];

    });

})();
