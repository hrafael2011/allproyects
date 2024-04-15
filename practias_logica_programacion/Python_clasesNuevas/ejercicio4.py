
'''
dada una cadena de texto, darle la vuelta e invertir el orden
de sus caracteres, sin usar metodos propios del lenguaje, 
solo estructuras de control
'''

def vuelta_cadena(texto):

    almacenar_texto = ''

    for vuelta in texto:
        almacenar_texto = vuelta + almacenar_texto
    print(almacenar_texto)



vuelta_cadena('toda la informacion que nesecita saver')