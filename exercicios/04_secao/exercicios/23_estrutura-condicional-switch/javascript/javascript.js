/*  Estrutura condicional: switch

        quando ha a necessidade de varios ifs, podemos utilizar o switch/case;

        para sair de um case podemos utilizar o break;

        podemos inserir uma expressao de fault, para caso nenhum valor for correspondido;

        obs: muitos programadores optam por usar varios ifs!

            exemplo:
                switch(nome){
                    case "Bruno":
                        console.log("O seu nome é Bruno");
                        break;

                    case "Silvestre":
                        console.log("O seu nome é Silvestre");
                        break;

                    default:
                        console.log("O seu nome não é Bruno e nem Silvestre!");
                        break;
                    }
*/

let nome = "Bruno";
    switch(nome){
        case "Bruno":
            console.log("O nome é Bruno");
            break;
        case "Silvestre":
            console.log("O nome é Silvestre");
            break;
        default:
            console.log("O nome não foi encontrado");
            break;
    }