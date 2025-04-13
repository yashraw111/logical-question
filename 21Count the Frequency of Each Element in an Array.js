function CountEachElement(arr){

    const NewElement= {}
    for(let ele of arr){
        NewElement[ele]=(NewElement[ele]||0)+1
        
    }
    return NewElement

}
console.log(CountEachElement([1,3,1,2,3,4,2,4,4,5]))