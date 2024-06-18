"""

Dado un string y un numero repetir el string cuanta veces el numero lo indicque
"""

def repetir_string(text, num):

  repeat_list = []  
  for re in range(num):
    repeat_list.append(text)
  repeact = " ".join(repeat_list)
  print(repeact)
repetir_string("hola", 4)
