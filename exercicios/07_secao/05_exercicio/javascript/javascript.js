/* 
    Exercício 06:
        escreva uma funcao que recebe a idade de uma pessoa;'

        se ela tem mais de 18 anos, ela pode entrar na autoescola,
        imprima uma mensagem informando isso;

        se ela tem menos, ela nao pode,
        imprima outra mensagem com este aviso;

        execute a funcao nos dois casos;
*/
    function idadeParaCNH(idade){

        if(idade <= 17){

            console.log("Não Pode Entrar na Auto Escola.");

        } else {

            console.log("Pode Entrar na Auto Escola.");
            
        }
    }
    
    idadeParaCNH(18);
    idadeParaCNH(17);
    idadeParaCNH(34);
    idadeParaCNH(16);
    idadeParaCNH(21);
    idadeParaCNH(6);
    idadeParaCNH(19);
