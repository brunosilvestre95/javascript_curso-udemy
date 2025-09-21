/* 
    exercício 04
        escreva uma funcao que retorne um número aleatório;

        o número máximo retornado deve ser passo via parâmetro;

        dica: utiliza Math.random();
*/

    function numeroAleatorio01(num){

        return Math.floor(Math.random() * num) + 1;

    }
    
    console.log(numeroAleatorio01(10));
    console.log(numeroAleatorio01(100));
    console.log(numeroAleatorio01(50));
    console.log(numeroAleatorio01(250));