

'''
    Realizar una tabla de multplicar

'''


def tabla(valor):

    for tabl in range(1,valor+1):
       print(f'##################Tabla del {tabl}#####################')
       print('\n')
       for tab in range(1,12+1):
            print(f'{tabl}X{tab} = {tabl*tab}')
tabla(12)
          
        

