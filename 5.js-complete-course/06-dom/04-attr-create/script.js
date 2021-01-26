/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    //Creating the empty image
    let image = document.createElement("img");
    //Getting the link
    let sor = document.getElementById("source").getAttribute("data-image");
    //Setting the link
    image.setAttribute("src", sor)
    //Positioning the element in the targeted spot
    document.getElementById("target").appendChild(image);
    //removing the source
    document.getElementById("source").remove();
})();
