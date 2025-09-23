/*
Identifique a faixa etária
Crie uma função chamada faixaEtaria que aceita um argumento chamado idade;

Identifique três faixas etárias: Criança (menor que 12 anos), Jovem (12 a 24 anos), Adulto (Maior que 25 anos;

Execute a função duas vezes e encapsule os resultados em variáveis diferentes;

Uma variável deve ter o nome de crianca e enviar como argumento uma idade de criança;

A outra o nome adulto e uma idade de adulto para executar a função criada;
*/

function faixaEtaria(idade){

        if(idade < 12){
            
        return "Criança"; 

        } else if(idade >= 12 && idade <=24) {

            return "Jovem";

        } else {

            return "Adulto";

        }
}
    let crianca = faixaEtaria(8);

    let adulto = faixaEtaria(45);

        console.log("Resultado para a variável 'crianca': ", crianca);
        console.log("Resultado para a variável 'adulto': ", adulto);