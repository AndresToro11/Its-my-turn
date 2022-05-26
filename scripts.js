window.onscroll = function() {
    let y = window.scrollY;
    console.log(y);

    let menu = document.getElementById('menu');
    let links = document.getElementsByClassName('link-menu');


    if(y > 150 && y < 1880){
        menu.style.background = 'white';
        for(let i = 0; i < 3; i++){
            links[i].style.color = 'grey';
        }
    }
    else if(y > 900 && y < 1880){
    }
    else if(y > 1880){
        menu.style.background = 'rgb(52, 122, 235)';
        for(let i = 0; i < 3; i++){
            links[i].style.color = 'white';
        }

    }
    else{
        menu.style.background = 'none';
    }
  };