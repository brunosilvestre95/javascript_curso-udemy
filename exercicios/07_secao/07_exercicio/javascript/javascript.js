/* 
    Exercício 07:
        escreva uma funcao que receba um número negativo e retorne um número positivo;

        dica: utiliza a funcao Math.abs
*/

function tornarPositivo(numero){
        return Math.abs(numero);
}

console.log(tornarPositivo(-27));
console.log(tornarPositivo(-30));
console.log();
console.log(tornarPositivo(30));
console.log();
console.log(tornarPositivo(-257));
console.log(tornarPositivo(-84));
console.log();
console.log(tornarPositivo(100));
console.log();
console.log(tornarPositivo(-100));