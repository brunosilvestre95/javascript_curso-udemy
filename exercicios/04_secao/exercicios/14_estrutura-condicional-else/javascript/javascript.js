/*  
    Estrutura condicional: else

        podemos executar um outro bloco de código, caso a instrucao do If nao seja atendida;

        ou seja, SE NAO EXECUTAR o bloco If, EXECUTE o bloco Else;

            exemplo:
                let nome = 'Toicin'
                    if(nome == 'Pedro'){
                    console.log(
                    'O seu nome não é Pedro, seu nome é Toicin.');
                    } else { 
                        console.log('Seu nome é Toicin.';
                        }
*/

let velocidade = 100;
    if(velocidade <= 60){
        console.log("Não foi multado.");
    } else {
        console.log("Foi Multado!")
    }