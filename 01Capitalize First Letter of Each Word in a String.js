function capitalizeFirstLetter(str){

    return str.split(" ").map((ele)=>{
       return ele.charAt(0).toUpperCase()+ele.slice(1)
    })
    .join("")

}

console.log(capitalizeFirstLetter("yash panchal"))