

class Person{
constructor(name,age){
    this.name=name
    this.age=age
    Person.city="Pune"
}

showdatails(){
    console.log(this.name,this.age,Person.city)
}
showAgain(){
    console.log(this.name,this.age,Person.city)
    console.log("this is static method")

}

}

 let obj=new Person("Parvej",25)
// obj.showdatails()
// obj.showAgain()

obj.lname="Mulani"
console.log (obj)

// Person.showdatails()
// Person.showAgain()