//1-Bienvenida
//2-Ingresar datos del usuario
//3-Elegir tipo --1-Servicios--2-Productos--3-Asesoramiento--
//4-En la seccion asesoramiento recibes un cupon de descuento para aplicar a "Productos"
//5-Ejemplo de calculadora para incorporar luego en la seccion de productos

// 1-
alert("Bienvenido a Design Time");

// 2-
let nombreDeUsuario;

do {
  nombreDeUsuario = prompt("Ingrese nombre de usuario");
} while (nombreDeUsuario == "");

console.log(nombreDeUsuario);

alert("Bienvenido/a " + nombreDeUsuario);

// 3-
let opcion = prompt(
  "Elegir el tipo de opcion 1-Servicios; 2-Productos; 3-Asesoramiento"
);

switch (opcion) {
  case "1":
    alert("Elegiste Servicios");
    break;
  case "2":
    alert("Elegiste Productos");
    break;
  case "3":
    asesoramiento();
    break;
  default:
    alert("La opcion seleccionada no existe");
}

// 4-
function asesoramiento() {
  alert("Elegiste Asesoramiento");
  alert("Usted ha recibido un cupon de Productos del 50%");
  let costoTotal = prompt("Ingrese costo total de los productos");
  aplicarCupon(costoTotal, 0.5);
}

function aplicarCupon(total, descuento) {
  let resultado = total * descuento;
  alert("Su total es de " + resultado);
}

// 5-

// function calcularOperacion(primerNumero, segundoNumero, operacion) {
//     switch (operacion) {
//         case '+':
//             return primerNumero + segundoNumero
//         case '-':
//             return primerNumero - segundoNumero
//         case '*':
//             return primerNumero * segundoNumero
//         case '/':
//             return primerNumero / segundoNumero
//         default:
//             return 0
//     }
// }

// let numero1 = Number(prompt('ingrese el primer numero:'))
// let numero2 = Number(prompt('ingrese el segundo numero:'))
// let operacion = prompt('Ingrese la operacion a realizar:', 'Ejemplo: + - * /')

// let resultado = calcularOperacion(numero1, numero2, operacion)

// alert('El resultado de la operacion es: '+ resultado)
