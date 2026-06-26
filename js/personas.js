const formPersona = document.getElementById("formPersona");
const tablaPersonas = document.getElementById("tablaPersonas");

let personas = [];

formPersona.addEventListener("submit", function(event) {
    event.preventDefault();

    const persona = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        edad: document.getElementById("edad").value,
        altura: parseFloat(document.getElementById("altura").value),
        peso: parseFloat(document.getElementById("peso").value)
    };

    personas.push(persona);
    mostrarPersonas();

    formPersona.reset();
});

function calcularIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

function mostrarPersonas() {
    tablaPersonas.innerHTML = "";

    personas.forEach((persona, index) => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${persona.nombre}</td>
            <td>${persona.apellido}</td>
            <td>${persona.edad}</td>
            <td>${persona.altura}</td>
            <td>${persona.peso}</td>
            <td>${calcularIMC(persona.peso, persona.altura)}</td>
            <td>
                <button onclick="eliminarPersona(${index})">Eliminar</button>
            </td>
        `;

        tablaPersonas.appendChild(fila);
    });
}

function eliminarPersona(index) {
    personas.splice(index, 1);
    mostrarPersonas();
}