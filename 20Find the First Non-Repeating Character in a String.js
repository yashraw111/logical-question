function NonRepeatChar(str){
    let count ={}
    str.split("").map((ele)=>{
        count[ele]= (count[ele]||0)+1
    })
    for(let char of str){
        if(count[char]===1){
            return char
        }
        
    }
    return null
}

console.log("Answer =",NonRepeatChar("dbjbkqjdbkqadb"))