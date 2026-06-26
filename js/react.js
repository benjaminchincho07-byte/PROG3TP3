const e = React.createElement;
const { useState } = React;

function App() {
    const [personas, setPersonas] = useState([]);
    const [formulario, setFormulario] = useState({
        nombre: "",
        apellido: "",
        edad: "",
        altura: "",
        peso: ""
    });

    function manejarCambio(evento) {
        setFormulario({
            ...formulario,
            [evento.target.name]: evento.target.value
        });
    }

    function agregarPersona(evento) {
        evento.preventDefault();

        setPersonas([...personas, formulario]);

        setFormulario({
            nombre: "",
            apellido: "",
            edad: "",
            altura: "",
            peso: ""
        });
    }

    function eliminarPersona(indice) {
        setPersonas(personas.filter((_, i) => i !== indice));
    }

    function calcularIMC(peso, altura) {
        return (peso / (altura * altura)).toFixed(2);
    }

    return e("main", { className: "contenedor-formulario" },
        e("form", { className: "formulario", onSubmit: agregarPersona },
            e("input", { type: "text", name: "nombre", placeholder: "Nombre", value: formulario.nombre, onChange: manejarCambio, required: true }),
            e("input", { type: "text", name: "apellido", placeholder: "Apellido", value: formulario.apellido, onChange: manejarCambio, required: true }),
            e("input", { type: "number", name: "edad", placeholder: "Edad", value: formulario.edad, onChange: manejarCambio, required: true }),
            e("input", { type: "number", step: "0.01", name: "altura", placeholder: "Altura en metros", value: formulario.altura, onChange: manejarCambio, required: true }),
            e("input", { type: "number", step: "0.1", name: "peso", placeholder: "Peso en kg", value: formulario.peso, onChange: manejarCambio, required: true }),
            e("button", { type: "submit" }, "Agregar persona")
        ),

        e("table", null,
            e("thead", null,
                e("tr", null,
                    e("th", null, "Nombre"),
                    e("th", null, "Apellido"),
                    e("th", null, "Edad"),
                    e("th", null, "Altura"),
                    e("th", null, "Peso"),
                    e("th", null, "IMC"),
                    e("th", null, "Acción")
                )
            ),
            e("tbody", null,
                personas.map((persona, indice) =>
                    e("tr", { key: indice },
                        e("td", null, persona.nombre),
                        e("td", null, persona.apellido),
                        e("td", null, persona.edad),
                        e("td", null, persona.altura),
                        e("td", null, persona.peso),
                        e("td", null, calcularIMC(persona.peso, persona.altura)),
                        e("td", null,
                            e("button", { onClick: () => eliminarPersona(indice) }, "Eliminar")
                        )
                    )
                )
            )
        )
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(e(App));