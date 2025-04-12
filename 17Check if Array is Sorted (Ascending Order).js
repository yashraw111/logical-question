function checkArrayIsSorted(arr){

    for(let i=0;i<arr.length-1;i++){

        if(arr[i]>arr[i+1]){
            return false;
        }
     
    }
   return true


}
console.log(checkArrayIsSorted([1,2,3,5]))
console.log(checkArrayIsSorted([1,3,2,3,5]))