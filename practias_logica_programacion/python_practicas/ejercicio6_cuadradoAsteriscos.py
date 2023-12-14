

def cuadrado_asteriscos(num):
    ancho = '*'*(num-2)
    ancho_espacio =' '*(num-2)
    for nu in range(1,num+1):
        if nu == 1 or nu == num:
            print('*'+ancho+'*')
        else:
            print('*'+ancho_espacio+'*')
cuadrado_asteriscos(10)