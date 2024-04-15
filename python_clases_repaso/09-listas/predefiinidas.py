

# definicion de listas

cantantes = ['2pac', 'Drake', 'Bad Bunny','Erique Iglesias',]
numeros = [1,2,3,4,8,5,7,6]

#ordenar
numeros.sort() # ordena los elementos de forma ascendente
print(numeros)
cantantes.sort(key=lambda x: x[1]) # esta permite ordenar por medio de un elemento del array que yo decida usando una funcion lambda o otra que yo tenga definida
print(cantantes)
numeros.sort(reverse=True) # ordena lo elementos de forma descendete
print(numeros)

#añadir elementos 
cantantes.append('aventura')
cantantes.insert(1, 'David Bisbal')# este permite añadir elementos para hay que indicar en que indice ira
print(cantantes)

#Eliminar elementos
cantantes.pop(1)
cantantes.remove('Bad Bunny')


#Dar la vuelta
numeros.reverse()


#buscar dentro de una lista
print('Drake' in cantantes)


#contar elementos 
print(len(numeros))


#Cuantas veces aparece un elemento  
print(numeros.count(8))


#conseguir indice
print(cantantes.index('Drake'))

#unir listas
cantantes.extend(numeros)
print(cantantes)

