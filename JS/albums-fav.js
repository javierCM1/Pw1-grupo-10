

function mostrarAlbumesFavoritos() {
    const galeriaImagenes = document.getElementById("galeria-imagenes");

    const arrayUsuarios = JSON.parse(localStorage.getItem('users'));
    const usuarioLogueado = arrayUsuarios.find((usuario) => usuario.logueado);

    if (usuarioLogueado) {
        galeriaImagenes.innerHTML = '';

        usuarioLogueado.listaAlbumsFav.forEach((album) => {
            const article = document.createElement("article");
            article.className = "item-imagen";

            const img = document.createElement("div");           
            img.innerHTML = `<a href="musica-sonando.html"> <img src="imagenes/albumcover${album}.jpg" data-id="${album}" alt="${album}" onclick="redireccionarYMostrarDatos('${album}')">`;

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "estrella-checkbox";
            checkbox.id = `estrella${album}`;
            checkbox.checked = true; 

            const label = document.createElement("label");
            label.className = "estrella-label";
            label.htmlFor = `estrella${album}`;

            article.appendChild(img);
            article.appendChild(checkbox);
            article.appendChild(label);

            galeriaImagenes.appendChild(article);

            checkbox.addEventListener("change", (event) => {
                if (!checkbox.checked) {
                    const index = usuarioLogueado.listaAlbumsFav.indexOf(album);
                    if (index !== -1) {
                        usuarioLogueado.listaAlbumsFav.splice(index, 1);
                    }
                    localStorage.setItem('users', JSON.stringify(arrayUsuarios));
                    galeriaImagenes.removeChild(article);
                }
            });
        });
    }
}

mostrarAlbumesFavoritos();

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
