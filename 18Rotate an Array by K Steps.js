function RotateArray(arr,k){

    for(let i=arr.length;i>arr.length-k;i--){

        arr.unshift(arr.pop(arr[i]))
    }
    return arr

}
console.log(RotateArray([1,2,3,4,5,6],2))