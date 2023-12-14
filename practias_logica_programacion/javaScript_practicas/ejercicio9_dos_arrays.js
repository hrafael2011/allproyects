
'use strict'

function dosArrays(array1, array2){

    let save_array = []
    for(let arr1 of array1){

        if(array2.includes(arr1)){
            save_array.push(arr1)
        }
    }
    console.log(save_array)
}

dosArrays([4,5,6,7],[7,8,9,7,5])