// Seleccionar la pantalla y todos los botones
const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.botones button');
const bienvenida = document.getElementById('bienvenida');

// Variable para guardar lo que el usuario escribe
let operacion = "";

// Recorrer todos los botones
botones.forEach(boton => {
  boton.addEventListener('click', () => {
    if (bienvenida) bienvenida.style.display = 'none';
    
    const valor = boton.textContent;

    if (valor === "C") {
      // Si es 'C', se borra la pantalla
      operacion = "";
      pantalla.value = "";
    } else if (valor === "=") {
      // Si es '=', se evalúa la operación
      try {
        // Evalúa la operación (ej: 2+2)
        operacion = eval(operacion);
        pantalla.value = operacion;
      } catch {
        pantalla.value = "Looser";
        operacion = "";
      }
    } else if (valor === "←") {
  // Borra el último carácter de la operación
  operacion = operacion.slice(0, -1);
  pantalla.value = operacion;
    } else {
      // Si es cualquier otro botón, se agrega el valor
      operacion += valor;
      pantalla.value = operacion;
    }
  });
});

// Actualizar el año en el footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
