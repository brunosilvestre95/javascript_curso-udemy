/* 
Estrutura Condicional: if
    o programa vai executar um bloco de código, SE algo acontecer;

    onde algo é a condicao imposta por um statement;

    que resultar em um boolean (true or false);

        exemplo:
            let idade = 19;
                if(idade > 18){
                    console.log('Pode entrar');
                }
*/

let idade = 19;
    if(idade > 18){
        console.log('Pode entrar');
    }

    if (idade > 25){
        console.log("A idade é maior que 25");
    }

let nome = "Silvestre";
    if(nome == "Silvestre" && idade > 18) {
        console.log("Acesso Liberado!");
    }

let passaporte = true;
    if(nome == "Silvestre" && idade > 18 || passaporte == true){
        console.log("Acesso Liberado!!!!");
    }