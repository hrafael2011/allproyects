def palindromo(texto):

    text_list = list(texto)

    inver_text_list = ''.join(text_list[::-1])

    if texto == inver_text_list:
        print('Es un palindromo')

    else:
        print('no es un palindromo')

    #print(inver_text_list)
palindromo('reconocer')

