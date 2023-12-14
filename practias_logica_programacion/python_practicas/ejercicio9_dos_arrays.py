

def dosArrays(list1, list2):

    save_list = []
    for lis1 in list1:
        if lis1 in list2:
            save_list.append(lis1)
    
    print(save_list)
dosArrays([4,5,6,7],[7,8,9,7,5])