/*  Recursion:
        uma funcionalidade que permite uma funcao se chamar novamente;

        isso pode ser um problema caso a funcao se chame muitas vezes;

            por exemplo:
                function returnarNumeroPar(n){

                    if(n % 2 == 0){

                    console.log("n agora é par: " + n);

                    } else {

                        console.log(n);

                        retornarNumeroPar(n - 1);
                        }
                }
                retornarNumeroPar(33);
*/

function recursao(n){
    if(n - 1 == 2){
        console.log("recursão parou.");
    } else if ( n % 2 != 0){
        console.log("Número ímpar" + n);
        recursao(n - 1);
    } else {
        console.log("Numero par" + n);
        recursao(n - 2);
    }
}
    recursao(39);
    recursao(10);
    recursao(55);