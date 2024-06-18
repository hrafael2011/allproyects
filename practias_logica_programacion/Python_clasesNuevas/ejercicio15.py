"""
Dada una carena de caracteres devorver el caracter que mas se repite
"""

def caracte_mas_repetido(caracter):

    caracter_list = list(caracter)
    caracter_set = set(caracter_list)
    caracter_string = " ".join(caracter_set)
  
    for ca in caracter_string:
        if ca in caracter:
            print(ca)
        else:
            print(ca)

caracte_mas_repetido("hoooolaa")