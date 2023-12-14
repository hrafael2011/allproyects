

def cantidad_impares(num1, num2):

    list_num = []
    for num in range(num1, num2):
        if num%2 != 0:
            list_num.append(num)
    print((f'La cantidad de numeros impares que hay entre {num1} y {num2} es de {len(list_num)}'))
    cantidad_impares(1,10)



