const bloque = document.querySelectorAll('.bloque')
const titulo = document.querySelectorAll('.titulo');

/*titulo.forEach( (listH2, i) => {

    titulo[i].addEventListener('click', ()=>{
        bloque[i].classList.add('activo')
    })

});*/

titulo.forEach((listH2, i)=>{
    bloque[i].classList.remove('activo', 'esconder')
    titulo[i].addEventListener('click', ()=>{
        if(bloque[i].classList.contains('activo')){
            bloque[i].classList.remove('activo')
            bloque[i].classList.add('esconder')
        }else{
            bloque[i].classList.remove('esconder')
            bloque[i].classList.add('activo')
        }
    })
})


