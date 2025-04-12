function SumOffAllDigit(num){
    // console.log(num)
    let Sum = 0;
    num.split("").forEach((ele)=>{
        Sum += Number(ele)
    })

    console.log(Sum)
}
SumOffAllDigit("12345")