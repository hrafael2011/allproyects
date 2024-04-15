'''
    Las listas son una coleccion de datos bajo un mismo nombre
    para acceder a esos valores odemos usar un indice numerico
'''


#definir lista

peliculas = ['Batman','Superman', 'el señor de los anillos']
cantantes = ('2pac', '50cent', 'Snup dog') # esto es una tupla mas abajo la estoy convertiendo en una lista
cantantes_list = list(cantantes)
years = list(range(2020,2050))
variada = ['victor', 30, 4.4,  True, 'texto']


'''
print(peliculas)
print(cantantes)
print(cantantes_list)
print(years)
print(variada[0])

'''

print(peliculas[1]) # esta sacando el indice uno que este caso seria el segundo ya que empieza en 0
print(peliculas[-2]) # tambien se puede llamar indice en negativos
print(cantantes_list [1:3]) # de esta forma puedo establecer un rango del indice 1 al indice 3
print(peliculas[2:]) # aqui epecera desde el indice 2 en adelante 

# Añadir elementos a una lista

cantantes_list.append('Chayanne')
print(cantantes_list)


#recorrer lista

'''
print( '\n ******Listado de pelicuas*****')

nueva_pelicula = ''

while nueva_pelicula != 'parar':
    nueva_pelicula = input('Introduce la nueva pelicula: ')
    peliculas.append(nueva_pelicula)
if nueva_pelicula ==  'parar':
    del peliculas[-1]


for pelicula in peliculas:
    print(f'{peliculas.index(pelicula)+1}.{pelicula}')
'''

####################### listas bidimencional#################

contactos = [

    [
        'Rafael',
        'rafael@gmail.com'
    ],
    [
        'Hendrick',
        'hendrick@gmail.com'
    ],
    [
        'Cedano',
        'cedano@gmail.com'
    ]

]

for contacto in contactos:
    for elemento in contacto:
        if contacto.index(elemento) == 0:
            print(f'Nombre: {elemento}')
        else:
            print(f'Gmail: {elemento} ')
    print('\n')


