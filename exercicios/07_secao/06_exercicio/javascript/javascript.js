/* 
    exercício 06:

        escreva uma funcao que detecta o tipo de dado passado;

        verifique se é um: number, boolean ou string;

        e retorne uma mensagem para cada tipo;

        execute uma funcao para cada caso;
*/

function detectarTipoDado(dado){

    if(typeof dado === 'string'){

        console.log("Este Dado é STRING")

    }else if(typeof dado === 'boolean'){

        console.log("Este Dado é BOOLEAN")

    } else if(typeof dado === 'number') {

        console.log("Este dado é NUMBER")
        
    }
}

detectarTipoDado("true");
detectarTipoDado(true);
detectarTipoDado("30");
detectarTipoDado(30);
detectarTipoDado("Palavra");
detectarTipoDado(false);
