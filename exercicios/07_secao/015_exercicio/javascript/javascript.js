/*
Inverter string
Escreva uma função chamada reverseString que recebe uma string como argumento.

A função deve inverter a ordem dos caracteres na string.

A função deve retornar a string invertida.
*/

function reverseString(str){

    return str.split('').reverse().join('');

}

console.log(reverseString("hello"));
console.log(reverseString("JavaScript"));
console.log(reverseString("Google"));
console.log(reverseString("12345"));  