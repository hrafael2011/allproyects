'''
    Dado un numero mostrar todos los numeros desde ese al 0 de 8 en 8
    en una lista con guiones donde cada numero debe empear por n°

'''


def numero(valor):
  
    while valor > 0:
        valor = valor-8
        print(f'n°{valor+8}')
 
numero(100)