
def num_impares(val1, val2):

    impart_list = []

    if val1 > val2:
        print('Valor 1 debe ser menor que valor 2')
    else:
        for val in range(val1, val2):
            if val %2 !=0:
                impart_list.append(val)
    print(f'la cantidad de numeros impares entre {val1} y {val2} es de {len(impart_list)}')
num_impares(1,21)

