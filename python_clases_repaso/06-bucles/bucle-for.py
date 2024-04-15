

contador = 0
resultado = 0

for contador in range(1,5):
    print(f'Va por el numero {contador}')
    resultado = resultado + contador
print(f'El resultado de los numeros del bucle es: {resultado}')



"""
Ejemplo con tabla de multiplicar
"""

valor  = int(input('inserte un valor: '))


for valor2 in range(1,11):
        print(f'{valor}x{valor2} = {valor*valor2}')

   