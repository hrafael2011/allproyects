

def notas(califi):

    contador = 0
    aprobado = 0
    reprobado = 0
    
    while contador <= califi-1:
        contador = contador+1
        

        num = int(input('Introduce una calificacion: '))
        if num > 70:
            aprobado+=1
        elif num < 70:
            reprobado+=1
       
    print(f'Total de Aprobados: {aprobado}')
    print(f'Total de Reprobados: {reprobado}')
    
notas(10)