

def invertir_entero(num):

    string_num = str(num)
    save_string = ''

    for string_n in string_num:
        save_string = string_n + save_string

    convert_string = int(save_string)
    print(f'el numero {num} fue invertido y como resultado tenemos al {convert_string} y es de tipo {type(convert_string)}')
    
invertir_entero(56)