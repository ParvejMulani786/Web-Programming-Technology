//anonymous function
let rv=function(n1,n2){
    let div=n1/n2
    return div
}
console.log(typeof(rv))
let res=rv(10,5)
console.log(res)

//lamda function or fat arrow notation
let f1=(n1,n2)=>{
    let sub=n1-n2
    return sub
}
    let sub=f1(45,5)
    console.log(sub)

let f2=(n1,n2)=>n1/n2

console.log(f2(25,5))