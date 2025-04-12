function MissingNum(arr,N){
    let missingNum =[]
    for(let i=0;i<=N;i++){
        if(!arr.includes(i)){
            missingNum.push(i)
        }
    }
    console.log(missingNum)
}
MissingNum([1,2,3,4,2,5],10)