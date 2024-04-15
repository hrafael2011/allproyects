

def frace(frase, busqueda):

    busqueda_add = []
    frase_list = frase.split()
    
    for fra in frase_list:
        if busqueda in fra:
            busqueda_add.append(busqueda)
            
    if len(busqueda_add) == 0:
        del busqueda_add
        print('No hay concidencia')
    else:
          print(f'la palabra {busqueda} aparece {len(busqueda_add)} veces')

  
frace('hola, hola, hola' ,'hola')