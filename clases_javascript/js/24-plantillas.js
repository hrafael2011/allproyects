'use strict'

var nombre = prompt('Mi Nombre es: ')
var apellido = prompt('Mi apellido es: ')

var fullName = `
<h1> Informacion personal</h1>
<h3> Mi nombre es: ${nombre}</h3>
<h3>Mi apellido es: ${apellido}</h3>


`;


document.write(fullName);