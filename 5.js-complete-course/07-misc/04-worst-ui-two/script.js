/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    let val = document.querySelector("#target");
    let bt1 = document.getElementById("part-one");
    let bt2 = document.getElementById("part-two");
    let bt3 = document.getElementById("part-three");
    let bt4 = document.getElementById("part-four");
    function call ()  {
        val.innerText = "0" + (bt1.innerText) + (bt2.innerText) + (bt3.innerText) + (bt4.innerText);
    }

        bt1.onclick = () => {
            if (bt1.innerText < 499) {
                bt1.innerText++;
                call();
            }
        }
        bt2.onclick = () => {
            if (bt2.innerText < 99) {
                bt2.innerText++;
                if (bt2.innerText < 10) {
                    bt2.innerText = "0" + bt2.innerText;
                }
                call();
            }
        }
        bt3.onclick = () => {
            if (bt3.innerText < 99) {
                bt3.innerText++;
                if (bt3.innerText < 10) {
                    bt3.innerText = "0" + bt3.innerText;
                }
                call();
            }
        }
        bt4.onclick = () => {
            if (bt4.innerText < 99) {
                bt4.innerText++;
                if (bt4.innerText < 10) {
                    bt4.innerText = "0" + bt4.innerText;
                }
                call();
            }
        }

    call();

})();
