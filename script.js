/* Calculadora Simple:
Crea un programa que pida al usuario dos números y una operación (suma, resta, multiplicación o división). Luego, usa una estructura condicional (if / else) para realizar la operación y mostrar el resultado. */

// Solucion 1:

/*let primerNum = parseFloat(prompt("Digite un numero del 1 al 7"))
let segundoNum = parseFloat(prompt("Ditite otro numero del 1 al 7"))


if (primerNum <= 7 && segundoNum <= 7) {
    let operacion = prompt("Escriba el tipo de operacion que quiere ejecutar").toLowerCase()
    if (operacion == "suma") {
        let resultadoSuma = primerNum + segundoNum
        alert("El resultado de su operacion es " + resultadoSuma)
    } else if (operacion == "resta") {
        let resultadoResta = primerNum - segundoNum
        alert("El resultado de su operacion es " + resultadoResta)
    } else if (operacion == "multiplicacion") {
        let resutadoMultiplicacion = primerNum * segundoNum
        alert("El resultado de su operacion es " + resutadoMultiplicacion)
    } else if (operacion == "division") {
        let resultadoDivision = primerNum / segundoNum
        alert("El resultado de su operacion es " + resultadoDivision)
    } else {
        alert("Ingreso mal la operacion matematica, recuerde que puede elegir entre: suma, resta,multiplicacion o division")
    }
} else {
    alert("Ha ingresado un numero mayor a 7")
} */

/* Días de la semana:
Pide al usuario que ingrese un número del 1 al 7 que represente un día de la semana. Utiliza una estructura de control (por ejemplo, un switch) para mostrar el nombre del día correspondiente. */

// Solucion 2:

/* let diaSemana = parseFloat(prompt("Hola, porfa digite un numero de 1 a 7"))

switch (diaSemana) {
    case 1:
        alert("Lunes")
        break
    case 2:
        alert("Martes")
        break
    case 3:
        alert("Miercoles")
        break
    case 4:
        alert("Jueves")
        break
    case 5:
        alert("Viernes")
        break
    case 6:
        alert("Sabado")
        break
    case 7:
        alert("Domingo")
        break
}*/
/* Contador con While:
Escribe un programa que cuente desde 1 hasta un número ingresado por el usuario utilizando un bucle while. Imprime cada número en la consola. */

// Solucion 3:

/*let num = parseFloat(prompt("Hola, digita un numero"))
i = 1

while (i <= num) {
    console.log(i)
    i++
} */

/* Tabla de multiplicar con For:
Pide al usuario que ingrese un número. Luego, usa un bucle for para mostrar la tabla de multiplicar de ese número, desde 1 hasta 10. */

// Solucion 4:

/* let num = parseFloat(prompt("Hola, digite un numero para mostrarle la tabla de multiplicar de ese numero :)"))

for (let i = 1; i <= 10; i++) {
    let resultado = num * i
    resultado = parseFloat(resultado)
    console.log (num + "x" + i + "=" + resultado)
} */

/* Adivina el número:
Genera un número aleatorio entre 1 y 100. Pide al usuario que adivine el número y proporciónale pistas (mayor o menor) hasta que lo adivine. Utiliza un bucle while para repetir el proceso. */

// Solucion 4:

let num = Math.floor(Math.random() * 100) + 1;
let userNum;

while (true) {
    userNum = parseFloat(prompt("Hola, adivina un número entre 1 y 100"));

    if (userNum < num) {
        alert("El número digitado es menor que el número que debes adivinar.");
    } else if (userNum > num) {
        alert("El número digitado es mayor que el número que debes adivinar.");
    } else {
        alert("¡Felicitaciones! Adivinaste el número.");
        break; // Termina el bucle cuando el usuario adivina el número.
    }
}
