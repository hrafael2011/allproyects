
def buscar_palabra(palabra, texto):

    list_palabra =[]
    list_text = texto.split()
    
    for txt in list_text:
       
        if txt in palabra:
            list_palabra.append(txt)

    print(f' se repite {len(list_palabra)} veces')


buscar_palabra('info', 'info info laguna')