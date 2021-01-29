/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    //Getting the button
    document.getElementById("run").addEventListener("click", ()=>{
        //Getting the list
        window.lib.getPosts((error, articles)=>{
            //Setting the error possibilities
            if (error !== null){
                alert("Oops!");
                alert(error);
            }
            //Showing the list
            console.log(articles);
        })
    })
})();
