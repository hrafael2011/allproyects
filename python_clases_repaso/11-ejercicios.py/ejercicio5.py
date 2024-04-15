'''
    Crear una lista con el contenido de esta tabla:
    Accion    Aventura          Deportes
    GTA        Assins           Fifa 21
    GOD        Prince of percia  Pro 21
    PUGB       Crashh            Moto GP 21

    mostrar esta iformacion ordenada  
'''

tabla = [
    {
        'categoria': 'ACCION',
        'jUEGOS': ['GTA', 'CALL OF DUTY', 'PUGB']
    },
    {
        'categoria': 'Aventura',
        'jUEGOS': ['Assins', 'Prince of percia', 'Crash']
    },
    {
        'categoria': 'Deportes',
        'jUEGOS': ['Fifa 21', 'Pro 21', 'Moto GP 21']
    }
   
]


for categoria in tabla:
    print(f'-----------{categoria["categoria"]}-----------')
    for juego in categoria['jUEGOS']:
        print(juego)