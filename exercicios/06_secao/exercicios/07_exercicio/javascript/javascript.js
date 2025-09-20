/* Mais sobre Arrow Functions:
        se só tem um parametro podemos remover os parenteses do argumento e o return;

        se a expressao for pequena,
        pode até ser feita em uma linha sem prejudicar a leitura do código;

            por exemplo:

            const raizQuadrada + (x) =>{
                
                return x * x;

            }

            const raizQuadrada2 = n => n * n;

            console.log(raizQuadrada(2));
            console.log(raizQuadrada(4));
*/

    const multiplicarPorDois = (x) => {

        return x * 2;

    }

    console.log(multiplicarPorDois(2));

    //outra forma 
    const multiplicarPorDois2 = x => x*2; 
        console.log(multiplicarPorDois2(4));