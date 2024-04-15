

def tabla_multiplicar(valor):

    for cabezera in range(1,valor):
       print('######################')
       print(f'############ Tabla del {cabezera} ###############')
       print('##########################################')

       for num in range(1,valor):
           print(f'{num} X {cabezera} = {num*cabezera}')
           

tabla_multiplicar(11)