function sum(...n){
    let sum=0
    for(let i=0;i<n.length;i++){
        sum=sum+n[i]
    }
    console.log(sum)
}
sum(10,20,30,40)
sum(10,20)

//String conacat()
str1="Parvej"
str2="Mulani"
console.log(str1.concat(" "+str2))

// sum(...n,...p) Not allowed

/* Not Allowed
function f2(...n,name)
{

}*/
function nameAddPhone(name,address,...n){
    let str=""
    for(i=0;i<n.length;i++){
         str=str+n[i]+""
    }
    console.log(name,address,str)
}

nameAddPhone('parvej','mulani',"+"+919485499412)
