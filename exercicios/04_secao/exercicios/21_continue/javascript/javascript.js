/*  Pulando uma execucao do lop: continue

        dependendo da nossa lógica, podemos pular o resto da execucao do loop;
        para isso utilizamos a palavra continuel;

            exemplo:
                let x=  0
                    while(x < 11){
                        x = x + 1;
                        if(x % 2 == 0){
                            continue;
                        }
                            console.log(x);
                            x = x + 1;
                        }
*/

for(let i = 10; i > 0; i = i - 1){
    if(i % 2 == 0){ //quando o numero for par, ele cai no continue, entao só passa pelo ímpar
        console.log("Caiu no continue");
        continue;
    }
        // ele passa os I pares e mostra só os ímpares
    console.log(i);
}