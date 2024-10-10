let buscar = document.getElementById("buscar");
let texto = document.getElementById("texto");
let gifGrid = document.getElementById("gif-grid");

const apiKey = "h4oa5zJEdqAH14UBbmUIhABpWQsxSKuu";

const llamada = (ak, kw) => {
    return fetch(`
https://api.giphy.com/v1/gifs/search?
api_key=${ak}
&q=${kw}
&limit=9
&offset=0
&rating=g
&lang=en
&bundle=messaging_non_clips
`);
}

buscar.addEventListener("click", () => {
    let tex = texto.value;

    llamada(apiKey, tex)
    .then((response) => {
        return response.json();
    })
    .then((results) => {
        gifGrid.innerHTML = ''; // Limpiar la cuadrícula antes de agregar nuevos GIFs
        results.data.forEach(element => {
            const img = document.createElement("img");
            img.setAttribute("src", element.images.original.url);
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridItem.appendChild(img);
            gifGrid.appendChild(gridItem);
        });
    })
    .catch((error) => {
        console.error("Error en la consulta: " + error.message);
    });
});
