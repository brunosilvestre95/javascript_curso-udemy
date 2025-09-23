/* 
Soma de Números Pares
Escreva uma função chamada sumEvenNumbers que recebe um array de números como argumento.

A função deve calcular e retornar a soma de todos os números pares presentes no array.

Utilize o operador de módulo (%) para determinar se um número é par.

Considere que o array pode conter tanto números inteiros positivos quanto negativos.

Dica: Para verificar se um número é par, você pode usar a expressão numero % 2 === 0, onde % é o operador de módulo que retorna o resto da divisão.
*/

function sumEvenNumbers(numeros){

    let soma = 0;

        for(const numero of numeros){

            if(numero % 2 == 0){

                soma += numero;

            }
        }

        return soma;
}

const numeros1 = [1, 2, 3, 4, 5, 6];
    console.log(`A Soma dos Números pares em [${numeros1}] é: `, sumEvenNumbers(numeros1));