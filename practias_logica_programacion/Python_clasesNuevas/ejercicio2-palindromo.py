

'''
Palindromo comprobar
'''

def palindromo(text):

    texto_ = text
    texto_list = list(texto_)
    texto_list.reverse()
    rever_text = ''.join(texto_list)
    if rever_text == text:
        return 'es un Palindromo'
    else:
        return 'No es un palindromo'

print(palindromo('ana'))
