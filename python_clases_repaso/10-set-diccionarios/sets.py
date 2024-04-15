'''
    SET es un tipo de datos, ara tener una coleccion de valores, 
    pero no tiene ni indice ni orden


'''

personas = {
    'Francisco',
    'Manolo',
    'Francis'
}

# Metodos para  set 

personas.add('Paco')
personas.remove('Francisco')

print(type(personas))
print(personas)