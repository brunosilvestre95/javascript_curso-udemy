    /* Mais Sobre Funcoes:
            const soma = function( a , b ) {
                return a + b ; 
            }
                console.log(soma(3, 5));

            const saudacao = function(nome){
                if(nome == "Mansur"){
                    return "Olá, Mansur!!";
            }
            }
                console.log(saudacao("Mansur"));
    */
    console.log(multiplicarTresNumeros(2,3,4));

    const mult = multiplicarTresNumeros(5, 4, 8);

    console.log("O valor de mult é " + mult);


    function podeDirigir(idade, cnh){
        if(idade >= 18 && cnh == true){
            console.log("Pode Dirigir.");
        } else {
            console.log("Não pode dirigir.");
        }
    }

    console.log(podeDirigir(19,true));
    console.log(podeDirigir(25,true));
    console.log(podeDirigir(17,false));
    console.log(podeDirigir(44, 0));
    console.log(podeDirigir(19,1));