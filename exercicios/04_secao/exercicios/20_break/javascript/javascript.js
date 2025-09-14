/* forcando a saida de um loop: Break

        as vezes precisamos parar o loop antes que complete todo o seu ciclo;

        para isso utilizamos Break;

        for(let i = 5; i < 20; i = i + 1){
            if(i % 10 == 0) {
                console.log('Saiu do loop);
                break;
            }
                console.log('Prosseguind o loop');
        }
*/
    for(let i = 0; i < 10; i = i + 1){
        //let nome = "Silvestre"; // loop infinito
        
        if(i == 3){
            nome = "Bruno";
        }
            if(i == 5 && nome == "Bruno") {

                console.log("O nome é Bruno, pode parar.");
                break;
            }

                console.log(i);

    }