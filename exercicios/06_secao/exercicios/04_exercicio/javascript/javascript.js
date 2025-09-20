/* Mais sobre Escopo:
        atualmente com let e const, 
        qualquer bloco de código pode
        separar seu escopo(um IF por exemplo);

        isso é muito bom pois separa os contextos, com VAR isso nao acontecia;

        ou seja, podemos ter escopos diferentes nao só com funcoes;

            por exemplo:

                let x = 10;
                
                if(true){
                    let x = 20;
                    console.log(x); // ESCOPO IF
                    }

                console.log(x); // ESCOPO GLOBAL
*/

    let x = 10;

    if(x > 5){
        let x = 20;
        x++;
        console.log(x);
    }

    console.log(x);