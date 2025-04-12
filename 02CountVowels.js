// function CountVowels(str){

//     let count =0;
//     str.toLowerCase().split("").map((ele)=>{
//         if(ele=="a"||ele =="e"||ele=="u"||ele=="i"||ele=="o"){
//             count++
//         }
//     })
//     return count

// }
// console.log(CountVowels("Aaa"))

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}
console.log(countVowels("education")); 
