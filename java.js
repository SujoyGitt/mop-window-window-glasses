document.addEventListener("pointermove",function (e) {
    let body = document.querySelector(".innerbox");
    let bubbles = document.createElement('span');
    bubbles.style.left = e.offsetX-25 + 'px';
    bubbles.style.top = e.offsetY-30 + 'px';
    body.appendChild(bubbles);
  
})
