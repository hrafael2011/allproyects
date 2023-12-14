

'use strict'

var val1 = Number(prompt('Inserte el valor 1'));
var val2 =Number(prompt('Inserte el valor 2'));


console.log('Del '+val1+" al "+val2+" Estan estos numeros:")
console.log('\n')
if(val1<val2){
    while(val1 < val2){
        val1=val1+1
        if(val1<val2){
            console.log(val1)
       }
    }
}else{
    alert('Error');
    while(val1 > val2){
        val1 = Number(prompt('Inserte el valor 1'));
        val2 =Number(prompt('Inserte el valor 2'));
        if(val1 > val2){
            alert('Error');
        }
    while(val1 < val2){
        val1=val1+1
        if(val1<val2){
           console.log(val1)
         }
}

}
    
        
}



