'''
    Ejercicio 3. programa que comprueve si una variable esta vacia 
    y si esta vacia, rellnerla con texto en minusculas y mostrarlo
    en mayusculas.

'''

def texto(rellenar):

    texto = 'afafaf'

    if len(texto) == 0:
        texto = rellenar.lower()
        print(texto.upper())
    else:
        print(f'la variable tien contenido; {texto}')

texto('Este texto permitira rellenar la informacion')