let usuario = prompt("¿Cual es tu nombre? ");

function invalidData(data) {
  return data === null || data === "" || data.trim() === "";
}

while (invalidData(usuario)) {
  usuario = prompt("Por favor dinos cual es tu nombre ");
}

let oferta = prompt(
  "\rHola " +
    usuario +
    "! Bienvendio a nuestro sitio web!\r\rQue productos desea comprar hoy?\r\r1. Zapatillas x $150000\r2. Camisetas x $25000\r3. Pantalones x $80000\r4. Accesorios x $5000\r5. Salir"
);
const productos = [
  { id: 1, nombre: "Zapatillas", precio: 150000 },
  { id: 2, nombre: "Camisetas", precio: 25000 },
  { id: 3, nombre: "Pantalones", precio: 80000 },
  { id: 4, nombre: "Accesorios", precio: 5000 },
];

const carrito = [];

function invalidOferta(oferta) {
  const ofertaNumber = parseInt(oferta);
  return isNaN(ofertaNumber) || ofertaNumber < 1 || ofertaNumber >= 5;
}

while (invalidData(oferta) || oferta !== "5") {
  if (!invalidOferta(oferta)) {
    carrito.push(oferta);
  }
  oferta = prompt(
    "Que más deseas comprar hoy?\r\r1. Zapatillas x $150000\r2. Camisetas x $25000\r3. Pantalones x $80000\r4. Accesorios x $5000\r5. Salir"
  );
}

function calcularTotal() {
  let total = 0;
  for (let i = 0; i < carrito.length; i++) {
    total += productos[carrito[i] - 1].precio;
  }
  return total;
}

function agruparProductos() {
  const agrupados = carrito.reduce((acc, producto) => {
    if (!acc[producto]) {
      acc[producto] = 1;
    } else {
      acc[producto]++;
    }
    return acc;
  }, {});

  return agrupados;
}

function mostrarProductosAgrupados() {
  const productosAgrupados = agruparProductos();
  let mensaje = "";
  for (const producto in productosAgrupados) {
    mensaje += `${productosAgrupados[producto]} x ${
      productos[producto - 1].nombre
    } - $${productos[producto - 1].precio}\r`;
  }
  return mensaje;
}

if (carrito.length > 0) {
  alert(
    "Gracias por tu compra " +
      usuario +
      "!\r\rDetalle de tu compra:\r" +
      mostrarProductosAgrupados() +
      "\rTotal a pagar: $" +
      calcularTotal()
  );
} else {
  alert(`Gracias por tu visita ${usuario}!`);
}
