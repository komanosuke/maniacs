let intros = document.getElementsByClassName('intro');

window.addEventListener("resize", ()=>{
    let windowSize = window.innerWidth;
    if (windowSize < 950) {
        for(let i = 0; i < intros.length; i++){
            intros[i].src = '/intro_resp' + String(i) + '.jpg';
        }
    } else {
        for(let i = 0; i < intros.length; i++){
            intros[i].src = '/intro' + String(i) + '.jpg';
        }
    }
});