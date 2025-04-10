function checkPalindrome(str){
   let reverse = "";
   for(let i=str.length-1;i>=0;i--){
    reverse +=str[i];
   }
  if(str == reverse){
    return "is palindrome"
  }
  else{
    return " is not palindrome"
  }
}
console.log(checkPalindrome("mam"))