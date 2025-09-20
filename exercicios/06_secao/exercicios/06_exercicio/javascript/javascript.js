/* Arrow Functions:
        uma outra forma de escrever funcoes;

        bem utilizada nos frameworks modernos;

        porem nao deve substituir as functions por completo(veremos mais tarde os detalhes);

            por exemplo:

                const parOuImpar = (n) =>{
                    return n % 2;
                }
                console.log(parOuImpar(3));
*/

    let consoleTeste= () =>{
        console.log("Olá Mundo!!");
    };

    consoleTeste();


    let soma = (a,b) =>{

        return a + b;
    };

    console.log(soma(10,20));