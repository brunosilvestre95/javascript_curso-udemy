/* Estrutura de repeticao: While
        Fará uma acao, ate que a condicao seja atingida;

        Precisamos realmente 'definir um fim' para o loop,
        para nao termos o problema de loop infinito;

            exemplo:
                let x = 10
                    while(x > 0) {
                        console.log(x);
                            x = x - 1;
                    }
*/

    let x = 10
        while (x > 0) {
            console.log("O valor de X é: " + x);
                x = x - 1;
        }
                // enquanto X for < 0, o X vai continuar diminuindo por 1;

    let y = 0;
        while(y <= 10){
            console.log("O valor de Y é: ");
                y = y + 1
        }
    /*  exemplo de loop infinito
        o navegador para de responder
        o codigo continua rodando
        e a memoria/processador é consumido
            
    let z = 0;
        while(z > 0){
            console.log(z);
        }
    */