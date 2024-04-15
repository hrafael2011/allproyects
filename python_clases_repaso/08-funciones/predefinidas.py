



'''
funciones predefinidas
'''

nombre = 'Hendrick Rafael'

# Funciones generales
#para saber que tipo de variable es
print(type(nombre)) 

# se utiliza para comprobar que tipo de varible es
comprobar = isinstance(nombre, str) 
if comprobar:
    print('es un string')
else:
    print('no es un string')

#limpiar lo espacio que hay a los lados
frace = '     mi contenido     '
print(frace.strip())

#eliminar variable
year = 2024
print(year)
if year:
    del year
    print('la variable fue eliminada con exito')


#comprobar cuanto caracteres tiene una variable
texto =  'ff'
print(len(texto))

#encontrar caracteres
frase = 'la vida es bella'
print(frase.find('vida'))

#reemplazar palabras en un string

nueva_frase = frase.replace('vida', 'moto')
print(nueva_frase)

#Mayusculas y minisculas

print(nombre)
print(nombre.upper())
print(nombre)
print(nombre.lower)









