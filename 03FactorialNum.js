function fatrorial(num){
    let fact =1;
    while(num>0){
        fact*=num;
        num--
    }
    return fact
}
console.log(fatrorial(3))