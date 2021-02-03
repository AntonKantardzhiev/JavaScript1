/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
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
           articles.forEach((article)=>{
               //Getting the Id
               window.lib.getComments(article.id,
                   //Getting the comments
                   (comments)=>{
                   article.comments = comments
               });
           })
            //Showing the list
            console.log(articles);
        })
    })
})();
