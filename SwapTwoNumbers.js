function swapTwoNumber(){

    let a=12;
    let b=16;

    a=a+b;
    b=a-b;
    a=a-b;

    console.log("a",a)
    console.log("b",b)
}
console.log(swapTwoNumber())