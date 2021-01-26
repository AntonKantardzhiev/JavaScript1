/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    //Selecting the image
    let imag = document.querySelector("img");
    //Setting the sources
    let norm = imag.src ;
    let hov = imag.getAttribute("data-hover");
    //Creating the event functions
    imag.onmouseover=()=> {imag.src = hov};
    imag.onmouseout=()=>{imag.src = norm};

})();
