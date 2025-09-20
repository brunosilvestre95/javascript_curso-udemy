/* Escopo de uma Funcao:
    o que acontece dentro de uma funcao
    fica separado do escopo global;

    o escopo global seria todo  oarquvio de JavaScript;
        por exemplo:
            let n = 10;
            
            const numero = function(){
            let n = 25;
            console.log(n);
            }
            console.log(n);
*/

    let y = 10;
        function imprimir(){
            let y = 150;
            
            console.log(y);
        }
        
    imprimir();

    console.log(y);
    