


def getNombre(nombre):
    texto = nombre
    return texto

def getApellido (apellido):
    texto = apellido
    return texto

def getAll(nombre, apellido):
    texto = f'este es mi {getNombre(nombre)} y mi apellido es {getApellido(apellido)}'

    return texto

print(getAll('Anthony','Rafael'))
