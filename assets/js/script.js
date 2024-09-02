const formulario = document.querySelector('#contacto');
const formNovedades = document.querySelector('#novedades');


formulario.addEventListener('submit', function(event){
    event.preventDefault();
    
    const email = document.querySelector('#email').value
    const nombre = document.querySelector('#nombre').value
    const mensaje = document.querySelector('#mensaje').value

    const confirmacion = document.querySelector('#confirmacion');
    confirmacion.innerText = "Su mensaje ha sido enviado correctamente"

    
    formulario.reset();

});


