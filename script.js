function calcularPorcentaje() {
    const cantidad = Number(document.getElementById("cantidad").value);
    const porcentaje = Number(document.getElementById("porcentaje").value);

    const resultado = cantidad * porcentaje / 100;

    document.getElementById("resultado").textContent =
        "Resultado: " + resultado;
}
function calcularEdad() {
    const fechaNacimiento = new Date(
        document.getElementById("fechaNacimiento").value
    );

    const hoy = new Date();

    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

    const mes = hoy.getMonth() - fechaNacimiento.getMonth();

    if (
        mes < 0 ||
        (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())
    ) {
        edad--;
    }

    document.getElementById("resultadoEdad").textContent =
        "Tienes " + edad + " años";
}
function calcularDescuento() {
    const precio = Number(document.getElementById("precio").value);
    const descuento = Number(document.getElementById("descuento").value);

    const cantidadDescuento = precio * descuento / 100;
    const precioFinal = precio - cantidadDescuento;

    document.getElementById("resultadoDescuento").textContent =
        "Precio final: " + precioFinal.toFixed(2) + " €";
}
function calcularIVA() {
    const precio = Number(document.getElementById("precioIVA").value);
    const porcentajeIVA = Number(document.getElementById("porcentajeIVA").value);

    const cantidadIVA = precio * porcentajeIVA / 100;
    const precioFinal = precio + cantidadIVA;

    document.getElementById("resultadoIVA").textContent =
        "IVA: " + cantidadIVA.toFixed(2) + " € | Precio final: " + precioFinal.toFixed(2) + " €";
}
function calcularReglaTres() {
    const valorA = Number(document.getElementById("valorA").value);
    const valorB = Number(document.getElementById("valorB").value);
    const valorC = Number(document.getElementById("valorC").value);

    if (valorA === 0) {
        document.getElementById("resultadoReglaTres").textContent =
            "El Valor A no puede ser 0";
        return;
    }

    const resultado = (valorB * valorC) / valorA;

    document.getElementById("resultadoReglaTres").textContent =
        "Resultado: " + resultado;
}
function calcularPropina() {
    const cuenta = Number(document.getElementById("cuenta").value);
    const propina = Number(document.getElementById("propina").value);

    const cantidadPropina = cuenta * propina / 100;
    const total = cuenta + cantidadPropina;

    document.getElementById("resultadoPropina").textContent =
        "Propina: " + cantidadPropina.toFixed(2) +
        " € | Total: " + total.toFixed(2) + " €";
}
function buscarCalculadora() {
    const texto = document.getElementById("busqueda").value.toLowerCase();

    const tarjetas = document.querySelectorAll(".tarjeta");

    tarjetas.forEach(function(tarjeta) {
        const nombre = tarjeta.dataset.nombre;

        if (nombre.includes(texto)) {
            tarjeta.style.display = "block";
        } else {
            tarjeta.style.display = "none";
        }
    });
}
function cambiarModo() {
    document.body.classList.toggle("oscuro");

    const boton = document.querySelector(".modo-oscuro");

    if (document.body.classList.contains("oscuro")) {
        boton.textContent = "☀️";
        localStorage.setItem("modo", "oscuro");
    } else {
        boton.textContent = "🌙";
        localStorage.setItem("modo", "claro");
    }
}

if (localStorage.getItem("modo") === "oscuro") {
    document.body.classList.add("oscuro");
    document.querySelector(".modo-oscuro").textContent = "☀️";
}
function calcularPorcentaje() {
    const numero = Number(document.getElementById("numero").value);
    const porcentaje = Number(document.getElementById("porcentaje").value);

    const resultado = numero * porcentaje / 100;

    document.getElementById("resultado").textContent =
        porcentaje + "% de " + numero + " es " + resultado;
}