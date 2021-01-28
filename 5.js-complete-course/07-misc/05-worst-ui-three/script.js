/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    //Getting the target
    let val = document.querySelector("#target");
    //Getting the values
    let vl1 = document.getElementById("part-one");
    let vl2 = document.getElementById("part-two");
    let vl3 = document.getElementById("part-three");
    let vl4 = document.getElementById("part-four");
    //Getting the buttons
    let bt1 = document.getElementById("fix-part-one");
    let bt2 = document.getElementById("fix-part-two");
    let bt3 = document.getElementById("fix-part-three");
    let bt4 = document.getElementById("fix-part-four");

    //Calling the result
    function call() {
        val.innerText = "0" + vl1.value + vl2.value + vl3.value + vl4.value;
    }

    //Setting an anonymous function to rotate the top part
    setInterval((call));
    //Setting the random rotating slots
    let inTvl1 = setInterval(() => {
        vl1.value = Math.floor(Math.random() * (499 - 460) + 460);
    })
    let inTvl2 = setInterval(() => {
        vl2.value = Math.floor(Math.random() * (99 - 1) + 1);
        if (vl2.value < 10) {
            vl2.value = "0" + vl2.value;
        }
    })
    let inTvl3 = setInterval(() => {
        vl3.value = Math.floor(Math.random() * (99 - 1) + 1);
        if (vl3.value < 10) {
            vl3.value = "0" + vl3.value;
        }
    })
    let inTvl4 = setInterval(() => {
        vl4.value = Math.floor(Math.random() * (99 - 1) + 1);
        if (vl4.value < 10) {
            vl4.value = "0" + vl4.value;
        }
    })
    //Attaching the buttons to stop them
    bt1.onclick = () => {
        clearInterval(inTvl1);
    }
    bt2.onclick = () => {
        clearInterval(inTvl2);
    }
    bt3.onclick = () => {
        clearInterval(inTvl3);
    }
    bt4.onclick = () => {
        clearInterval(inTvl4);
    }
    call();

})();
