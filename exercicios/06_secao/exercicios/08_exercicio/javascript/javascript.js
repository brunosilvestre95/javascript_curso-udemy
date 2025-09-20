/* Argumentos opcionais
        podemos chamar uma funcao em Js sem o número igual de parametros determinados; 

            por exemplo:

                function nomeComIdade(nome, idade) {
                    if(idade === undefined){
                    console. log("Seu nome é" + nome);
                    }else{
                        console.log("Seu nome é " + nome + "e você tem " + idade + "anos de idade");
                        }
                   }
                
                nomeComIdade("João");
                nomeComIdade("João,42");
*/

    function soma(a,b){
        if(a === undefined || b === undefined){

            console.log("Esta funcao precisa ter os dois argumentos");

        } else {

            return a + b;
        }
    }

    console.log(soma(1));
    console.log(soma(1,2));


    function saudacao(nome, idade){
        if(idade === undefined){
            console.log("Olá, " + nome);
        } else {
            console.log("Olá, " + nome + " você tem " + idade + " anos de idade.");
        }
    }

    saudacao("Silvestre");
    saudacao("Silvestre, 29");