function findLargest(arr){
    if(arr.length ===0) return undefined

    let largest = arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest =arr[i]
        }
    }
    return largest
}

console.log(findLargest([29,31,55,66]))