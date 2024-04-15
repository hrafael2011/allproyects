

'''
    Crear un script que tenga 4 variables, una lista, un string,
      un entero y un boolerano y que imprima un mensaje
      seun el tipo de dato de variable.
'''

tipos_var = [1, 'texot', 2.2 , True, (4,5), {5,7}, {'nombre': 'Rafael'}]

for tipo in tipos_var:
    print(type(tipo))