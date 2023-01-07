var d=new Date()
console.log(d) //2023-01-07T17:24:36.918Z

console.log(d.getDate(),d.getDay(),d.getMonth(),d.getFullYear())
// 7 6 0 2023
//getDay ==> 
/*              0 Sunday
                1 Monday
                2 Tuesday
                3 wednesday
                4 thursday
                5 friday
                6 saturday 
                
 getMonth     ==>   0 January */

 /* console.log(d.getUTCDay())  // 6

 var date=new Date("2023-01-31")
 console.log(date.getDay(),date.getDate(),date.getMonth(),date.getFullYear())
 
 var d1 = new Date();
 d1.setDate(26);
 d1.setMonth(0);
 d1.setFullYear(2022);

 const date = new Date();
const [month, day, year]       =   [date.getMonth(), date.getDate(), date.getFullYear()];
const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
console.log(month,day,year) */

/* const today = new Date()
const tomorrow = new Date(2023,2,1)
tomorrow.setHours(today.getHours())
let diff = tomorrow - today // difference in millisec between total ms of today from epoch
                            //and total ms of tomorrow from epoch
console.log(Math.round((((diff/1000)/60)/60)/24 )) */

const today1=new Date()
const tomorrow1=new Date(2023-1-8)

//tomorrow1.setHours(today1.getHours())
let diff1=tomorrow1-today1
console.log("diff "+diff1)
console.log(Math.round((((diff1/1000)/60)/60)/24 )) 

const independence = new Date(1947,7,15)
const republic  = new Date(1950,0,26)
 const today = new Date()

 if(republic >today)
    console.log("republic day is after today")
else
console.log("republic day is before today")



if (republic.valueOf() != independence.valueOf())
    console.log("different")
else
    console.log("same")


    //https://livecodestream.dev/post/date-manipulation-in-javascript-a-complete-guide/
//https://devdocs.io/javascript-date/

const paragraph = 'The quick brown P fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g; //the g indicates that all matching occurences should be grouped
const found = paragraph.match(regex);

console.log(found);

