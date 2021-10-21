const bloque = document.querySelectorAll('div.bloque');
var titulo = document.querySelectorAll('.titulo');

titulo.forEach( (listH2, i) => {
    
    titulo[i].addEventListener('click', ()=>{


        bloque[i].classList.toggle('activo');
    })

});

