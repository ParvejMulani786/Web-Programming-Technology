function maths(f1){
    let rv=f1(50,10)
    console.log(rv)

}

//passing anonymous function 
/* maths(function(a,b){
    return a-b
}) */

//passing named function
function add(n1,n2){
    return n1+n2
}
maths(add)

//passing fat arrow or lambda function
maths((a,b)=>a*b)

let v1=function(a,b){
    return a/b
}
maths(v1)