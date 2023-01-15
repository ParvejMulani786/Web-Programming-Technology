/* 
output=SAME
let str1='abc'  //primitive String type
let str2='abc'  //primitive String type
//if type of string is same (i.e primitive string) then content is compared
if(str1==str2){
    console.log('same')
}
else{
    console.log("different")
} */


/* 
output=SAME
//primitive String and Object String
let str3='abc'
let str4=new String ('abc')
//one is primitive string and other is Object String
//object string converted into primitive bt valueof()(internally)
//and content is checked
 //// Internally ==> if(str3.valueOf() == str4.valueOf() )
if(str3==str4){
   
    console.log('same')
}
else{
    console.log("different")
} */

/* //Object String and Object String
//output=DIFFERENCE
let str5=new String ('abc') //contains one address
let str6=new String ('abc') //contains another address

//both are object string first address compared,if same then value compared
//and content is checked
if(str5==str6){
    console.log('same')
}
else{
    console.log("different")
} */


//Object String and Object String
//output=SAME
/* let str5=new String ('abc') //contains one address
let str6=str5 //contains same address

//both are object string first address compared,if same then value compared
//and content is checked
if(str5==str6){
    console.log('same')
}
else{
    console.log("different")
} */


var name='parvej'
var city='pune'
console.log(`hello ${name} welcome to ${city}`)
console.log("Hello "+name+" Welcome to "+city)


