
const body = document.querySelector('body');
const colorcopybtn = document.querySelector('#color');
const btn = document.querySelector('.btn');
const copyBtn = document.querySelector(".copy-btn");

btn.addEventListener('click', () => {
    let color = Math.floor(Math.random() * 16777216).toString(16);
    body.style.backgroundColor = "#" + color;
    colorcopybtn.innerHTML = "#" + color;
     navigator.clipboard.writeText( "#" + color)   
});
