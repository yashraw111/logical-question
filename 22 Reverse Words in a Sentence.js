function ReverseSentence(str){
//    return  str.split(" ").reverse().join("")
// return str.length

let word = "";
    let words = [];

for (let i = 0; i <= str.length; i++) {
    if (str[i] === " " || i === str.length) {
        words.push(word);
        word = "";
    } else {
        word += str[i];
    }
}

console.log(word)


}
console.log(ReverseSentence("my self yash panchal"))