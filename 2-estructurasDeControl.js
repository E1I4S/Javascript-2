// estructurasDeControl.js

// Ejercicio 1: Condicionales if-else
// Instrucción: Escribe una función que reciba un número y verifique si es par o impar.
// Imprime "El número es par" o "El número es impar" según corresponda.
function verificarParidad(numero) {
    if(numero%2==0)
        console.log("El numero es par")
    else
    console.log("El numero es impar")
}
verificarParidad(16)
// Ejercicio 2: Condicionales anidados
// Instrucción: Escribe una función que reciba una edad y determine si la persona es:
// "Menor de edad" (menor a 18), "Adulto" (entre 18 y 65), o "Adulto mayor" (mayor a 65).
function clasificarEdad(edad) {
   if(edad<18)
    console.log("Es menor de edad")
   else if (edad>=18 && edad<= 65){
    console.log("Adulto");
}else {
console.log("Adulto mayor");
}
}
clasificarEdad(34);
// Ejercicio 3: Bucles while
// Instrucción: Crea una función que reciba un número entero positivo y utilice un bucle `while` para imprimir todos los números desde ese número hasta 0.
function cuentaRegresiva() {
        while (retroceso>=0){
            console.log(retroceso);
            retroceso=retroceso-1;
        }
}
cuentaRegresiva(30);
// Ejercicio 4: Bucles do-while
// Instrucción: Escribe una función que imprima "Estoy aprendiendo JavaScript" 5 veces utilizando un bucle `do-while`.
function repetirMensaje() {
    let contador = 0;
    do{
        console.log("Estoy aprendiedo javascript");
        contador=contador+1;
    } while (contador <5);
}
repetirMensaje();
// Ejercicio 5: Bucle for
// Instrucción: Escribe una función que reciba un número entero positivo y utilice un bucle `for` para imprimir todos los números pares entre 0 y ese número.
function imprimirPares(numero) {
    for(let par=0; par<=numero; par=par+1){
        if (par%2==0){
            console.log(par);
        }
     }
}
imprimirPares(30);
// Ejercicio 6: Uso de break
// Instrucción: Escribe una función que recorra los números del 1 al 10, pero detén el bucle cuando el número sea igual a 6.
function detenerEnSeis() {
    for(let recorrer = 1; recorrer <= 10; i=i+1){
        if(recorrer==6){
            break;
        }
        console.log(recorrer);
    }
}
 detenerEnSeis();
// Ejercicio 7: Uso de continue
// Instrucción: Crea una función que recorra los números del 1 al 10, pero que se salte el número 5 usando `continue`.
function saltarCinco() {
    for (let salto = 1; salto <=10; salto=salto+1){
        if(salto==5){
            continue;
        }
        console.log(salto);
    }
}
saltarCinco();
// Ejercicio 8: Switch básico
// Instrucción: Escribe una función que reciba un número del 1 al 7 y devuelva el día de la semana correspondiente (1 es "Lunes", 2 es "Martes", ..., 7 es "Domingo"). Usa la estructura `switch`.
function obtenerDiaSemana(dias_de_la_semana) {
    switch(dias_de_la_semana){
        case 1: console.log("Lunes"); break;
        case 2: console.log("Martes"); break;
        case 3: console.log("Miercoles"); break;
        case 4: console.log("Jueves"); break;
        case 5: console.log("Viernes"); break;
        case 6: console.log("Sabado"); break;
        case 7: console.log("Domingo"); break;
        case 8: console.log("Dia invalido"); break;
    }
}
obtenerDiaSemana(6);
// Ejercicio 9: Switch con múltiples casos
// Instrucción: Escribe una función que reciba un carácter y devuelva si es una vocal. Utiliza un `switch` y agrupa los casos para las vocales (a, e, i, o, u).
function esVocal(vocal) {
    switch(vocal.tolowerCase()){
          case "a":
          case "e":
          case "i":
          case "o":
          case "u":
          console.log("Es vocal");
          break;
          default:
          console.log("No es vocal");
}
}
esVocal(k);
// Ejercicio 10: Condicionales complejos con operadores lógicos
// Instrucción: Escribe una función que reciba tres números y determine si todos son positivos, al menos uno es negativo, o todos son negativos. Usa operadores lógicos (`&&`, `||`).
function evaluarNumeros(A, B, C) {
    if (A > 0 && B > 0 && C > 0) {
        console.log("Todos son positivos");
    } else if (A < 0 && B < 0 && C < 0) {
        console.log("Todos son negativos");
    } else if (A < 0 || B < 0 || C < 0) {
        console.log("Al menos uno es negativo");
    } else {
        console.log("Hay una mezcla de positivos y negativos");
    }
}
evaluarNumeros(7,-11 ,-13 )
// Exportar todas las funciones
export {
    verificarParidad,
    clasificarEdad,
    cuentaRegresiva,
    repetirMensaje,
    imprimirPares,
    detenerEnSeis,
    saltarCinco,
    obtenerDiaSemana,
    esVocal,
    evaluarNumeros,
};
