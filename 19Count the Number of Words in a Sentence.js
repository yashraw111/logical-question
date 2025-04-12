function CountNumberOfWords(str){

    let count =0;

    str.split(" ").map((ele)=>{
        count++
    })
    console.log(count)
}
console.log(CountNumberOfWords("my name is yash"))