/*
Contagem de Vogais
Escreva uma função chamada countVowels que recebe uma string como argumento.

A função deve contar o número de vogais presentes na string (considerando letras maiúsculas e minúsculas).

A função deve retornar o total de vogais encontradas.
*/

function countVowels(str){
    const vogais = 'aeiou';
    let contador = 0;

        for(const caractere of str){

            if(vogais.includes(caractere.toLowerCase()))

        {

            contador++;

        }
    }

            return contador;
}

console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript"));
console.log(countVowels("AEIOU aeiou"));
console.log(countVowels("Ritmo"));
console.log(countVowels("Anotaram a data da maratona"));