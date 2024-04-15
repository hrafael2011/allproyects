
def porcentaje(numero, porciento):

    resultado = (porciento/numero)*100

    return  f'el resultado es: {resultado}'

num = int(input('Introduzca el numero: '))
porc = int(input('Introduzca el Porciento: '))

print(porcentaje(num, porc))