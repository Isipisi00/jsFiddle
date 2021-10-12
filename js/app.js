const bloque = document.querySelectorAll('.bloque')
const titulo = document.querySelectorAll('.titulo');

titulo.forEach( (listH2, i) => {
    /*
    titulo[i].addEventListener('click', (e)=>{
        bloque.forEach((listBloque, i)=>{
            bloque[i].classList.remove('activo')
        })

        bloque[i].classList.add('activo')
        e.target;
        
    })
    */

    titulo[i].addEventListener('click', ()=>{
        if(bloque[i].classList.contains('activo')){
            bloque[i].classList.remove('activo')
        }else{
            bloque[i].classList.add('activo')
        }
    })

});