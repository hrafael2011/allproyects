
'use strict'

var fecha = new Date();
console.log(fecha)

var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();

document.write('<p>'+year +'</p>');
document.write('<p>'+mes +'</p>');
document.write('<p>'+dia +'</p>');
document.write('<p>'+hora +'</p>');