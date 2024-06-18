'''
 Dados dos arrays, devolver array con solo los elementos comunes entre ambos
'''

def dos_arrays(array1, array2):

    same_value = []
    for arr1 in array1:
        for arr2 in array2:
            if arr1 == arr2:
                same_value.append(arr1)
    print(same_value)



dos_arrays([1,2,3,4,5], [1,3,4,5,6,7] )