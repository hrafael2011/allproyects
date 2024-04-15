
'use strict'


let nombre = prompt('Introduce tu nombre: ')
let apellido = prompt('Introduce tu apellido: ')

let fullname = `
    <h1>Informaciin del cliente </h1>
    <h2>${nombre}</h2>
    <h2>${apellido}</h2>
`
document.write(fullname)