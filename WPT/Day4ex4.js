function welcome(country,name){
   

    function indianWelcome(){
        console.log("Namaste",name)
    }
    function USWelcome(){
        console.log("Hawdi",name)
    }
    function JapWelcome(){
        console.log("Konnichiwa",name)
    }
    if(country=="IND")
        indianWelcome()
    if(country=='US')
    USWelcome()
    if(country=='Jap')
    JapWelcome()
    
}

welcome('IND','Parvej')
welcome ('US','Parvej')
welcome("Jap","parvej")
//rv()

