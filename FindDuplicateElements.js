function Array(arr){
    const duplicateArray =[]
    const count = {}
    for(let num of arr){
        count[num]=(count[num] || 0)+1;
    }
    console.log(count)
    for(let key in count){
        if(count[key]>1){
            duplicateArray.push(Number(key))
        }
    }
    return duplicateArray
}
console.log(Array([1,2,8,3,4,2,5,8]))