class usuarios {

    constructor(user, pass, passRep, fecha, email) {
        this.user = user;
        this.pass = pass;
        this.passRep = passRep;
        this.fecha = fecha;
        this.email = email;
        this.premium = false;
        this.logueado = false;
        this.cancionesFav = [];
        this.listaAlbumsFav = [];
    }

}

let arrayUsuarios = JSON.parse(localStorage.getItem('users')) || [];
const formulario = document.querySelector('.formulario');


const usuarioInput = document.querySelector('.user');
const passwordInput = document.querySelector('.password');
const passwordRepetidaInput = document.querySelector('.password-repetido');
const fechaInput = document.querySelector('.date');
const emailInput = document.querySelector('.email');


function registrarUsuario(event) {
    event.preventDefault();
    const contraseñaOriginal = desmodificarContraseña("34512");
    console.log(contraseñaOriginal);  
    const usuario = usuarioInput.value.trim();
    const password = passwordInput.value.trim();
    const passwordRepetida = passwordRepetidaInput.value.trim();
    const fecha = fechaInput.value;
    const email = emailInput.value.trim();

    try {

        if (password !== passwordRepetida) {
            throw new Error("Las contraseñas no coinciden");
        }

        if (arrayUsuarios.some((user) => user.user === usuario)) {
            throw new Error("Usuario en uso");
        }
         
        const passwordModificada = modificarContraseña(password);
        const passwordRepetidaModificada = modificarContraseña(passwordRepetida);

        const UsuarioRegistrado = new usuarios(usuario, passwordModificada, passwordRepetidaModificada, fecha, email);

        arrayUsuarios.push(UsuarioRegistrado);

        const userJSON = JSON.stringify(arrayUsuarios);
        localStorage.setItem('users', userJSON);

        

        window.location.href = 'index.html'
    } catch (error) {
        alert(error.message);
    }
}

function actualizarInformacionUsuario() {
    const usuario = usuarioInput.value.trim();
    const password = passwordInput.value.trim();
    const passwordRepetida = passwordRepetidaInput.value.trim();
    const fecha = fechaInput.value;
    const email = emailInput.value.trim();

    try {
        if (password !== passwordRepetida) {
            throw new Error("Las contraseñas no coinciden");
        }

        const passwordModificada = modificarContraseña(password);
        const indexUsuario = arrayUsuarios.findIndex((usuario) => usuario.logueado);

        if (indexUsuario !== -1) {
            arrayUsuarios[indexUsuario].user = usuario;
            arrayUsuarios[indexUsuario].pass = passwordModificada;
            arrayUsuarios[indexUsuario].passRep = passwordModificada;
            arrayUsuarios[indexUsuario].fecha = fecha;
            arrayUsuarios[indexUsuario].email = email;
            localStorage.setItem('users', JSON.stringify(arrayUsuarios));

            window.location.href = 'vista-principal.html';
        } else {
            throw new Error("Usuario no encontrado para actualizar.");
        }
    } catch (error) {
        alert(error.message);
    }
}



function mostrarConfirmacion() {
    const modal = document.getElementById("confirm-dialog");
    modal.style.display = "block";

    const confirmarSi = document.getElementById("confirm-yes");
    const confirmarNo = document.getElementById("confirm-no");

    confirmarSi.addEventListener("click", function() {
        eliminarUsuario();
        modal.style.display = "none";
    });

    confirmarNo.addEventListener("click", function() {
        modal.style.display = "none";
    });
}
 
function desmodificarContraseña(contraseñaModificada) {
    const longitud = contraseñaModificada.length;
    const mitad = Math.ceil(longitud / 2);
    const segundaMitad = contraseñaModificada.slice(0, mitad);
    const primeraMitad = contraseñaModificada.slice(mitad);
    const contraseñaOriginal = primeraMitad + segundaMitad;
    return contraseñaOriginal;
}

function modificarContraseña(password) {

    const longitud = password.length;
    const mitad = Math.floor(longitud / 2);
    const primeraMitad = password.slice(0, mitad);
    const segundaMitad = password.slice(mitad);
    const contraseñaModificada = segundaMitad + primeraMitad;
    return contraseñaModificada;

}

const cerrarSesion = document.getElementById('cerrarSesion');

cerrarSesion.addEventListener('click', (event) => {
    event.preventDefault();

    for (const usuarioRegistrado of arrayUsuarios) {

        if (usuarioRegistrado.logueado) {
            usuarioRegistrado.logueado = false;
            localStorage.setItem('users', JSON.stringify(arrayUsuarios));
            window.location.href = 'index.html';
            break;
        }
    }

})

const usuarioInfoElement = document.querySelector('.usuario-info');
const volverHome = document.getElementById('volverHome');
const eliminarUsuarioMostrar = document.getElementById('eliminarUsuario');
const botonGuardar = document.getElementById('botonGuardarCrear');

const usuarioLogueado = arrayUsuarios.find((usuario) => usuario.logueado);

if (usuarioLogueado) {
    eliminarUsuarioMostrar.style.display = 'block';
    usuarioInfoElement.style.display = 'flex';
    volverHome.href = 'vista-principal.html';
    usuarioInput.value = usuarioLogueado.user;
    const passwordDesModificada = desmodificarContraseña(usuarioLogueado.pass);
    const passwordRepetidaDesModificada = desmodificarContraseña(usuarioLogueado.passRep);
    passwordInput.value = passwordDesModificada;
    passwordRepetidaInput.value = passwordRepetidaDesModificada;
    fechaInput.value = usuarioLogueado.fecha;
    emailInput.value = usuarioLogueado.email;
    botonGuardar.textContent = 'Guardar';
} else {
    eliminarUsuarioMostrar.style.display = 'none';
    usuarioInfoElement.style.display = 'none';
    volverHome.href = 'index.html';
    volverHome.textContent = 'volver';
    botonGuardar.textContent = 'Crear';
}
function eliminarUsuario() {

    const usuario = usuarioInput.value.trim();
    const password1 = passwordInput.value.trim();
    const passwordRepetida1 = passwordRepetidaInput.value.trim();
    const fecha = fechaInput.value;
    const email = emailInput.value.trim();
    let usuarioEncontrado = false;

    for (let i = 0; i < arrayUsuarios.length; i++) {
     
        if (arrayUsuarios[i].user === usuario &&
            arrayUsuarios[i].pass === modificarContraseña(password1) &&
            arrayUsuarios[i].fecha === fecha &&
            arrayUsuarios[i].passRep === modificarContraseña(passwordRepetida1) &&
            arrayUsuarios[i].email === email) {

            arrayUsuarios.splice(i, 1);
            usuarioEncontrado = true;
            break;
        }
    }

    if (usuarioEncontrado) {
        localStorage.setItem('users', JSON.stringify(arrayUsuarios));
        usuarioInput.value = '';
        passwordInput.value = '';
        window.location.href = 'Registrar.html';
    } else {
        alert("Usuario o contraseña incorrectos. No se pudo eliminar el usuario.");
    }

}

botonGuardarCrear.addEventListener('click', (event) => {
    event.preventDefault();

    const usuarioLogueado = arrayUsuarios.find((usuario) => usuario.logueado);

    if (usuarioLogueado) {
        actualizarInformacionUsuario();
    } else {
        registrarUsuario(event);
    }
});

const cancelarSub=document.getElementById('cancelarSub')
const premium=document.getElementById('Premium')
let arrayUsuariosRegistrados = JSON.parse(localStorage.getItem('users'));
function mostrarDatosUsuario(){
    const nombreUsuario=document.getElementById('nombreUsuario');
    let arrayUsuariosRegistrados = JSON.parse(localStorage.getItem('users'));
    let usuarioLogeadoEncontrado=false;
    if(arrayUsuariosRegistrados!=null){
        for(const usuarioRegistrado of arrayUsuariosRegistrados){
            if(usuarioLogeadoEncontrado==false) {
                if(usuarioRegistrado.logueado == true) {
                      if(usuarioRegistrado.premium==true){
                        nombreUsuario.textContent=`${usuarioRegistrado.user} (Premium)`
                        
                    usuarioLogeadoEncontrado=true;
                    premium.style.display='none';
                    cancelarSub.style.display='flex';
                    }else{
                        nombreUsuario.textContent=`${usuarioRegistrado.user}`;
                        usuarioLogeadoEncontrado=true;
                        cancelarSub.style.display='none';
                        premium.style.display='flex';
                    }
                }
                else{
                    premium.style.display='none';
                    cancelarSub.style.display='none';
                } 
            }    
        }
    }
    else{
        premium.style.display='none';
        cancelarSub.style.display='none';
    }
}
window.addEventListener('load',mostrarDatosUsuario);

function cancelarSuscripcion(){
    const arrayUsuarios = JSON.parse(localStorage.getItem('users'));
    for(const usuarioRegistrado of arrayUsuarios){
        if(usuarioRegistrado.logueado == true){
            if(usuarioRegistrado.premium = true);
                
                usuarioRegistrado.premium = false;
            localStorage.setItem('users', JSON.stringify(arrayUsuarios));
            break;
        }
    }
}

cancelarSub.addEventListener('click', cancelarSuscripcion)