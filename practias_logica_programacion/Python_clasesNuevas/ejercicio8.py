
def invertir_num(valor):
   val_list = list(str(valor))
   val_list.reverse()
   str_val = ''.join((val_list))
   print(int(str_val))
 
invertir_num(1012) 