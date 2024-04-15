
'''
    ejercicio 1. Hacer un pororama que tena una lista de 8
    numeros enteros y haga lo siguiente:
    -Recorrer la lsita y mostrarla
    -ordenarla y mostrarla
    -mostrar su logitud
    -Buscar algun elemetno (que el usario pida por teclado)
'''

def lista(search_element):

    exercise_list = [1,2,3,5,7,6,4,8]


# -Recorrer la lsita y mostrarla

    for exercise in exercise_list:
        print(exercise)

#-ordenarla y mostrarla
    exercise_list.sort()
    print(exercise_list)

# -mostrar su logitud
    print(len(exercise_list))

#-Buscar algun elemetno (que el usario pida por teclado)
    buscar = exercise_list.index(search)
    print(buscar)




search = int(input('introduce un numero buscar su posicin en la lista: '))
lista(search)