
const estrellas = document.querySelectorAll(".estrella-checkbox");

function agregarAMisAlbums(event) {
    const arrayUsuarios = JSON.parse(localStorage.getItem('users'));
    const checkbox = event.target;
    const idEstrella = checkbox.getAttribute("data-id");

    let usuarioLogueado;
    for (const userId in arrayUsuarios) {
        if (arrayUsuarios[userId].logueado === true) {
            usuarioLogueado = arrayUsuarios[userId];
            break;
        }
    }

    if (usuarioLogueado) {
        if (checkbox.checked) {
            if (!usuarioLogueado.listaAlbumsFav.includes(idEstrella)) {
                usuarioLogueado.listaAlbumsFav.push(idEstrella);
            }
        } else {
            const index = usuarioLogueado.listaAlbumsFav.indexOf(idEstrella);
            if (index !== -1) {
                usuarioLogueado.listaAlbumsFav.splice(index, 1);
            }
        }

        localStorage.setItem('users', JSON.stringify(arrayUsuarios));
    }
}

estrellas.forEach(estrella => {
    estrella.addEventListener("change", agregarAMisAlbums);
});

function cargarAlbumesFavoritos() {
    const arrayUsuarios = JSON.parse(localStorage.getItem('users'));
    const usuarioLogueado = arrayUsuarios.find((usuario) => usuario.logueado);

    if (usuarioLogueado) {
        estrellas.forEach(estrella => {
            const idEstrella = estrella.getAttribute("data-id");
            estrella.checked = usuarioLogueado.listaAlbumsFav.includes(idEstrella);
        });
    }
}

cargarAlbumesFavoritos();
