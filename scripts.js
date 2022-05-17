function parpadear(){
    let cara = document.getElementById('cara');
    cara.style.opacity = 1;
    setTimeout(function(){
        cara.style.opacity = 0;
    }, 300);
}

function respirar(){
    let nariz = document.querySelector('.nariz');
    nariz.style.animationPlayState = 'running';
    setTimeout(function(){
        nariz.style.animationPlayState = 'paused';
    }, 4000);
}

   setInterval(parpadear, 3500);

