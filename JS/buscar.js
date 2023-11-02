
const nodoBuscador = document.querySelector("#barra");

nodoBuscador.addEventListener("keyup", e => {
  const nodoAlbumes = document.querySelectorAll(".item-imagen");

  nodoAlbumes.forEach(album => {
    const contenidoAlbum = album.textContent.toLowerCase();
    const valorBusqueda = e.target.value.toLowerCase();

    if (contenidoAlbum.includes(valorBusqueda)) {
      album.classList.remove("filtrar");
    } else {
      album.classList.add("filtrar");
    }
  });
});
