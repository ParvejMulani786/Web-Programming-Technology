function cal(num1,num2,choice){

    var result
    if(choice=="+"){
        result=parseInt(num1)+parseInt(num2)
    }
    if(choice=='-'){
        result=parseInt(num1)-parseInt(num2)
    }
    return result
}


let res=cal(25,10,'+')
let res1=cal(45,40,'-')
console.log("Result:"+ res)
console.log("Result:"+ res1)