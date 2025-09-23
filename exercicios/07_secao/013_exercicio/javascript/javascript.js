/* 
Função de palíndromo
Escreva uma função chamada isPalindrome que recebe uma palavra como argumento.

A função deve verificar se a palavra é um palíndromo.

Um palíndromo é uma palavra que é lida da mesma forma tanto da esquerda para a direita quanto da direita para a esquerda.

A função deve retornar true se a palavra for um palíndromo e false caso contrário.

Por exemplo:

isPalindrome('radar') deve retornar true.

isPalindrome('hello') deve retornar false.
*/

function isPalindrome(palavra){
    const palavraFormatada = palavra.toLowerCase();
    const palavraInvertida = palavraFormatada.split('').reverse().join('');
        return palavraFormatada === palavraInvertida;
}
    console.log("A palavra 'radar' é um palíndromo?", isPalindrome('radar'));
    console.log("A palavra 'hello' é um palíndromo?", isPalindrome('hello')); 
