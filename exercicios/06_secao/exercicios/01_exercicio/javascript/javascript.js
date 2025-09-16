/* 
    Definindo uma funcao:
    
        uma funcao tem uma estrutura um pouco mais complexa;
        devemos declarar a funcao sempre com a palavra function;
        uma funcao deve ter um nome;
        pode conter argumentos/parametros, definidos entre();
        o corpo da funcao é definido entre{};
        geralmente uma funcao retorna um valor;
        é possível declarar funcoes em variáveis;

                EXEMPLO:
        function escreverNoconsole(){
    console.log("Escrevendo no Console MESMO!");
}

escreverNoconsole();
    const textoNoConsole = function(){
        console.log("Texto no Console MESMO!");
    }
textoNoConsole();
    const textPorParametro = function(texto){
        console.log(texto);
    }
    textPorParametro("Testando por parâmetro MESMO!");
*/

function imprimirNoConsole(){
    console.log("Olá Mundo!! Este é meu Primeiro JavaScript da Seção-06 xD");
}

imprimirNoConsole();

    function imprimirUmNumero(num){
        console.log("O Número é: " + num);
    }

imprimirUmNumero(2);
imprimirUmNumero(4);
imprimirUmNumero(6);
imprimirUmNumero(8);
imprimirUmNumero(10);

// +++++
const numeroAleatorio = function(){
    console.log(Math.random());
}

numeroAleatorio();
numeroAleatorio();
numeroAleatorio();
numeroAleatorio();