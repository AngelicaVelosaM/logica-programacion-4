function pedirNumero(numero) {
  if (isNaN(numero)) {
    console.error("Sólo puedes ingresar números");
    return;
  }
}

let numDigitado = prompt("Por favor ingresa un número: ");
let numero = parseInt(numDigitado);
let resultado = calcularFibonacci(numero);

function calcularFibonacci(numero) {
  let a = 0,b = 1;
  let fibonacciNum = [a];

  for (let i = 1; i < numero; i++) {
    fibonacciNum.push(b);
    let temp = b;
    b = a + b;
    a = temp;
  }

  return fibonacciNum;
  
}
document.write("Ésta es la serie de Fibonacci: " + resultado.join(" , "));