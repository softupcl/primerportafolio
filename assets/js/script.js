const formulario = document.querySelector('form');

console.log(formulario);

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    
    const email = document.querySelector('#email').value
    const nombre = document.querySelector('#nombre').value
    const mensaje = document.querySelector('#mensaje').value

    alert(`Su mensaje desde el email: ${email} ha sido enviado correctamente`);

    formulario.reset();

});
