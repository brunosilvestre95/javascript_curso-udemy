/*  for(let lNum = 0; lNum <= 50 ; lNum++){

if(lNum % 2 == 0){

    console.log(`Par: ${lNum}`);
    continue;

} else{

    console.log(`Ímpar: ${lNum}`);

}
}   */

let num = 41;
let divisoes = 0;

    for(let i = 1; i = num; i++){

        if(num % i == 0){
            divisoes++;

        }
    }

    if(divisoes ==2){

        console.log(`O número ${num} é primo.`);

    } else {

        console.log(`O número ${num} não é primo.`);

    }