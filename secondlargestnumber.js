function SLargestNum(arr){
    let largeNum ;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            arr[i]=arr[i+1]
        }
        
    }
    console.log(arr)

}
SLargestNum([2,3,12,4,53,23,5])