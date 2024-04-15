

def numerosEntreCantidades(num1, num2):

    for num in range(num1+1, num2):
        print(f'.{num}')


n1 = int(input('Inserte el Primer numero: '))
n2 = int(input('Inserte el segundo numero: '))

while(n1>n2):
    n1 = int(input('Inserte el Primer numero: '))
    n2 = int(input('Inserte el segundo numero: '))
    print('El primer valor debe ser menor que el segundo valor')
    print('\n')

if n1 < n2:
    numerosEntreCantidades(n1, n2)
else:
    print('El primer valor debe ser menor que el segundo valor')