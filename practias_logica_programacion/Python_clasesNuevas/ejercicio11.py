'''

    Dado un text y na busqueda, censurar todas las coincidencias
    de la busqueda en el texto con 

    Si el texto y la busqueda estan vacios mostrar
    "No puede leeer el texto y la busqueda en el texto [-CENSURADO-]"

'''


def busqueda(texto, busca):

    texto_list = []
    conv_txt_list = texto.split()
    for ctl in conv_txt_list:
        if busca  in ctl:
            ctl = '[-Cesurado-]'
            texto_list.append(f'{ctl} -')    
    conv_list_txt = ' '.join(texto_list)
    print(conv_list_txt[:-1])

busqueda('hola, hola, busnos', 'hola')
