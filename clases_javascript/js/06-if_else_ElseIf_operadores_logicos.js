

var year = 2028;
// negacion

if(year != 2019){
    console.log('El añoi no es 2016 realmente es: ', year)

}

//And
if(year >= 2000 && year <= 2020){
    console.log('Estamos en la era actual')
}else{
    console.log('estamos en la era post moderna')
}

// OR

if(year == 2008 || (year > 2018 && year == 2028) ){
    console.log('el año acaba em 8')
}else{

    console.log('año no registrado')

}