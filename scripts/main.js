// Definimos la función para obtener el total con descuento
function getTotalConDescuento(total, esNuevo) {
    let descuento = 0;
    if (esNuevo === "sí" || esNuevo === "si") {
      descuento = total * 0.2;
    }
    return total - descuento;
  }
  
  // Definimos la función para obtener el valor del IVA
  function getValorIVA(total) {
    const PORCENTAJE_IVA = 0.19;
    return total * PORCENTAJE_IVA;
  }
  
  // Definimos la función para obtener el envío gratis
  function getEnvioGratis(cantidadProductos) {
    let costoEnvio = 0;
    if (cantidadProductos > 2) {
      costoEnvio = 0;
    }
    return costoEnvio;
  }
  
  // Definimos los objetos para los vestidos de baño
  let vestidosDeBanio = [
    {
      id: 1,
      nombre: "Vestido de baño Bodie sol y luna",
      descripcion: "Vestido de baño de dos piezas con diseño de sol y luna",
      precio: 25000
    },
    {
      id: 2,
      nombre: "Vestido de baño Bodie Palmas",
      descripcion: "Vestido de baño de una pieza con diseño de palmas",
      precio: 35000
    },
    {
      id: 3,
      nombre: "Vestido de baño Bodie Júpiter",
      descripcion: "Vestido de baño de dos piezas con diseño de Júpiter",
      precio: 30000
    },
    {
      id: 4,
      nombre: "Vestido de baño Bodie Rojo fuego",
      descripcion: "Vestido de baño de una pieza con diseño de fuego rojo",
      precio: 40000
    },
    {
      id: 5,
      nombre: "Vestido de baño Bodie Rojo fuego",
      descripcion: "Vestido de baño de dos piezas con diseño de fuego rojo",
      precio: 45000
    },
    {
      id: 6,
      nombre: "Vestido de baño Bikini Reversible",
      descripcion: "Bikini de dos piezas reversible con diseño de flores",
      precio: 28000
    }
  ];
  
// Pedimos al usuario que seleccione un producto
let opciones = "";
for (let i = 0; i < vestidosDeBanio.length; i++) {
  opciones += `${vestidosDeBanio[i].id}. ${vestidosDeBanio[i].nombre}\n`;
}
let seleccion = prompt(`Seleccione un producto:\n${opciones}`);

// Buscamos el producto seleccionado

let producto = vestidosDeBanio.find(vestido => vestido.id == seleccion);

if (!producto) {
  alert("Producto no válido");
} else {
  // Pedimos al usuario la cantidad de productos a comprar
  let cantidad = prompt(`Ingrese la cantidad de "${producto.nombre}" a comprar:`);
  cantidad = parseInt(cantidad);

  // Validamos la cantidad
  if (isNaN(cantidad) || cantidad <= 0) {
    alert("Cantidad no válida");
  } else {
    // Calculamos el total con descuento, IVA y envío gratis
    let total = producto.precio * cantidad;
    total = getTotalConDescuento(total, "sí");
    let iva = getValorIVA(total);
    let envio = getEnvioGratis(cantidad);
    total += iva + envio;

    // Mostramos el resultado en un alert
    alert(`Compra realizada exitosamente:\n${producto.nombre} x ${cantidad}\nTotal a pagar: $${total}. El IVA es: ${iva}`);
  }
}