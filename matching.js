var input1= document.getElementById("input1st");
var input2=document.getElementById("input2nd");


document.getElementById("input1st").addEventListener("change", matchDate);
document.getElementById("input2nd").addEventListener("change", matchDate);


var weekdays = document.querySelectorAll('.days')
function matchDate(){
//var inputDate = new Date(input1.value)
//var day = inputDate.getDay()
 //var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

for(var i = 0; i < weekdays.length; i ++){

   weekdays[i].classList.remove("mydate1");
   weekdays[i].classList.remove("mydate2");
   weekdays[i].classList.remove("mystyle");


  if(input1.value !== ""){
             var newDate1 = new Date(input1.value);
             var day1 = newDate1.getDay();
         } else {
             var day1 = "";
         }
         if(input2.value !== ""){
             var newDate2 = new Date(input2.value);
             var day2 = newDate2.getDay();
         } else {
             var day2 = "";
         }

         if(day1 === day2 && day1 !== "" && day2 !== ""){
                weekdays[day1].classList.add("mystyle");   //give the day green colour
            }
            else if( day1 !== "" && day2 !== "" && day1 !== day2){
                weekdays[day1].classList.add('mydate1');
                weekdays[day2].classList.add('mydate2');

            }else if (day1 !== "" && day1 !== day2 && day2 === "") {
                weekdays[day1].classList.add('mydate1');


            } else if (day2 !== "" && day1 !== day2 && day1 === ""){
                weekdays[day2].classList.add('mydate2');
            //     days[whichDag1].classList.add('mydate1');
             }

  }
}
