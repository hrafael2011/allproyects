


def buscar_texto(texto, busqueda=None):

    word =[]
    list_texto = texto.split()
    for list_txt in list_texto:
        if busqueda != None:
            if list_txt in busqueda:
                texto = '[-CENSURADO-]'
                busqueda = '[-CENSURADO-]'
                print(f'{texto} {busqueda}')
            else:
                word.append('No se puede hacer la busqueda')
        elif busqueda == None:
            word.append('No se puede leer la busqueda')
        
       
            
    list_to_set = set(word)
    set_to_strint = ''.join(list_to_set)

    if texto != '[-CENSURADO-]':
        print(set_to_strint)
           
buscar_texto('hola hola')
    