    // >18 cnh true = msg
    // >18 cnh false = msg
    // <18 cnh false = msg

let clienteIdade = 21;
let clienteCNH = true;

    if(clienteIdade > 18 && clienteCNH == false){

        console.log("Maior de idade, não possui CNH. Não pode dirigir, mas pode fazer CNH.")

    }   else if(clienteIdade > 18 && clienteCNH == true){

            console.log("Maior de idade, Possui CNH.")

    }   else { 

            console.log("Menor de idade NÃO possui CNH e NÃO pode dirigir.")

    }