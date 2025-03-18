
let count = 0;
const h1 = document.getElementById("user");

        document.getElementById("btn1").addEventListener("click", () => {
            count++;
            h1.innerHTML = count;
        });

        document.getElementById("btn2").addEventListener("click", () => {
            count--;
            h1.innerHTML = count;
        });

        document.getElementById("btn3").addEventListener("click", () => {
            count *= 2;
            h1.innerHTML = count;
        });

        document.getElementById("btn4").addEventListener("click", () => {
            count /= 2;
            h1.innerHTML = count;
        });