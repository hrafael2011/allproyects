

'''
    Dado un numero, mostrar una escalera con escalore de '[-]'
    usando el numero para los niveles de la escalera.

'''

def ladder(value):

    ladder_value = ''
    for lv in range(value):
        ladder_value = '[-]'+ladder_value
        print(ladder_value)

ladder(6)