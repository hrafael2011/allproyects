

def getEmnpleado(nombre, dni=None):
    print(f'Nombre: {nombre}')

    if dni != None:
        print(f'DNI: {dni}')
getEmnpleado('Hendrick', 123456)


print("Calculadora con parametros")

############Calucladora con Parametros#################
print('\n')

def Calculadora(Valor1, Valor2, basicas=False):

    suma = Valor1+Valor2
    resta = Valor1-Valor2
    multi = Valor1*Valor2
    divi = Valor1/Valor2


    cadena = ""

    if basicas != False:
        cadena += "Suma: " + str(suma)
        cadena += "\n"
        cadena += "Resta" + str(resta)
        cadena += "\n"
    else:
        cadena += "Multi: " + str(multi)
        cadena += "\n"
        cadena += "Divi" + str(divi)
    
    return cadena

print(Calculadora(5,5, True))
