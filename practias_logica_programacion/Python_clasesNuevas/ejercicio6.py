
'''
Dibubar un cuadrado Hueco con asteriscos

'''


def cuadrado(squart):

    asteriscos = (squart-2) * '*'
    espacio = squart * ' '
    for sq in range(1,squart+1):
        if sq != 1 and sq !=squart:
            print(f'*{espacio}*') 
        else:
            print(f'* {asteriscos} *')

cuadrado(20)