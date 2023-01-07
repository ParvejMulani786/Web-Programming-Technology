/* Create an array of 3 numbers,
Use splice to insert 3 more numbers from index2 onwards
Print the array
Use splice to delete all elements after index 3
Print the array
Use push to append 3 more numbers to the array
Print the array and its length
Use splice to delete 0th and 1st elements from the array
Print the array
Use splice to delete 0th element and insert 2 more elements there
Print the array */

let arr=[25,45,78]
console.log(arr)



//[ 25, 45, 78 ]

arr.splice(2,0,10,20,30) //insert at index 2 
console.log(arr)
//[ 25, 45, 10, 20, 30, 78 ]

let rv=arr.splice(3)
console.log(`rv=${rv} arr=${arr} len=${arr.length}`)
//rv=20,30,78 arr=25,45,10 len=3

arr.push(75,68,16)
console.log(arr) //[ 25, 45, 10, 75, 68, 16 ]

arr.splice(0,2)
console.log(arr) //[ 10, 75, 68, 16 ]

arr.splice(0,1,77,89)
console.log(arr) //[ 77, 89, 75, 68, 16 ]
