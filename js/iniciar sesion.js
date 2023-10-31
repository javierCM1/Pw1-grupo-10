const formularioInicioSesion = document.getElementById('form-inicio_sesion');
let logueado = false;

formularioInicioSesion.addEventListener('submit', (event) => {
    event.preventDefault();

    const usuarioInput = document.getElementById('usuario')
    const passwordInput = document.getElementById('password')

    const usuario = usuarioInput.value.trim();
    const password =  passwordInput.value.trim()

    const passwordModificada = modificarContraseña(password);

    let arrayUsuariosRegistrados = JSON.parse(localStorage.getItem('users'));

    for (const usuarioRegistrado of arrayUsuariosRegistrados) {
        if (usuarioRegistrado.user === usuario && usuarioRegistrado.pass === passwordModificada) {
            logueado= true;
            window.location.href = 'vista-principal.html';
            break; 
        }else{
            alert("usuario no encontrado")
        }
    }

});

