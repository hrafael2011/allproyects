
contador = 1

while contador < 100:
    contador +=1
    print(contador)


    print('--------------------------------------')

    contador = 1
    muestrame = str(0)

    while contador < 101:
        muestrame = muestrame + ','+ str(contador)
        contador = contador + 1
    print(muestrame)


    print('---------------------------------------------------')

    usuario_numero = int(input('Inserte un numero: '))

    if usuario_numero < 1:
        usuario_numero = 1
    
    print(f'Tabla de multiplicar del {usuario_numero}')

    contador = 1

    while contador <= 10:
        print(f'{usuario_numero}x{contador} = {usuario_numero*contador}')
        contador+=1
    else:
        print('tabla terminada')