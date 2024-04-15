
'use strict'

// Arrays , arreglos , listas , matrices 


// Definicion de Arrays

let nombres = [ 'Rafael', 'Cedano', 'Anthony']

let lenguajes =  new Array('Java' , 'C#', 'Html5', 'C')

/*
console.log(nombres.length)

let elemento = parseInt(prompt('Introduzca el elemento que desea ver ', 0))

if(elemento < nombres.length && elemento >=0 ){
   alert(nombres[elemento])
}else{
 
    alert('debe introducir un numero menor a'+' '+ nombres.length + ' '+ 'tampoco numeros negativos')
}*/
    

// loop con for

document.write('<h1>Lenguajes de programacion</h1>')
document.write('<ul>')
for(let i=0;  i<lenguajes.length; i++){

    document.write( '<li>'+`${lenguajes[i]}`+'</li>') 
}
document.write('</ul>')


// loop con foreach

lenguajes.forEach((lenn,index) =>{
    console.log((index+1)+'-'+lenn)
})

//loop con for in
for(let lenguaje in lenguajes){
    console.log(lenguajes[lenguaje])
}
    





