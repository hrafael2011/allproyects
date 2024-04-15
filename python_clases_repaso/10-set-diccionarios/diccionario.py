'''
    Diccionario es tun tipo de datoes que alamacena un conjunto de datos,.
    en formato clave > valor.
    Es parecido aun array asociativo o un objeto json.
'''

persona = {
    'nombre' : 'Victor',
    'apellidos': 'Robles',
    'correo': 'Hendrickweb.net'
}


#print(persona['apellidos'])


# Lista con diccionarios


contactos = [
    {
        'nombre': 'Antonio',
        'email': 'Antoonio@gmai.com'
    },
    {
        'nombre': 'Lus',
        'email': 'lus@gmai.com'
    },
    {
        'nombre': 'salvador',
        'email': 'salvador@gmai.com'
    }
]


#print(contactos[0]['nombre'])


print('##########Contactos lista############')

for contacto in contactos:
    print(f'el nombre es: {contacto["nombre"]}  el Gmail es: {contacto["email"]} ')
    print('#################################################')
