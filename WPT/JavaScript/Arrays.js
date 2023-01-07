
let arr=[34,2.4,'hello',true,"HI"]
console.log(arr,typeof(arr)) //Object type

console.log(arr,arr.length)

//adding elenments in array
arr.push('a',786,"Mulani")
console.log(arr)

//print sepecic element
const arr1=[1,2,'adasd',"xxx",true]
console.log(arr1[3])  //xxx

//document.getElementById("demo").innerHTML=arr1.toString();
// [ 34, 2.4, 'hello', true, 'HI', 'a', 786, 'Mulani' ]
let rv=arr.splice(2,2,"New",111)
console.log(`rv=${rv}  arr=${arr} len=${arr.length}`)


console.log(arr) //[ 34, 2.4, 'New', 111, 'HI', 'a', 786, 'Mulani' ]
let rv1=arr.splice(1)
console.log(`rv1=${rv1} arr=${arr} len=${arr.length}`)



