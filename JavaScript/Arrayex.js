// let arr=[12,34,56,89]
// let arr1=['a',12,'@',2.5]

// arr.foreach(element=>{console.log(element)})
//arr.forEach((index,value)=>console.log(index,value))
/* o/p 12 0
34 1
56 2
89 3 

arr1.forEach((value)=>{
    console.log(value)
})
*/
// arr1.map((value)=>{
//     console.log(value*value)
// })

// array 
// Syntax ==> array.map(function(currentValue, index, arr), thisValue)
// const persons=[{ firstname:"PArvej",Lastname:"Mulani"},
// {firstname:"Shahrukh",Lastname:"Mulani"},
// {firstname:"sahil",Lastname:"Mulani"}]


// function fullname(items){
//     return [items.firstname,items.Lastname].join(" ")
// }

// let name=persons.map(fullname)
// console.log(name)

//let age=[54,14,16,24,28]

// let newArr=age.filter(checkAdult)
// console.log(newArr)
// function checkAdult(age){
//     return age>=18
// }
// let arr4=age.filter((v)=>{return v>18})
// console.log(arr4)


// let arr3=[65,8,1,0,4,12,47]
// console.log("before Sorting",arr3)

// arr3.sort((n1,n2)=> { 
//     if(n1>n2)
//     return 1;
//     if(n1<n2)
//     return -1;
//     else
//     return -1 ;

// })
// console.log("after Sorting",arr3)


//MATCH
//pattern 

// let pattern5=/[a-z A-Z]+[0-9]{3}$/

// var arr6= ['hellow123','1234567',
// '678','re5tr34','rto09','row333','111rrrr444']

// arr6.filter((element)=>{
//     return element.match(pattern5)
// }).forEach((v)=>{console.log(v)})



// let pattern1=/[a-z]+[0-9]{3}$/

// var num=['Ht555','TTT123','ssf333','5433dad','bfvjv@123']

// num.filter((v)=>{return v.match(pattern1)}).forEach((v)=>{console.log("========="+v)})

let pattern7 =/[a-z A-Z -_][@a-z]+\.[a-z A-Z]{2,3}$/


// let emailpattern = /[a-zA-Z -_]+@[a-z A-z]+\.[a-z A-Z]{2,3}$/
var arr7= ['---@aaa.com','pra@gmail.org',
'pra_g@hotmail.com','pra@hotmail','pra__gre@ggg.vvv',
"test@gov.in"]

// arr7.filter((element)=>{
//     return element.match(emailpattern)
// }).forEach((element)=>{console.log(element)})

arr7.filter((element)=>{return element.match(pattern7)}).forEach((v)=>{console.log(v)})