/* Exercício 08:
        escreva uma funcao que recebeu ma string;

        se o texto conter mais de 10 caracteres imprima o texto "Texto Muito Longo";

        se conter menos, imprima "Texto dentro do limita";
*/

function detectorDeCaracteres(texto){
    if(texto.length > 10){
        console.log("Texto muito longo");
    } else {
        console.log("Texto dentro do limite.");
    }
    console.log(texto.length);
}

detectorDeCaracteres("Teste");
detectorDeCaracteres("Vamos testar se funciona");
detectorDeCaracteres("10 -");