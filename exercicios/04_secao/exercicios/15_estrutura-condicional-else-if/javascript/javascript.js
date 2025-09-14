/*
    Estrutura condicional: else if

        Podemos encadear mais condicoes com o Else If

        ou seja, antes de executar um else, ou ate msm sem ele, podemos verificar mais uma condicao;

            exemplo:
                let a = 5;
                let b = 3;
                    
                    if(a + b == 3) {
                        console.log('O resultado é 3');
                        } else if (a == 4) {
                            console.log('O valor de a é 4);
                        } else if {
                            console.log('O valor de b é 3'); 
                        } else {
                            console.log('Nenhuma das condicoes acima!');
                        }
*/
    let nome = "Silvestre";
    let idade = 28;
        
        if(nome != undefined && nome == "Joaquin") {

            console.log("Nome está definido")

        } else if( nome == "Matheus" && nome.length > 5 && idade == 50) {

            console.log("O nome é Matheus");

        } else {

            console.log("Não é Matheus!");
            
        }