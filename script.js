const btn = document.querySelector(".btn");

function animation() {
    const box = document.querySelector(".box");
    let pos = 0;

    let id = setInterval(frame, 10)

    function frame() {
        if (pos === 300) {
            clearInterval();
        } else {
            pos++;
            box.style.top = pos + "px"
            box.style.left = pos + "px"
        }
    }
}

btn.addEventListener('click', animation)