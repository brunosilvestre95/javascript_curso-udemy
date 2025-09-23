/* 
Cálculo da média
Escreva uma função chamada calculateAverage que recebe um array de números como argumento.

A função deve calcular a média dos números no array.

A média é calculada somando todos os números e dividindo pelo total de números no array.

A função deve retornar o valor da média calculada.
*/

function calculateAverage(numeros){

    if(numeros.length === 0){

        return 0;
    }

    let soma = 0;

        for (const numero of numeros){

            soma += numero;

        }

    const media = soma / numeros.length;
    
        return media;
}

console.log(calculateAverage([10, 20, 30, 40, 50]));
console.log(calculateAverage([5, 10, 15]));
console.log(calculateAverage([1, 2, 3, 4]));
console.log(calculateAverage([]));
console.log(calculateAverage([-10, 0, 10])); 
