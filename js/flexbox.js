const videojuegos = [
    "Minecraft",
    "Terraria",
    "Stardew Valley",
    "Brawl Stars",
    "Geometry Dash",
    "Hollow Knight"
];

const contenedor = document.getElementById("contenedorTarjetas");
const btnOrdenar = document.getElementById("btnOrdenar");

function mostrarTarjetas() {

    contenedor.innerHTML = "";

    videojuegos.forEach(juego => {

        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        tarjeta.innerHTML = `
            <h2>${juego}</h2>
            <p>Videojuego popular.</p>
        `;

        contenedor.appendChild(tarjeta);
    });
}

btnOrdenar.addEventListener("click", () => {
    videojuegos.sort();
    mostrarTarjetas();
});

mostrarTarjetas();