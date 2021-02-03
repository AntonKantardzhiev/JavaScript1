/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    //Getting the button
    document.getElementById("run").addEventListener("click",  () => {

        //Getting the list
      window.lib.getPosts()
            .then(articles => {
                articles.forEach((article) => {
                    //Getting the item
                    window.lib.getComments(article.id)
                        .then(function (comments)  {
                        article.comments = comments;
                    })
                })
                //Showing the list
                console.log(articles);
            })
    })
})();
