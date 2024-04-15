'''
    Escribir valores a una lista mientras que su logintud sea menor a 120 y luego motrarla
  
'''


def longitud_lista():

    lista =[]
    contador = 0

    while contador < 120:
        contador +=1
        lista.append(contador)
        print(len(lista))

longitud_lista()


lista =[]

for lis in range(0,120):
    lista.append(lis)
    print(len(lista))