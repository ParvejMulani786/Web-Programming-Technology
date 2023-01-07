//named function
function multiply(n1,n2)
{
    if(typeof(n1)=='number' && typeof(n2)=='number'){
        let mult=n1*n2
        return mult
    }
    else{
        return "wrong input!!"
    }
   
}

// let multi=multiply(10,20) //200
// let multi1=multiply(10,20,5) //200 
 let multi2=multiply(10)  //wrong Input
//let multi3=multiply(p) 
//let multi4=multiply("parvej","mulani")
// console.log(multi)
// console.log(multi1)
console.log(multi2)
///console.log(multi4)

